const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3001;

// Datos simulados --> como si fuera lo que nos devuelve la BDD
let students = [
  { id: "A001", nombre: "Abril", curso: "1º DAW" },
  { id: "A002", nombre: "Marc", curso: "1º DAM" }
];

// Devuelve JSON
function sendJson(res, statusCode, data) {
  res.statusCode = statusCode;
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.end(JSON.stringify(data));
}


//asincrono
const server = createServer(async (req, res) => {

  console.log(req.method, req.url);

  // GET /students
  if (req.method === "GET" && req.url === "/students") {
    return sendJson(res, 200, students);
  }

  // TODO 1: GET /students/:id
  //Buscamos la info de un alumno completo.
  if (req.method === "GET" && req.url.startsWith("/students/")) {


    //1. Extraer id de la URL
    let url = req.url.split("/");
    let id = url[url.length - 1];


    // 2. Buscar alumno en el array
    let trobat = false;
    for (let student of students) {
      if (id == student.id) {
        trobat = true;
        return sendJson(res, 200, student);
      }
    }

    // 3. Si no existe → 404
    if (!trobat) {
      return sendJson(res, 404, { missatge: "Not Found" });
    }
    // 4. Si existe → devolver 200 + alumno


  }

  // TODO 2: DELETE /students/:id
  if (req.method === "DELETE" && req.url.startsWith("/students/")) {

    let trobat = false;

    // 1. Extraer id
    let url = req.url.split("/");
    let id = url[url.length - 1];

    // 2. Comprobar si existe
    for (let student of students) {
      if (id == student.id) {
        trobat = true;
      }
    }
    // 3. Eliminarlo del array
    if (trobat) {
      students = students.filter(student => student.id != id)
      res.statusCode = 204;
      return res.end();
    }
    else {
      // 4. Si no existe → 404
      return sendJson(res, 404, { missatge: "Estudiant no trobat." })
    }



    // 5. Si se elimina → 204 (sin body)

  }
  // TODO 3: POST /students
  if (req.method === "POST" && req.url === "/students") {
    try {
      const alumno = await readBody(req);
      // 1. Leer el body con readBody() --> await

      // 2. Validar que tenga id, nombre y curso
      if (!alumno.id || !alumno.nombre || !alumno.curso) {
        return sendJson(res, 400, { message: "Falten camps" });
      }
      // 3. Comprobar que el id no esté repetido
      if (students.some(student => student.id === alumno.id)) {
        return sendJson(res, 409, { message: "L'id no pot estar repetit" });
      }

      // 4. Añadir al array students
      students.push(alumno);

      // 5. Devolver 201 + alumno creado
      return sendJson(res, 201, alumno);

    } catch {
      //Si hay algún error.
      return sendJson(res, 400, { message: "JSON inválido" });
    }

  }

  // TODO 4: PUT /students/:id
  if (req.method === "PUT" && req.url.startsWith("/students/")) {
    let trobat = false;
    // 1. Extraer id
    let url = req.url.split("/");
    let id = url[url.length - 1];

    let alumnoModificar;
    // 2. Buscar alumno
    for (let student of students) {
      if (id == student.id) {
        trobat = true;
        alumnoModificar = student;
      }
    }
    if (trobat) {
      try {
        // 4. Leer body con readBody() --> await
        const alumno = await readBody(req);

        //Validar que tenga id, nombre y curso
        if (!alumno.nombre || !alumno.curso) {
          return sendJson(res, 400, { message: "Falten camps" });
        }

        // 5. Actualizar campos enviados
        alumnoModificar.nombre = alumno.nombre;
        alumnoModificar.curso = alumno.curso;

        // 6. Devolver 200 + alumno actualizado
        return sendJson(res, 200, alumnoModificar);

      } catch {
        //Si hay algún error.
        return sendJson(res, 400, { message: "JSON inválido" });
      }

    }
    // 3. Si no existe → 404
    else return sendJson(res, 404, { message: "No s'han trobat usuaris amb aquest id" + id });




  }



  // Si no coincide ningún endpoint
  sendJson(res, 404, { message: "Not Found" });

});


/* TODO: Crear función que lea el body y devuelva el JSON parseado
En Node puro, el body no viene empaquetado.
Llega en trozos.
Tenemos que montarlo nosotros.*/
/*function readBody(req, callback) {
  let body = "";

  req.on("data", chunk => {
    //Vamos obteniendo los trozos
    body += chunk;
  });

  req.on("end", () => {
    try {
      const alumnoNew = JSON.parse(body);
      //Aquí ya tenemos al alumno.
      callback(null, alumnoNew);
    } catch (err) {
      callback(err);
    }
  });
}*/

//MEJOR usando PROMESAS
// Lee el body y devuelve el JSON parseado como Promise (en lugar de callbacks)
function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", chunk => body += chunk);
    req.on("end", () => {
      try {
        resolve(JSON.parse(body));
      } catch (err) {
        reject(err);
      }
    });
  });
}

//TODO las funciones callback necesarias.

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

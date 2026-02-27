import express from 'express';
import studentsRouter from './routes/students.routes.js';
const app = express();
const PORT = 3001;

// Middlewares globales
app.use(express.json());

// Log mínimo
app.use((req, res, next) => {
 console.log(req.method, req.url);
 next();
});

// Rutas
app.use('/students', studentsRouter);


// Middleware de errores
app.use((err, req, res, next) => {
 console.error(err.message);
 res.status(500).json({ message: "Error interno" });
});


//Escoltem peticions
app.listen(PORT, () => {
 console.log(`Servidor corriendo en http://localhost:${PORT}/`);
});





























// Datos simulados --> como si fuera lo que nos devuelve la BDD
let students = [
  { id: "A001", nombre: "Abril", curso: "1º DAW" },
  { id: "A002", nombre: "Marc", curso: "1º DAM" }
];

//Tots els estudiants
app.get("/students", (req, res) => {
  res.json(students);
});


// TODO 1: GET /students/:id
//Buscamos la info de un alumno completo.
app.get("/students/:id", (req, res) => {

  // 2. Buscar alumno en el array
  let trobat = false;
  for (let student of students) {
    if (req.params.id == student.id) {
      trobat = true;
      return res.status(200).json(student);
    }
  }
  // 3. Si no existe → 404
  if (!trobat) {
    return res.status(404).json({ message: "No existeix cap alumne amb l'id " + req.params.id });
  }
});





// TODO 2: DELETE /students/:id
app.delete("/students/:id", (req, res) => {

  // 2. Buscar alumno en el array
  let trobat = false;
  for (let student of students) {
    console.log("entra for" + student.id)
    if (req.params.id == student.id) {
      console.log("entre if")
      trobat = true;
      students = students.filter(student => student.id != req.params.id);
      
      return res.status(204).json({ message: "Alumne esborrat amb exit"  });
    }
  }
  // 3. Si no existe → 404
  if (!trobat) {
    return res.status(404).json({ message: "No existeix cap alumne amb l'id "  });
  }
});




// TODO 3: POST /students
app.post("/students/", (req, res) => {

  try {
    // 4. Añadir al array students
    students.push(req.body);

    // 5. Devolver 201 + alumno creado
    return res.status(201).json(req.body);

  } catch {
    //Si hay algún error.
    return res.status(400).json({ message: "JSON inválido" });
  }
});






// TODO 4: PUT /students/:id
app.put("/students/:id",(req, res) => {
  let trobat = false;

  let alumnoModificar;
  // 2. Buscar alumno
  for (let student of students) {
    if (req.params.id == student.id) {
      trobat = true;
      alumnoModificar = student;
    }
  }

  if (trobat) {
    try {
      // 4. Leer body con readBody() --> await
      const alumno = req.body;

      //Validar que tenga id, nombre y curso
      if (!alumno.nombre || !alumno.curso) {
        return res.status(400).json({ message: "Falten camps" });
      }

      // 5. Actualizar campos enviados
      alumnoModificar.nombre = alumno.nombre;
      alumnoModificar.curso = alumno.curso;

      // 6. Devolver 200 + alumno actualizado
      return res.status(200).json(alumnoModificar);

    } catch {
      //Si hay algún error.
      return res.status(400).json({ message: "JSON inválido" });
    }

  }
  // 3. Si no existe → 404
  else return res.status(404).json({ message: "No s'han trobat usuaris amb el id " + req.params.id });


});


function buscarAlumno(){

}

function validarDades(){}













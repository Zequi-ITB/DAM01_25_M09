
//events Students
let botonGetAllStudents = document.getElementById("btn-getall-students");
botonGetAllStudents.addEventListener("click", () => {
    resetTaulaStudents();
    handlerGetAllStudentsClick()
});


let botonCreateStudent = document.getElementById("btn-create-student");
botonCreateStudent.addEventListener("click", () => {
    handlerCrearStudentClick()
});







//Events notas
let botonGetAllNotas = document.getElementById("btn-getall-notas");
botonGetAllNotas.addEventListener("click", () => {
    resetTaulaNotas();
    handlerGetAllNotasClick()
});


//STUDENTS
async function handlerGetAllStudentsClick() {
    try {
        const datos = await getAllStudents();
        if (datos) {
            loadTablaStudents(datos);
        }
        else alert("NO HAY STUDENTS");
    }
    catch (error) {
        alert(error.message);
    }
}

function loadTablaStudents(datos) {

    let tabla = document.getElementById("students-table-body");

    if (!Array.isArray(datos)) {
        let fila = document.createElement("tr");
        fila.innerHTML = `<td>${datos.id}</td><td>${datos.nombre}</td><td>${datos.curso}</td>`
        tabla.appendChild(fila);
    }
    else {
        for (let student of datos) {
            let fila = document.createElement("tr");
            fila.innerHTML = `<td>${student.id}</td><td>${student.nombre}</td><td>${student.curso}</td>`
            tabla.appendChild(fila);
        }
    }
}

//resetear tabla
function resetTaulaStudents() {
    let tabla = document.getElementById("students-table-body");
    tabla.innerHTML = "";
}




async function handlerCrearStudentClick() {
    try {
        //const datos = await getAllStudents();
        if (datos) {
            //loadTablaStudents(datos);
        }
        else alert("NO HAY STUDENTS");
    }
    catch (error) {
        alert(error.message);
    }
}



//NOTAS

async function handlerGetAllNotasClick() {
    try {
        const datos = await getAllNotas();
        if (datos) {
            loadTablaNotas(datos);
        }
        else alert("NO HAY NOTAS");
    }
    catch (error) {
        alert(error.message);
    }
}

//resetear tabla
function resetTaulaNotas() {
    let tabla = document.getElementById("notas-table-body");
    tabla.innerHTML = "";
}


function loadTablaNotas(datos) {

    let tabla = document.getElementById("notas-table-body");

    if (!Array.isArray(datos)) {
        let fila = document.createElement("tr");
        fila.innerHTML = `<td>${datos.id}</td><td>${datos.studentId}</td><td>${datos.modulo}</td><td>${datos.nota}</td>`;
        tabla.appendChild(fila);
    }
    else {
        for (let nota of datos) {
            let fila = document.createElement("tr");
            fila.innerHTML = `<td>${nota.id}</td><td>${nota.studentId}</td><td>${nota.modulo}</td><td>${nota.nota}</td>`;
            tabla.appendChild(fila);
        }
    }
}
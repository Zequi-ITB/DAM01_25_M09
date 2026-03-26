console.log("Contenido inicial:", localStorage);

document.getElementById("addAlumno").addEventListener("click", addAlumno);
document.getElementById("delLocalStorage").addEventListener("click", delLocalStorage);

function addAlumno(event) {
    // EVITAR que el formulario recargue la página
    event.preventDefault();

    const alumno = {
        nombre: document.getElementById('nombre').value,
        apellidos: document.getElementById('apellidos').value,
        curso: document.getElementById('curso').value,
        fechaNacimiento: document.getElementById('fechaNacimiento').value
    };

    if(!alumno.nombre) return alert("Rellena al menos el nombre");

    const alumnoSerialized = JSON.stringify(alumno);
    // Usar un ID único o la longitud actual
    localStorage.setItem('alumno' + localStorage.length, alumnoSerialized);
    
    console.log("Alumno guardado. Total:", localStorage.length);
    document.getElementById("form").reset(); // Limpia el formulario
}

function delLocalStorage(event) {
    event.preventDefault();
    // Forma limpia y rápida de vaciar TODO el almacenamiento del origen
    localStorage.clear();
    console.log("LocalStorage vaciado");
}
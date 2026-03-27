const API_STUDENTS = `http://localhost:3001/students`
const API_NOTAS = `http://localhost:3001/notas`


//Students

async function getAllStudents() {
    try {
        const res = await fetch(API_STUDENTS);

        if (!res.ok) {
            throw new Error(`Error HTTP ${res.status}`);
        }

        return await res.json();

    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
}


//NOTAS
async function getAllNotas() {
    try {
        const res = await fetch(API_NOTAS);

        if (!res.ok) {
            throw new Error(`Error HTTP ${res.status}`);
        }

        return await res.json();

    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
}

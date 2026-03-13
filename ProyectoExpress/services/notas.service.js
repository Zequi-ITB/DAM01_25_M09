import { nextId, notas } from '../data/notas.js';
import { students } from '../data/students.js';
import { incrementarId } from '../data/notas.js';

// Valida campos mínimos
function validateNota(obj) {
  if (!obj || typeof obj !== "object") return "Body inválido";
  if (!obj.studentId || !obj.modulo || !obj.nota) return "Faltan campos.";
  if (obj.nota < 0 || obj.nota > 10) return "Nota invalida";
  return null;
}
// Comprueba si el id ya existe
const existsId = (id) => notas.some(s => s.id === id);

const existsIdAlumno = (id) => students.some(s => s.id === id);

export function getAll() {
  return notas;
}


//Busquem les notes d'un alumne amb el seu id
export function getById(id) {
  return notas.find(s => s.studentId == id);
}

export function create(notaNew) {
  const validationMsg = validateNota(notaNew);
  if (validationMsg) return { error: validationMsg };
  if (!existsIdAlumno(notaNew.studentId)) return { error: "id de alumno no valido", status: 409 };
  //if (existsId(notaNew.id)) return { error: "id ya existe", status: 409 };
  let notaCreada = { id: nextId, studentId: notaNew.studentId, modulo: notaNew.modulo, nota: notaNew.nota };

  notas.push(notaCreada);

  incrementarId();

  return { data: notaCreada };
}


export function update(id, payload) {
  const idx = notas.findIndex(s => s.id === id);
  if (idx === -1) return null;

  if (payload && typeof payload === "object") {
    if (payload.modulo !== undefined) notas[idx].modulo = payload.modulo;
    if (payload.nota !== undefined) notas[idx].nota = payload.nota;
  }

  return notas[idx];
}

export function remove(id) {
  const before = notas.length;
  const filtered = notas.filter(s => s.id !== id);

  if (filtered.length === before) return false;

  notas.length = 0;
  notas.push(...filtered);
  return true;
}


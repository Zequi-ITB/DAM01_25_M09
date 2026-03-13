import { productosJSON } from '../data/camisetas.js';


// Comprueba si el id ya existe
const existsId = (id) => JSON.parse(productosJSON).some(s => s.id === id);


export function getAll() {
  return JSON.parse(productosJSON);
}


//Busquem les notes d'un alumne amb el seu id
export function getById(id) {
  if (existsId(id)) {
    return JSON.parse(productosJSON).filter(s => s.id === id);
  }
  return { error: "Camiseta no encontrada" };

}



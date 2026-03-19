import { productosJSON } from '../data/camisetas.js';


// Comprueba si el id ya existe
const existsId = (id) => JSON.parse(productosJSON).some(s => s.id === id);


export function getAll() {
  let productes = JSON.parse(productosJSON);

  return productes;
}



export function getById(id) {

  return JSON.parse(productosJSON).filter(s => s.id === id);


}

export function comprovarCamiseta(idComprovar, tallaComprovar, colorComprovar) {

  if (!existsId(idComprovar)) return false;
  else {
    let camiseta = JSON.parse(productosJSON).filter(s => s.id === idComprovar);
    if (!camiseta[0].tallas.some(talla == tallaComprovar)) return false;
    else if (!camiseta[0].colores.some(color == colorComprovar)) return false;
    else return true;
  }

}



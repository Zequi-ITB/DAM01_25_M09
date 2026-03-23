import { productosJSON } from '../data/camisetas.js';


// Comprueba si el id ya existe
const existsId = (id) => JSON.parse(productosJSON).some(s => s.id === id);


export function getAll() {
  let productes = JSON.parse(productosJSON);

  return productes;
}

export function getAllFilter(req) {
  if (req.query.talla) {
    return JSON.parse(productosJSON).filter(camiseta => camiseta.tallas.some(talla => talla === req.query.talla));
  }
  if (req.query.color) {
    return JSON.parse(productosJSON).filter(camiseta => camiseta.color.some(color => color === req.query.color));
  }
  if (req.query.tag) {
    return JSON.parse(productosJSON).filter(camiseta => camiseta.tags.some(tag => tag === req.query.tag));
  }
  if (req.query.q) {

  }



}


export function getById(id) {
  return JSON.parse(productosJSON).filter(s => s.id === id);

}


//Validacions camisetes
export function comprovarIdCamiseta(idComprovar) {
  if (!existsId(idComprovar)) return false;
  return true
}

export function comprovarColorCamiseta(idComprovar, colorComprovar) {
  let camiseta = JSON.parse(productosJSON).filter(s => s.id === idComprovar);
  if (!camiseta[0].colores.some(color => color === colorComprovar)) return false;
  return true
}

export function comprovarTallaCamiseta(idComprovar, tallaComprovar) {
  let camiseta = JSON.parse(productosJSON).filter(s => s.id === idComprovar);
  if (!camiseta[0].tallas.some(talla => talla === tallaComprovar)) return false;
  return true
}



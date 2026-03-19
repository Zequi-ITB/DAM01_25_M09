import * as camisetasService from '../services/camisetas.service.js';
import { comandas } from '../data/comandas.js';

const comprovarCantidad = (comanda) => comanda.items.some(camiseta => camiseta.cant < 1);

function validateComanda(comandaNew) {
    if (!comandaNew || typeof comandaNew !== "object") return "Body inválido";
    if (!comandaNew.cliente.nombre || !comandaNew.cliente.email || !comandaNew.items || comandaNew.items.length < 1) return "Faltan campos";
    if (comprovarCantidad(comandaNew)) return "Cantidad erronea";
    if (!comandaNew.items.every(camiseta => camisetasService.comprovarIdCamiseta(camiseta.camisetaId))) return "Id incorrecte"
    //if(!comandaNew.items.every(camiseta => camisetasService.comprovarCamiseta(camiseta.camisetaId , camiseta.talla, camiseta.color))) return "Color o talla incorrecta"
    if (!comandaNew.items.every(camiseta => camisetasService.comprovarTallaCamiseta(camiseta.camisetaId, camiseta.talla))) return "La talla no esta disponible"
    if (!comandaNew.items.every(camiseta => camisetasService.comprovarColorCamiseta(camiseta.camisetaId, camiseta.color))) return "El color no esta disponible"
    return false;
}

//modificar return validate


export function create(comandaNew) {
    const validationMsg = validateComanda(comandaNew);
    if (validationMsg) return { error: validationMsg };

    comandas.push(comandaNew);
    return { data: comandaNew };
}

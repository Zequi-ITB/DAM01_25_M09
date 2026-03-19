import * as camisetasService from '../services/camisetas.service.js';


const comprovarCantidad = (comanda)=> comanda.items.some(camiseta => camiseta.cant <1);

function validateComanda(comandaNew) {
    if (!comandaNew || typeof comandaNew !== "object") return "Body inválido";
    if (!comandaNew.cliente.nombre || !comandaNew.cliente.email || !comandaNew.items || comandaNew.items.length < 1) return "Faltan campos";
    if(comprovarCantidad(comandaNew)) return "Cantidad erronea";
    if(!comandaNew.items.every(camiseta => camisetasService.comprovarCamiseta(camiseta.id, camiseta.talla, camiseta.color)))
    return null;
}

//modificar return validate


export function create(comandaNew) {
    const validationMsg = validateComanda(comandaNew);
    if (validationMsg) return { error: validationMsg };

    if (existsId(alumnoNew.id)) return { error: "id ya existe", status: 409 };

    students.push({ id: alumnoNew.id, nombre: alumnoNew.nombre, curso: alumnoNew.curso });
    return { data: alumnoNew };
}

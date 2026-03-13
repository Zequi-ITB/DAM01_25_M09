import { productosJSON } from '../data/camisetas.js';

const existsIdCamiseta = (id) => JSON.parse(productosJSON).some(s => s.id === id);


function validateComanda(comandaNew) {
    if (!comandaNew || typeof comandaNew !== "object") return "Body inválido";
    if (!comandaNew.cliente.nombre || !comandaNew.email || !comandaNew.items || comandaNew.items.length < 1 || comandaNew.items.cantidad >= 1) return "Faltan campos";
    if (!comandaNew.items.every(camiseta => existsIdCamiseta(camiseta.id))) return "ALGUN PRODUCTO NO EXISTE";
    if(!JSON.parse(productosJSON).tallas.some(talla => talla == comandaNew.talla)) return "ERROR";

    return null;
}




export function create(comandaNew) {
    const validationMsg = validateComanda(comandaNew);
    if (validationMsg) return { error: validationMsg };

    if (existsId(alumnoNew.id)) return { error: "id ya existe", status: 409 };

    students.push({ id: alumnoNew.id, nombre: alumnoNew.nombre, curso: alumnoNew.curso });
    return { data: alumnoNew };
}

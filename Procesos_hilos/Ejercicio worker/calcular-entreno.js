import { workerData, parentPort } from 'worker_threads';

console.log("Worker activo\n");

// Simula tarea pesada: bucle de 5 segundos
const inicio = Date.now();
while (Date.now() - inicio < 5000) { }  // bloquea SOLO este hilo



const resultado = (workerData.peso / (Math.pow(workerData.altura, 2))).toFixed(2);

let pla = "";
if (resultado < 20) {
    pla = "Volumen";
}
if (resultado > 20 && resultado < 30) {
    pla = "Definicion";
}
if (resultado > 30) {
    pla = "Mantenimiento";
}


let resposta = {
   nombre : workerData.nombre,
   imc : resultado,
   plan : pla,
   calorias: 600
}


parentPort.postMessage({ resposta });
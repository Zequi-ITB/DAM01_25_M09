import express from 'express';

const app = express();
const PORT = 3001;

const server = app.listen(PORT, () => {
    console.log(`Worker ${process.pid} escuchando en http://localhost:${PORT}/`);
});



/***************************************
 ************ WORKER THREAD ************
 ***************************************/


import { Worker } from 'worker_threads';

app.get('/entreno/:nombre', (req, res) => {

    let nombre = req.params.nombre;
    let peso = req.query.peso;
    let altura = req.query.altura;

    console.log(nombre);
    // Crea el worker y le pasa los datos
    const worker = new Worker('./calcular-entreno.js', {
        workerData: { nombre, peso, altura }            // pasa objetos directamente (no solo strings)
    });

    // Escucha el resultado
    worker.on('message', (datos) => {
        res.json(datos);
        console.log("Resultado:", datos.resposta);
    });

    // Gestiona errores
    worker.on('error', (err) => {
        res.status(500).json({ error: err.message });
    });
});


app.get('/ping', (req, res) => {
    res.json({ mensaje: 'Node sigue vivo', pid: process.pid });
    console.log("Node sigue vivo:", process.pid);
});


app.get('/usuarios-activos', (req, res) => {

});






import express from 'express';
import { fork, exec, spawn } from 'child_process';

const app = express();
const PORT = 3002;

const server = app.listen(PORT, () => {
    console.log(`Worker ${process.pid} escuchando en http://localhost:${PORT}/`);
});

/** 
app.get('/exec', (req, res) => {

    // Ejecutamos un comando del sistema (ej: listar archivos)
    // Windows: 'dir' | Linux/Mac: 'ls -la'
    exec('ls -la', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error al ejecutar: ${error.message}`);
            res.status(500).json({ error: 'Fallo al hacer ls -la' });
            return;
        }
        if (stderr) {
            console.error(`Avisos del sistema: ${stderr}`);
            res.status(500).json({ error: 'Avisos del sistema' });
            return;
        }
        // stdout tiene TODO el texto junto, entregado de una vez
        console.log(`Resultado del comando:\n${stdout}`);
        res.json(`${stdout}`);
    });
});
*/


app.get('/spawn', (req, res) => {
    // Le decimos al sistema: "Haz solo 5 pings y cierra la manguera"
    const procesoPing = spawn('ping', ['google.com']);
    let contador = 0;
    // Preparamos la cabecera para que el navegador sepa que va a recibir datos poco a poco
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');


    // Escuchamos el hilo de datos de salida
    procesoPing.stdout.on('data', (pedacito) => {
        // Nos va llegando la información línea a línea o por bloques

        console.log(`Recibido: ${pedacito.toString()}`);
        res.write(`Dato recibido: ${pedacito.toString()}`); // Escribe en la respuesta sin cerrarla
        if (pedacito.toString()) {
            contador++
        }
        if (contador >= 5) {
            procesoPing.kill();
        }







    });
    // Escuchamos si el proceso termina
    procesoPing.on('close', (codigo) => {
        console.log(`El proceso terminó con código ${codigo}`);
        res.end('Proceso ping terminado.'); // Cerramos la respuesta al cliente
    });
    procesoPing.stderr.on('data', (data) => {
        console.error(`Error en el hijo: ${data}`);
        res.status(500).json({ error: 'Fallo al hacer ping' });
    });

});
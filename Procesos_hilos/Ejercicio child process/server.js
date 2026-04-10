import express from 'express';

const app = express();
const PORT = 3001;

const server = app.listen(PORT, () => {
    console.log(`Worker ${process.pid} escuchando en http://localhost:${PORT}/`);
});

/***************************************
 ************ CHILD PROCESS ************
 ***************************************/
import { execFile } from 'child_process';

app.get('/jugar/:nombre', (req, res) => {


    console.log("Node hace GET")

    // Lanza el script en un proceso separado
    execFile('node', ['sorteo.js', req.params.nombre],
        (error, stdout, stderr) => {
            if (error) {
                console.log(stderr);
                return res.status(500).json({ error: 'Falló el proceso' });
            }
            const datos = JSON.parse(stdout);
            res.json(datos); 
        }
    );
});
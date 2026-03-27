import express from 'express';
import studentsRouter from './routes/students.routes.js';
import notasRouter from './routes/notas.routes.js'
import cors from 'cors';


const app = express();
const PORT = 3001;

app.use(cors({
 origin: 'http://127.0.0.1:5500'
}));


// Middlewares globales
app.use(express.json());

// Log mínimo
app.use((req, res, next) => {
 console.log(req.method, req.url);
 next();
});

// Rutas
app.use('/students', studentsRouter);
app.use('/notas', notasRouter);


// Middleware de errores
app.use((err, req, res, next) => {
 console.error(err.message);
 res.status(500).json({ message: "Error interno" });
});

app.listen(PORT, () => {
 console.log(`Servidor corriendo en http://localhost:${PORT}/`);
});




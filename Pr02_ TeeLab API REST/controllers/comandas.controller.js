import * as comandasService from '../services/comandas.service.js';



export function create(req, res) {
 const result = comandasService.create(req.body);

 if (result.error) {
   const status = result.status || 400;
   return res.status(status).json({ message: result.error });
 }

 res.status(201).json({ message: "Created", comanda: result.data });
}





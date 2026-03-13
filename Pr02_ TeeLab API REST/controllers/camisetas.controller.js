import * as camisetasService from '../services/camisetas.service.js';




export function getAll(req, res) {
  res.json(camisetasService.getAll());
}


export function getById(req, res) {
  const camiseta = camisetasService.getById(req.params.id);

  if (!camiseta) return res.status(404).json({ message: camiseta.message });

  res.json(camiseta);
}




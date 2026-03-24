import * as camisetasService from '../services/camisetas.service.js';


export function getAllCamisetas(req, res) {

  let productes = camisetasService.getAll(req);
  if (!productes || productes.length < 1) return res.status(404).json({ error: "No hay camisetas" });

  return res.json(productes);

}


export function getCamisetaById(req, res) {
  const camiseta = camisetasService.getById(req.params.id);

  if (!camiseta || camiseta.length < 1) res.status(404).json({ message: "Camiseta no encontrada" });

  res.json(camiseta);
}







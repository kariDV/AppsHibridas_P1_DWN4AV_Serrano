import express from "express";
import {
  getCategorias,
  getCategoriaNombre,
  getCategoriaId,
  createCategoria,
  updateCatId,
  deleteCatId,
} from "../controllers/categorias_controller.js";

const ruta = express.Router();

ruta.get("/", (req, res) => {
  let resultado;
  if (req.query.categoria) {
    resultado = getCategoriaNombre(req.query.categoria);
  } else {
    resultado = getCategorias();
  }
  resultado
    .then((categorias) => res.status(200).json(categorias))
    .catch((error) => res.status(400).json(error));
});

ruta.get("/:id", (req, res) => {
  let id = req.params.id;
  let resultado = getCategoriaId(id);
  resultado
    .then((cat) => {
      if (cat.length) {
        res.status(200).json(cat);
      } else {
        res.status(200).send("No se encontró la categoría");
      }
    })
    .catch((error) => res.status(400).json(error));
});

ruta.post("/", (req, res) => {
  let body = req.body;
  let resultado = createCategoria(body);
  resultado
    .then((categoria) => res.status(201).json(categoria))
    .catch((error) => res.status(400).json(error));
});

ruta.put("/update/:id", (req, res) => {
  let body = req.body;
  let id = req.params.id;
  let resultado = updateCatId(id, body);
  resultado
    .then((categoria) => res.status(201).json(categoria))
    .catch((error) => res.status(400).json(error));
});

ruta.delete("/delete/:id", (req, res) => {
  let id = req.params.id;
  let resultado = deleteCatId(id);
  resultado
    .then((categoria) => res.status(201).json(categoria))
    .catch((error) => res.status(400).json(error));
});

export default ruta;

import express from "express";
import {
  getCategorias,
  createCategoria,
} from "../controllers/categorias_controller.js";

const ruta = express.Router();

ruta.get("/", (req, res) => {
  let resultado = getCategorias();
  resultado
    .then((categorias) => res.status(200).json(categorias))
    .catch((error) => res.status(400).json(error));
});

ruta.post("/", (req, res) => {
  let body = req.body;
  let resultado = createCategoria(body);
  resultado
    .then((categoria) => res.status(201).json(categoria))
    .catch((error) => res.status(400).json(error));
});

// ruta.get("/:id", (req, res) => {
//   let id = req.params.id;
//   let resultado = getJuegoId(id);
//   resultado
//     .then((juegos) => {
//       if (juegos.length) {
//         res.status(200).json(juegos);
//       } else {
//         res.status(200).send("No encontre el juego");
//       }
//     })
//     .catch((error) => res.status(400).json(error));
// });

export default ruta;

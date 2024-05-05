import express from "express";
import {
  getJuegos,
  getJuegoTitulo,
  createJuego,
} from "../controllers/juegos_controller.js";

const ruta = express.Router();

ruta.get("/", (req, res) => {
  let resultado = getJuegos();
  resultado
    .then((juegos) => res.status(200).json(juegos))
    .catch((error) => res.status(400).json(error));
});

ruta.get("/:titulo", (req, res) => {
  let titulo = req.params.titulo;
  let resultado = getJuegoTitulo(titulo);
  resultado
    .then((juegos) => {
      if (juegos.length) {
        res.status(200).json(juegos);
      } else {
        res.status(200).send("No se encontró el juego");
      }
    })
    .catch((error) => res.status(400).json(error));
});

ruta.post("/", (req, res) => {
  let body = req.body;
  let resultado = createJuego(body);
  resultado
    .then((juego) => res.status(201).json(juego))
    .catch((error) => res.status(400).json(error));
});

// ruta.get("/:categoria", (req, res) => {
//   let categoria = req.params.categoria;
//   let resultado = getCategoriaNombre(categoria);
//   resultado
//     .then((cat) => {
//       if (cat.length) {
//         res.status(200).json(cat);
//       } else {
//         res.status(200).send("No se encontró la categoría");
//       }
//     })
//     .catch((error) => res.status(400).json(error));
// });

export default ruta;

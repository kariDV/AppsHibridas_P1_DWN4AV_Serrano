import express from "express";
import {
  getJuegos,
  getJuegoTitulo,
  getJuegoId,
  createJuego,
} from "../controllers/juegos_controller.js";

const ruta = express.Router();

ruta.get("/", (req, res) => {
  let resultado;
  if (req.query.titulo) {
    resultado = getJuegoTitulo(req.query.titulo);
  } else {
    resultado = getJuegos();
  }
  resultado
    .then((juegos) => res.status(200).json(juegos))
    .catch((error) => res.status(400).json(error));
});

ruta.get("/:id", (req, res) => {
  let id = req.params.id;
  let resultado = getJuegoId(id);
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

export default ruta;

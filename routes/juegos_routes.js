import express from "express";
import Joi from "joi";
import {
  getJuegos,
  getJuegoTitulo,
  getJuegoCategoria,
  getJuegosPagina,
  getJuegosOrden,
  getJuegoId,
  createJuego,
  updateJuegoId,
  deleteJuegoId,
} from "../controllers/juegos_controller.js";

const ruta = express.Router();

const schemaJuego = Joi.object({
  id: Joi.number().integer().required(),
  titulo: Joi.string().min(3).max(30).required(),
  categoria: Joi.string().min(3).max(15).required(),
  editorial: Joi.string().min(3).max(20),
  tiempoDeJuego: Joi.number().integer().min(1).max(240),
  precio: Joi.number().min(100).max(750000),
});

ruta.get("/", (req, res) => {
  let resultado;
  // busqueda de juegos por titulo
  if (req.query.titulo) {
    resultado = getJuegoTitulo(req.query.titulo);
  }
  // busqueda de juegos por categoria
  else if (req.query.categoria) {
    resultado = getJuegoCategoria(req.query.categoria);
  }
  // busqueda de juegos con paginado
  else if (req.query.pagina) {
    resultado = getJuegosPagina(req.query.pagina);
  }
  // busqueda de juegos ordenados por titulo
  else if (req.query.ordenado) {
    resultado = getJuegosOrden();
  }
  // busqueda de todos los juegos
  else {
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

  const { error, value } = schemaJuego.validate({
    id: body.id,
    titulo: body.titulo,
    categoria: body.categoria,
    editorial: body.editorial,
    tiempoDeJuego: body.tiempoDeJuego,
    precio: body.precio,
  });

  if (!error) {
    let resultado = createJuego(body);
    resultado
      .then((juego) => res.status(201).json(juego))
      .catch((error) => res.status(400).json(error));
  } else {
    res.status(400).json(error);
  }
});

ruta.put("/update/:id", (req, res) => {
  let body = req.body;
  let id = req.params.id;
  let resultado = updateJuegoId(id, body);
  resultado
    .then((juego) => res.status(201).json(juego))
    .catch((error) => res.status(400).json(error));
});

ruta.delete("/delete/:id", (req, res) => {
  let id = req.params.id;
  let resultado = deleteJuegoId(id);
  resultado
    .then((juego) => res.status(201).json(juego))
    .catch((error) => res.status(400).json(error));
});

export default ruta;

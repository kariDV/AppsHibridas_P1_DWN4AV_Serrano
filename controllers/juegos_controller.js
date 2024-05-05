import Juegos from "../models/juegos_model.js";

async function getJuegos() {
  let juegos = await Juegos.find();
  return juegos;
}

async function getJuegoTitulo(tit) {
  let juegoSelec = await Juegos.find({ titulo: tit });
  return juegoSelec;
}

async function getJuegoId(id) {
  let juegoSelec = await Juegos.find({ id: id });
  return juegoSelec;
}

async function createJuego(body) {
  let nuevoJuego = new Juegos({
    id: body.id,
    titulo: body.titulo,
    categoria: body.categoria,
    editorial: body.editorial,
    tiempoDeJuego: body.tiempoDeJuego,
    precio: body.precio,
  });
  return await nuevoJuego.save();
}

export { getJuegos, getJuegoTitulo, getJuegoId, createJuego };

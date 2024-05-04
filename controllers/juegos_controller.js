import juegos from "../models/juegos_model.js";

async function getJuegos() {
  return juegos;
}

async function getJuegoId(id) {
  let juegoSelec = juegos.filter((el) => el.id === Number(id));
  return juegoSelec;
}

export { getJuegos, getJuegoId };

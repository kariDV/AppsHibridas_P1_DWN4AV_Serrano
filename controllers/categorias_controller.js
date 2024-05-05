import Categorias from "../models/categorias_model.js";

async function getCategorias() {
  let categoria = await Categorias.find();
  return categoria;
}

async function getCategoriaNombre(cat) {
  let categoria = await Categorias.find({ categoria: cat });
  return categoria;
}

async function createCategoria(body) {
  let nuevaCategoria = new Categorias({
    categoria: body.categoria,
    descripcion: body.descripcion,
  });
  return await nuevaCategoria.save();
}
// async function getJuegoId(id) {
//   let juegoSelec = juegos.filter((el) => el.id === Number(id));
//   return juegoSelec;
// }

// export { getJuegos, getJuegoId };

export { getCategorias, getCategoriaNombre, createCategoria };

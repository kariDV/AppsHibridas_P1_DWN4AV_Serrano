import Categoria from "../models/categorias_model.js";

async function getCategorias() {
  let categoria = await Categoria.find();
  return categoria;
}

async function createCategoria(body) {
  let nuevaCategoria = new Categoria({
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

export { getCategorias, createCategoria };

import Categorias from "../models/categorias_model.js";

async function getCategorias() {
  let categoria = await Categorias.find();
  return categoria;
}

async function getCategoriaNombre(cat) {
  let categoria = await Categorias.find({ categoria: cat });
  return categoria;
}

async function getCategoriaId(id) {
  let categoria = await Categorias.find({ id: id });
  return categoria;
}

async function createCategoria(body) {
  let nuevaCategoria = new Categorias({
    id: body.id,
    categoria: body.categoria,
    descripcion: body.descripcion,
  });
  return await nuevaCategoria.save();
}

async function updateCatId(id, body) {
  let cateModificada = Categorias.updateOne(
    { id: id },
    {
      $set: {
        categoria: body.categoria,
        descripcion: body.descripcion,
      },
    }
  );
  return cateModificada;
}

export {
  getCategorias,
  getCategoriaNombre,
  getCategoriaId,
  createCategoria,
  updateCatId,
};

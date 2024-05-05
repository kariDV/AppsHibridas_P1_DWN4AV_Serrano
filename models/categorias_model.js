import mongoose from "mongoose";

// Schema
const categoriaSchema = new mongoose.Schema({
  categoria: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
});

export default mongoose.model("categoria", categoriaSchema);

// Variables de prueba
// const categorias = [
//   {
//     id: 1,
//     categoria: "Estrategia",
//     editorial: "Planeamiento y manejo de economía previos a cada jugada",
//   },
//   {
//     id: 2,
//     categoria: "Party",
//     editorial: "Familiares y casuales",
//   },
//   {
//     id: 3,
//     categoria: "Cartas",
//     editorial: "Exclusivos con mazos de cartas, y fichas de apoyo para puntaje",
//   },
// ];

// export default categorias;

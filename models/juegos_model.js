import mongoose from "mongoose";

// Schema
const juegoSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
  },
  categoria: {
    type: String,
    required: true,
  },
  editorial: {
    type: String,
    required: true,
  },
  tiempoDeJuego: {
    type: Number,
    required: true,
  },
  precio: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("juego", juegoSchema);

// Variables de prueba
// const juegos = [
//   {
//     id: 1,
//     titulo: "7 Wonders",
//     categoria: "Estrategia",
//     editorial: "Repos Production",
//     tiempo_de_juego: 35,
//     precio: 120000,
//   },
//   {
//     id: 2,
//     titulo: "Catan",
//     categoria: "Estrategia",
//     editorial: " Mayfair Games",
//     tiempo_de_juego: 90,
//     precio: 28000,
//   },
//   {
//     id: 3,
//     titulo: "Citadels",
//     categoria: "Estrategia",
//     editorial: "Hans im Glück",
//     tiempo_de_juego: 45,
//     precio: 57000,
//   },
// ];

// export default juegos;

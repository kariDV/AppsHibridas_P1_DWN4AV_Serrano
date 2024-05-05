import mongoose from "mongoose";

// Schema
const juegoSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
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

import mongoose from "mongoose";

// Schema
const categoriaSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
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

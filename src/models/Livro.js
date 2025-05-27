import mongoose from "mongoose";

const livroSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  autor: { type: String, required: true },
  ano: { type: Number },
  genero: { type: String }
}, {
  versionKey: false 
});

const livro = mongoose.model("livros", livroSchema);

export default livro;

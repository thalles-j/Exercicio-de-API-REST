import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
  {
    id: {type: String},
    titulo: {
      type: String,
      required: [true, "O título do livro é obrigatório"]
    },
    autor: {
      type:  mongoose.Schema.Types.ObjectId,
      ref: "autor",
      required: [true, "O(a) autor(a) é obrigatório"]
    },
    editora: {
      type: String,
      required: [true, "A editora é obrigatória"],
      enum:{
        message: "A editora {VALUE} não é um valor permitido."
      }
    },
    paginas: {
      type: Number,
      validate:{
        validator: (valor) => {
          return valor >= 10 && valor <= 10000;
        },
        message: "o número de páginas deve estar entre 10 e 10000. Valor fornecido{VALUE}."
      }

    }
  }
);


const livros = mongoose.model("livros", livroSchema);

export default livros;
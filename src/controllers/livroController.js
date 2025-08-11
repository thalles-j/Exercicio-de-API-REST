import NaoEncontrado from "../error/NaoEncontrado.js";
import { livros } from "../models/index.js";
import RequisicaoIncorreta from "../error/RequisicaoIncorreta.js";


class LivroController {

  static listarLivros = async (req, res, next) => {
    try {
      const buscarLivros = livros.find();
    } catch (erro) {
      next(erro);
    }
  };

  static listarLivroPorId = async (req, res, next) => {
    try {
      const id = req.params.id;

      const livroResultado = await livros.findById(id)
        .populate("autor", "nome")
        .exec();

      if (livroResultado !== null) {
        res.status(200).send(livroResultado);
      } else {
        next(new NaoEncontrado("Id do livro não localizado."));
      }
    } catch (erro) {
      next(erro);
    }
  };

  static cadastrarLivro = async (req, res, next) => {
    try {
      let livro = new livros(req.body);

      const livroResultado = await livro.save();

      res.status(201).send(livroResultado.toJSON());
    } catch (erro) {
      next(erro);
    }
  };

  static atualizarLivro = async (req, res, next) => {
    try {
      const id = req.params.id;
    
      const livroResultado = await livros.findByIdAndUpdate(id, {$set: req.body});

      console.log(livroResultado);
    
      if (livroResultado !== null) {
        res.status(200).send({message: "Livro atualizado com sucesso"});
      } else {
        next(new NaoEncontrado("Id do livro não localizado."));
      }
    } catch (erro) {
      next(erro);
    }
  };

  static excluirLivro = async (req, res, next) => {
    try {
      const id = req.params.id;

      const livroResultado = await livros.findByIdAndDelete(id);

      console.log(livroResultado);
      
      if (livroResultado !== null) {
        res.status(200).send({message: "Livro removido com sucesso"});
      } else {
        next(new NaoEncontrado("Id do livro não localizado."));
      }
    } catch (erro) {
      next(erro);
    }
  };
  static async listarLivrosPorPreco (req, res) {
   try{
    const livrosResultado = await livro.find().sort({preco:1});
    res.status(200).json(livroResultado);

   }catch(erro){
    next(erro);
   } 
  }
    static listarLivroPorFiltro = async (req, res, next) => {
    try {
      const busca = await processaBusca(req.query);

      if (busca !== null) {
        const livrosResultado = livros
          .find(busca)
          .populate("autor");

        req.resultado = livrosResultado

        next();
      } else {
        res.status(200).send([]);
      }
    } catch (erro) {
      next(erro);
    }
  }
   static async processaBusca(parametros){
  const {editora, titulo, minPaginas, maxPaginas, nomeAutor} = parametros;

  const busca = {};

  if(editora) busca.editora = editora
  if(titulo) busca.titulo = {$regex: titulo, $options: "i"};

  if( minPaginas || maxPaginas ) busca.paginas = {};

  // gte = Greater Than or Equal = Maior ou igual que
  if (minPaginas) busca.numeroPaginas.$gte = minPaginas;
  // lte = Less Than or Equal = Menor ou igual que
  if (maxPaginas) busca.numeroPaginas.$lte = maxPaginas;

  if(nomeAutor) {
    const autor = await autores.findOne({nome: nomeAutor})

    const autorId = autor._id;
    busca.autor = autorId
  }
  return busca
}    
};

export default LivroController;

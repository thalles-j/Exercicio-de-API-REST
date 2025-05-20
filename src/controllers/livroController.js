import livro from "../models/Livro.js";

class LivroController {

    static async listarLivros(req,res){
        try{
            const listaLivros = await livro.find({});
        res.status(200).json(listaLivros);
        }catch (erro){
            res
                .status(500)
                .json({message:`${erro.message}- falha na requisição`})

        }
        

    };
    static async buscarLivros(req,res){
        const index = BuscaLivro(req.params.id);
        res.status(200).json(livro[index]);
    }
};

export default LivroController;
import express from "express";
import conectaDb from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conexao = await conectaDb();

conexao.on("erro", (erro) => {
    console.error("erro de conexao", erro)
});

conexao.once("open", () => {
    console.log("conexao com o banco feita com sucesso!")
})

const app = express();
routes(app);

app.put("/livros/:id", (req,res)=>{
    const index = BuscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).json(livros);
})

app.delete("/ livros/:id", (req,res)=>{
    const index = BuscaLivro(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("livro excluido com sucesso!");
})
export default app


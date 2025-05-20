import express from "express";
import conectaDb from "./config/dbConnect.js";
import livro from "./models/Livro.js";

const conexao = await conectaDb();

conexao.on("erro", (erro) => {
    console.error("erro de conexao", erro)
});

conexao.once("open", () => {
    console.log("conexao com o banco feita com sucesso!")
})

const app = express();
app.use(express.json());

app.get("/", (req,res)=>{
    res.status(200).send("Teste De Express")
})


app.post("/livros", (req,res)=>{
    livros.push(req.body);
    res.status(201).send("livros cadastrado com sucesso")

})

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


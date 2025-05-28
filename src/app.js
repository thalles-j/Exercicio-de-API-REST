import express from "express";
import conectaDb from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conexao = await conectaDb();

conexao.on("error", (erro) => {
  console.error("Erro ao conectar ao MongoDB:", erro);
});

conexao.once("open", () => {
  console.log("Conectado ao MongoDB com sucesso!");
})

const app = express();
routes(app);

export default app;
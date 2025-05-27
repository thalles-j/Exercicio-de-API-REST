import express from "express";
import livro from "../routes/livroRoutes.js";

const routes = (app) => {
    app.route("/").get((req,res)=> res.status(200).send("Exercicio de API-REST"));

    app.use(express.json(), livro)
};

export default routes;

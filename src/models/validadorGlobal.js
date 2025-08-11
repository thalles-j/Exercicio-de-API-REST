import mongoose from "mongoose";
import path from "path";
mongoose.Schema.Types.String.set("validate", {
    validator: (valor) => valor!== "",
    message: ({path}) => `O campo ${path} foi fornecido em branco.`
})
import mongoose, { mongo } from "mongoose";

async function conectaDb() {
  try {
    await mongoose.connect(process.env.DB_CONNECTION_STRING);

    console.log("✅ Conectado ao MongoDB com sucesso!");
    return mongoose.connection;

  } catch (erro) {
    console.error("❌ Erro ao conectar ao MongoDB:", erro.message);
  }
}

export default conectaDb;

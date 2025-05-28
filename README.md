# 📚 Exercicio de API REST - Livraria

Este é um projeto de uma API RESTful desenvolvida com **Node.js**, **Express** e **MongoDB (Atlas)** para gerenciamento de um catálogo de livros. A API permite listar e cadastrar livros de forma simples.

## 🚀 Tecnologias Utilizadas

- Node.js
- Express
- MongoDB Atlas
- Mongoose
- Postman (para testes)

---

## 📁 Estrutura do Projeto

Exercicio-de-API-REST/
├── controllers/
│ └── livroController.js
├── models/
│ └── Livro.js
├── routes/
│ └── livroRoutes.js
├── config/
│ └── dbConnect.js
├── .env
├── server.js
└── README.md


---

## 📦 Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/thalles-j/Exercicio-de-API-REST.git
   cd Exercicio-de-API-REST
2. Instale as dependências:
   ```
   npm install
   ```
3. Crie um arquivo .env na raiz do projeto com sua connection string do MongoDB Atlas:
  ```
  DB_CONNECTION_STRING={sua connection string sem as chaves.}
  ```
4. Inicie o servidor:
  ```
  npm run dev
  ```

🔍 Testando a API com Postman
Abra o Postman

Use a rota http://localhost:3000/livros para realizar requisições:

GET para listar livros

POST com JSON no body para cadastrar


   

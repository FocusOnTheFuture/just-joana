// Incluir as bibliotecas
// Gerencia as requisições, rotas e URLs, entre outras funcionalidades
const express = require("express");
// Chamar a função express
const app = express();

// Criar o middleware para receber os dados no corpo da requisição
app.use(express.json());

// Testar conexão com banco de dados
// const db = require("./db/models");

// Iniciar o servidor na porta 3000, criar a função utilizando modelo Arrow Function para retornar a mensagem de sucesso
app.listen(3000, () => {
    console.log("Servidor inciado na porta 3000: http://localhost:3000");
});

// Incluir as CONTROLLERS
const feed = require('./controllers/feed');

// Criar as rotas
app.use('/', feed);

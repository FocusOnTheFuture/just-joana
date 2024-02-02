import express from "express";

// Incluir as bibliotecas
// Gerencia as requisições, rotas e URLs, entre outras funcionalidades
const express = require("express");

// Importar a biblioteca para permitir conexão externa (front com back)
const cors = require('cors');

// Chamar a função express
const app = express();


const uploadImgFeed = require('./middlewares/uploadImage');

// Criar o middleware para receber os dados em formato de objeto no corpo da requisição
app.use(express.json());

// Criar o middleware para permitir requisição externa
app.use((req, res, next) => {

    // Qualquer endereço pode fazer a requisição "*", quando tiver o site coloco o link do site/domínio no lugar de "*""
    res.header("Access-Control-Allow-Origin", "*");

    // Tipos de método que a API aceita
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");

    // Permitir o envio de dados para API
    res.header("Access-Control-Allow-Headers", "Content-Type");

    // Executar o cors
    app.use(cors());

    // Quando não houver erro deve continuar o processamento
    next();
});

// Cria a rota upload para imagem
app.post("/upload-image", uploadImgFeed.single('image'), async (req, res) => {

    // Verificar se fez o upload e retorna sucesso
    if(req.file){

        return res.json({
            erro: false,
            message: "Upload realizado com sucesso!"
        });
    }

    // Retornar erro quando não conseguir realizar upload
    return res.status(400).json({
        erro: true,
        message: "Erro: Upload não realizado!"
    });
});

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

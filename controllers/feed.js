// Incluir as bibliotecas
// Gerencia as requisições, rotas e URLs, entre outras funcionalidades
const express = require('express');
// Chamar a função express
const router = express.Router();
// Incluir o arquivo que possui a conexão com banco de dados
const db = require('./../db/models');

// Criar a rota listar
router.get("/feed", async (req, res) => {

    // Receber o número da página, quando não é enviado o número da página é atribuído página 1
    const { page = 1 } = req.query;
    // console.log(page);

    // Limite de registros em cada página
    const limit = 4;

    // Variável com o número da última página
    var lastPage = 1;

    // Contar a quantidade de registro no banco de dados
    const countFeed = await db.Feed.count();
    // console.log(countFeed);

    // Aceesa o IF quando encontrar registro no banco de dados
    if(countFeed !== 0){
        // Calcular a última página
        lastPage = Math.ceil(countFeed / limit);
        // console.log(lastPage);
    }else{
        // Pausar o processamento e retornar a mensagem de erro
        return res.status(400).json({
            mensagem: "Erro: Nenhum usuário encontrado!"
        });
    }

    // console.log((page * limit) - limit); // Ex.: Estou na página 3 * 10 (itens) - 10 (itens) = 20

    // Recuperar todos os usuários do banco de dados
    const feed = await db.Feed.findAll({

        // Indicar quais colunas recuperar
        attributes: ['id', 'description', 'news'],

        // Ordenar os registros pela coluna id na forma decrescente
        order: [['id', 'DESC']],

        // Calcular a partir de qual registro deve retornar e o limite de registros
        offset: Number((page * limit) - limit),
        limit: limit
    });

    // Acessa o IF se encontrar o registro no banco de dados
    if(feed){
        // Criar objeto com as informações para paginação
        var pagination = {
            // Caminho
            path: '/feed',
            // Página atual
            page,
            // URL da página anterior
            prev_page_url: page - 1 >= 1 ? page - 1 : false,
            // URL da próxima página
            next_page_URL: Number(page) + Number(1) > lastPage ? false : Number(page) + Number(1),
            // Última página
            lastPage,
            // Quantidade de registros
            total: countFeed
        }

        // Pausar o processamento e retornar os dados informados em formato de objeto
        return res.json({
            feed,
            pagination
        });
    }else{
        // Pausar o processamento e retornar a mensagem de erro
        return res.status(400).json({
            mensagem: "Erro: Nenhum usuário encontrado!"
        });
    }
});

// Criar a rota visualizar e receber o parâmetro id enviado na URL
// Endereço para acessar através da aplicação externa: http://localhost:3000/feed/3
router.get("/feed/:id", async (req, res) => {

    // Receber o parâmtro enviando na URL
    const { id } = req.params;
    // console.log(id);

    // Recuperar o registro do banco de dados
    const feed = await db.Feed.findOne({
        // Indicar quais colunas recuperar
        attributes: ['id', 'description', 'news', 'createdAt', 'updatedAt'],

        // Acrescentado condição para indicar qual registro deve ser retornado do banco de dados
        where: {id},

    })
    // console.log(feed);

    // Acessa o IF se encontrar o registro no banco de dados
    if(feed){
        // Pausar o processamento e retornar os dados
        return res.json({
            feed: feed.dataValues
        });       
    }else{
        // Pausar o processamento e retornar a mensagem de erro
        return res.status(400).json({
            mensagem: "Erro: Usuário não encontrado!"
        });
    }
})


// Criar a rota cadastrar
// Endereço para acessar através da aplicação externa: http://localhost:3000/feed?page=2

// A aplicação externa deve indicar que está enviado os dados em formato de objeto no Headers:
// Content-Type: application/json

// Dados em formato de objeto 
// {
//     "description": "",
//     "news": ""
// }

router.post("/feed", async (req, res) => {

    // Receber os dados enviados no corpo da requisição
    var dados = req.body;
    // console.log(dados);

    //Salvar no banco de dados
    await db.Feed.create(dados).then((dadosFeed) => {
        // Pausar o processamento e retornar os dados em formato de objeto
        return res.json({
            mensagem: "Usuário cadastrado com sucesso!",
            dadosFeed
        });
    }).catch(() => {
        // Pausar o processamento e retornar a mensagem de erro
        return res.json({
            mensagem: "Erro: Usuário não cadastrado com sucesso!"
        });
    })
});

// Criar a rota editar

// Endereço para acessar através da aplicação externa:http: //localhost:3000/feed

// A aplicação externa deve indicar que está enviando os dados em formato de objeto no Headers:
// Content-Type: application/json

//Dados em formato de objeto:
// {
// 	"id": 3,
// 	"description": "Editado",
// 	"news": "Também editado"
// }

router.put("/feed", async (req, res) => {
    // Receber os dados enviados no corpo da requisição
    var dados = req.body;

    // Editar no banco de dados
    await db.Feed.update(dados, { where: {  id: dados.id }}).then(() => {
        // Pausar o processamento e retornar a mensagem
        return res.json({
            mensagem: "Usuário editado com sucesso!"
        });       
    }).catch(() => {
        // Pausar o processamento e retornar a mensagem
        return res.status(400).json({
            mensagem: "Erro: Usuário não editado!"
        });       
    })
})

// Criar a rota apagar e receber o parâmetro id enviado na URL
// Endereço para acessar através da aplicação externa: http://localhost:3000/feed/3
router.delete("/feed/:id", async (req, res) => {

    // Receber o parâmetro enviado na URL
    const { id } = req.params;

    // Apagar usuário no banco de dados utilizando a MODELS feed
    await db.Feed.destroy({
        // Acrescentar o WHERE na instrução SQL indicando qual registro excluir no BD
        where: { id }
    }).then(() => {
        // Pausar o processamento e retornar a mensagem
        return res.json({
            mensagem: "Usuário apagado com sucesso!"
        })
    }).catch(() => {
        // Pausar o processamento e retornar a mensagem
        return res.status(400).json({
            mensagem: "Erro: Usuário não apagado!"
        })
    })
})

// Exportar a instrução que está dentro da constante router
module.exports = router;
<?php

function uploadImagem($descricao, $imagem) {
    // Configurações para o upload de arquivos
    $targetDirectory = "caminho/para/armazenar/as/imagens/"; // Substitua pelo diretório desejado
    $targetFile = $targetDirectory . basename($imagem["name"]);
    $uploadOk = 1;
    $imageFileType = strtolower(pathinfo($targetFile, PATHINFO_EXTENSION));

    // Verificar se a imagem é válida
    $check = getimagesize($imagem["tmp_name"]);
    if ($check === false) {
        return array("success" => false, "message" => "O arquivo não é uma imagem.");
    }

    // Verificar se o arquivo já existe
    if (file_exists($targetFile)) {
        return array("success" => false, "message" => "Desculpe, o arquivo já existe.");
    }

    // Verificar o tamanho do arquivo
    if ($imagem["size"] > 5000000) {
        return array("success" => false, "message" => "Desculpe, o arquivo é muito grande.");
    }

    // Permitir apenas alguns formatos de imagem
    if (!in_array($imageFileType, array("jpg", "png", "jpeg", "gif"))) {
        return array("success" => false, "message" => "Desculpe, apenas arquivos JPG, JPEG, PNG e GIF são permitidos.");
    }

    // Se tudo estiver correto, realizar o upload
    if (move_uploaded_file($imagem["tmp_name"], $targetFile)) {
        // Inserir informações da imagem no banco de dados (adapte conforme necessário)
        $caminho_arquivo = $targetFile;
        $sql = "INSERT INTO imagens (descricao, caminho_arquivo) VALUES ('$descricao', '$caminho_arquivo')";
        
        // Execute a consulta SQL (você precisa configurar a conexão com o banco de dados)

        // Conectar ao banco de dados
        // $servername = "seu_servidor";
        // $username = "seu_usuario";
        // $password = "sua_senha";
        // $dbname = "JustJoana";
        // ...
        
        if ($conn->query($sql) === true) {
            return array("success" => true, "message" => "Imagem adicionada com sucesso.");
        } else {
            return array("success" => false, "message" => "Erro ao adicionar imagem: " . $conn->error);
        }
    } else {
        return array("success" => false, "message" => "Erro ao realizar o upload do arquivo.");
    }
}

// Verificar se o formulário foi submetido
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Receber dados do formulário
    $descricao = $_POST['descricao'];
    $imagem = $_FILES['imagem'];

    // Realizar o upload e retornar a resposta JSON
    echo json_encode(uploadImagem($descricao, $imagem));
} else {
    echo json_encode(array("success" => false, "message" => "Método inválido."));
}
?>

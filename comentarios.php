<?php
// Conectar ao banco de dados
$servername = "seu_servidor";
$username = "seu_usuario";
$password = "sua_senha";
$dbname = "JustJoana";

$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar a conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

// Receber dados do formulário
$userId = $_POST['userId'];
$comentario = $_POST['comentario'];

// Validar os dados para prevenir SQL injection
$userId = mysqli_real_escape_string($conn, $userId);
$comentario = mysqli_real_escape_string($conn, $comentario);

// Inserir comentário no banco de dados
$sql = "INSERT INTO comentarios (usuario_id, comentario) VALUES ('$userId', '$comentario')";
if ($conn->query($sql) === TRUE) {
    echo json_encode(array("success" => true, "message" => "Comentário adicionado com sucesso."));
} else {
    echo json_encode(array("success" => false, "message" => "Erro ao adicionar comentário: " . $conn->error));
}

$conn->close();
?>
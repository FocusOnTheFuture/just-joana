import axios from "axios";
import { useState } from "react"


export default function Admin() {

    // Declarar variável para receber a imagem
    const [image, setImage] = useState('');

    // Declarar variável para receber a mensagem em axios logo abaixo
    const [message, setMessage] = useState('');

    // Executar a função quando o usuário clicar no botão do formulário
    const uploadImage = async (e) => {

        // Bloquear o recarregamento da página
        e.preventDefault();

        // Criar o objeto com os dados
        const formData = new FormData();
        formData.append('image', image);

        // Criar a constante com os dados do cabeçalho
        const headers = {
            'headers': {
                // Indicar que será enviado os dados em formato de objeto
                'Content-Type': 'multipart/form-data'
            }
        }

        // Fazer a requisição para o servidor utilizando axios, indicando o método da requisição, o endereço, enviar os dados do formulário e o cabeçalho
        await axios.post('http://localhost:3000/admin', formData, headers)
        .then((response) => {
                // Acessa o then quando a API retornar status 200

                // Atribuir a mensagem no state message
                setMessage(response.data.message);

            }). catch((err) => {
                // Acessa o catch quando a API retornar erro

                // Atribuir a mensagem no state message
                if(err.response){
                    setMessage(err.response.data.message);
                }else{
                    setMessage("Erro: Tente novamente mais tarde.");
                }
            });
    }

    return (
        <>
            { message ? <p>{message}</p> : ""}

            <form onSubmit={ uploadImage }>
                <label>Imagem: </label>
                <input type="file" name="image" onChange={(e) => setImage(e.target.files[0])} />

                <button type="submit">Salvar</button>
            </form>
        </>
    )
}

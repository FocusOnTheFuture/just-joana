import UploadImageForm from "./UploadImageForm"


const AdminUpload = () => {
    return(
        <div>
            <UploadImageForm />
        </div>
    )
}

export default AdminUpload;













// import React, { useState, useEffect } from 'react';
// import 


// const UploadImg = () => {
//   const [descricao, setDescricao] = useState('');
//   const [imagem, setImagem] = useState(null);

//   const handleDescricaoChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
//     setDescricao(event.target.value);
//   };

//   const handleImagemChange = (event: { target: { files: React.SetStateAction<null>[]; }; }) => {
//     setImagem(event.target.files[0]);
//   };

//   const handleSubmit = (event: { preventDefault: any; }) => {
//     event.preventDefault();

//     const form = new FormData();
//     form.append('descricao', descricao);
//     form.append('imagem', imagem);

//     fetch('upload_imagem.php', {
//       method: 'POST',
//       body: form,
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.success) {
//           alert('Imagem adicionada com sucesso!');
//           // Você pode realizar outras ações após adicionar a imagem
//         } else {
//           alert('Erro ao adicionar imagem: ' + data.message);
//         }
//       })
//       .catch((error) => {
//         console.error('Erro na requisição: ' + error);
//       });
//   };

//   useEffect(() => {
//     window.enviarImagem = () => {
//       handleSubmit({ preventDefault: () => {} });
//     };
//   }, []); // Executa apenas uma vez após a montagem do componente

//   return (
//     <>
//       <h2>Upload de Imagem</h2>
//       <form
//         action="upload_imagem.php"
//         method="post"
//         encType="multipart/form-data"
//         id="imagemForm"
//         onSubmit={handleSubmit}
//       >
//         <label htmlFor="descricao">Descrição:</label>
//         <input
//           type="text"
//           id="descricao"
//           name="descricao"
//           value={descricao}
//           onChange={handleDescricaoChange}
//         />
//         <br />

//         <label htmlFor="imagem">Imagem:</label>
//         <input
//           type="file"
//           id="imagem"
//           name="imagem"
//           accept="image/*"
//           onChange={handleImagemChange}
//         />
//         <br />

//         <button type="button" onClick={window.enviarImagem}>
//           Enviar Imagem
//         </button>
//       </form>
//     </>
//   );
// };

// export default UploadImg;

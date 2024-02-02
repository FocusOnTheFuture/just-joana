import React, { useState } from 'react';

const UploadImageForm = () => {
  const [descricao, setDescricao] = useState('');
  const [imagem, setImagem] = useState(null);

  const handleDescricaoChange = (event) => {
    setDescricao(event.target.value);
  };

  const handleImagemChange = (event) => {
    setImagem(event.target.files[0]);
  };

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append('descricao', descricao);
      formData.append('imagem', imagem);

      const response = await fetch('http://seu_servidor/upload_imagem.php', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        alert('Imagem adicionada com sucesso!');
        // Realize outras ações após adicionar a imagem, se necessário
      } else {
        alert('Erro ao adicionar imagem: ' + data.message);
      }
    } catch (error) {
      console.error('Erro na requisição: ' + error);
    }
  };

  return (
    <>
      <h2>Upload de Imagem</h2>
      <form encType="multipart/form-data">
        <label htmlFor="descricao">Descrição:</label>
        <input type="text" id="descricao" name="descricao" onChange={handleDescricaoChange} required />
        <br />

        <label htmlFor="imagem">Imagem:</label>
        <input type="file" id="imagem" name="imagem" accept="image/*" onChange={handleImagemChange} />
        <br />

        <button type="button" onClick={handleSubmit}>
          Enviar Imagem
        </button>
      </form>
    </>
  );
};

export default UploadImageForm;

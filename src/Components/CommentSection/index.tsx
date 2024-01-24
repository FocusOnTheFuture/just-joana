import React, { useState } from 'react';
import styles from "./commentsection.module.scss";
import Button from '../Button';

const CommentSection = () => {
  // Estado para armazenar a lista de comentários
  const [comments, setComments] = useState<string[]>([]);
  // Estado para armazenar o texto do novo comentário
  const [newComment, setNewComment] = useState('');

  // Manipulador de evento para adicionar um novo comentário
  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      // Adiciona o novo comentário à lista de comentários
      setComments([...comments, newComment]);
      // Limpa o campo de texto do novo comentário
      setNewComment('');
    }
  };

  const handleKeyDown = (event: { key: string; }) => {
    if (event.key === "Enter") {
      // Lógica para lidar com o envio do formulário
      console.log("Formulário enviado com Enter!");
      // Você pode chamar a função de envio do formulário ou executar qualquer outra ação desejada
      handleAddComment();
    }
  };

  return (
    <div className={styles.container}>
      {/* Seção de Comentários */}
      <div className={styles.containerComment}>
        {comments.map((comment, index) => (
          <div className={styles.containerCommentSingle} key={index}>{comment}</div>
        ))}
      </div>

      {/* Campo de Entrada para Novo Comentário */}
      <div className={styles.containerInput}>
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Adicione um comentário..."
        />
 
        <Button label={'Comentar'} onClick={handleAddComment}/>
      </div>
    </div>
  );
};

export default CommentSection;
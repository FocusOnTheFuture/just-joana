import React, { useState } from 'react';

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

  return (
    <div>
      {/* Seção de Comentários */}
      <div>
        {comments.map((comment, index) => (
          <div key={index}>{comment}</div>
        ))}
      </div>

      {/* Campo de Entrada para Novo Comentário */}
      <div>
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Adicione um comentário..."
        />
        <button onClick={handleAddComment}>Comentar</button>
      </div>
    </div>
  );
};

export default CommentSection;
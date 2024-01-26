import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';

import React, { useState, ChangeEvent, InputHTMLAttributes } from 'react';
import styles from "./commentsection.module.scss";
import Button from '../Button';

// Interface que estende InputHTMLAttributes e inclui as propriedades personalizadas
interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  startDecorator: React.ReactNode;
  endDecorator: React.ReactNode;
}

// Componente de input personalizado que aceita as propriedades adicionais
const CustomInput: React.FC<CustomInputProps> = ({ startDecorator, endDecorator, ...rest }) => {
  return (
    <div>
      {/* Renderize seus decoradores */}
      {startDecorator}
      <input {...rest} />
      {endDecorator}
    </div>
  );
};

const CommentSection = () => {
  // Estado para armazenar a lista de comentários
  const [comments, setComments] = useState<string[]>([]);
  // Estado para armazenar o texto do novo comentário
  const [newComment, setNewComment] = useState('');

  const addEmoji = (emoji: string) => () => setNewComment(`${newComment}${emoji}`);

  // Manipulador de evento para adicionar um novo comentário
  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      // Adiciona o novo comentário à lista de comentários
      setComments([...comments, newComment]);
      // Limpa o campo de texto do novo comentário
      setNewComment('');
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
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
        <CustomInput
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Adicione um comentário..."
          startDecorator={
            <div>
              <Box sx={{ display: 'flex', gap: 0.5, flex: 1 }}>
                  <IconButton variant="outlined" color="neutral" onClick={addEmoji('👍')}>
                    👍
                  </IconButton>
                  <IconButton variant="outlined" color="neutral" onClick={addEmoji('🏖')}>
                    🏖
                  </IconButton>
                  <IconButton variant="outlined" color="neutral" onClick={addEmoji('😍')}>
                    😍
                  </IconButton>
      
               </Box>
            </div>
          }
          endDecorator={
            <div>
              <Typography level="body-xs" sx={{ ml: 'auto' }}>
                 {newComment.length} character(s)
               </Typography>
            </div>
          }
        />
        
          <Button label={'Comentar'} onClick={handleAddComment}/>
      </div>
    </div>
  );
};

export default CommentSection;
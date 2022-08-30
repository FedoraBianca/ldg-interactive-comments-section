import React from 'react';
import CommentForm from '../CommentForm';
import { CommentBodyWrapper } from "./CommentBody.style";

interface ICommentBodyProps {
  content: string;
  onSubmit: (value: string) => void;
  isEditMode?: boolean;
  className?: string;
}

const CommentBody: React.FC<ICommentBodyProps> = ({
  content,
  onSubmit,
  isEditMode = false,
  className = ''
}) => {
  const handleForm = (value: string) => {
    onSubmit(value);
  };

  return (
    <CommentBodyWrapper className={className}>
      { isEditMode && ( <CommentForm content={content} buttonText='Update' layoutDirection='column' onSubmit={handleForm}/>)}
      { !isEditMode && ( <div className='d-flex w-100'>{content}</div> )}
    </CommentBodyWrapper>
  );
};

export default CommentBody;
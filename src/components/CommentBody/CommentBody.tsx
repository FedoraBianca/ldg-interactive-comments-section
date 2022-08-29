import React from 'react';
import CommentForm from '../CommentForm';
import { CommentBodyWrapper } from "./CommentBody.style";

interface ICommentBodyProps {
  content: string;
  isEditMode?: boolean;
  className?: string;
}

const CommentBody: React.FC<ICommentBodyProps> = ({
  content,
  isEditMode = false,
  className = ''
}) => {
  return (
    <CommentBodyWrapper className={className}>
      { isEditMode && ( <CommentForm value={content} buttonText='Update' layoutDirection='column' />)}
      { !isEditMode && ( <div className='d-flex w-100'>{content}</div> )}
    </CommentBodyWrapper>
  );
};

export default CommentBody;
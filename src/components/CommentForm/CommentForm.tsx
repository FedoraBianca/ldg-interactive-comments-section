import React from 'react';
import { IComment } from '../../interfaces/comment';
import Button from '../Button';
import { CommentFormWrapper } from "./CommentForm.style";

interface ICommentFormProps {
  value: string;
  buttonText: string;
  layoutDirection?: 'row' | 'column';
  className?: string;
}


const CommentForm: React.FC<ICommentFormProps> = ({
  value,
  buttonText = 'Submit',
  layoutDirection = 'row',
  className = ''
}) => {
  return (
    <CommentFormWrapper className={`d-flex flex-${layoutDirection} align-items-start ${className}`}>
      <textarea id="content" name="content">
        {value}
      </textarea>
      <Button type='button' className={`ml-3 ${layoutDirection === 'column' && 'align-self-end mt-3'}`}>{buttonText}</Button>
    </CommentFormWrapper>
  );
};

export default CommentForm;
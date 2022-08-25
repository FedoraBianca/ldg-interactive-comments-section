import React from 'react';
import { IComment } from '../../interfaces/comment';
import Button from '../Button';
import { CommentFormWrapper } from "./CommentForm.style";

interface ICommentFormProps {
  value: string;
  buttonText: string;
  className?: string;
}


const CommentForm: React.FC<ICommentFormProps> = ({
  value,
  buttonText = 'Submit',
  className = ''
}) => {
  return (
    <CommentFormWrapper className={`d-flex flex-row align-items-start ${className}`}>
      <textarea id="content" name="content">
        {value}
      </textarea>
      <Button type='button' className='ml-3'>{buttonText}</Button>
    </CommentFormWrapper>
  );
};

export default CommentForm;
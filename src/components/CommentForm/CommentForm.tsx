import React from 'react';
import { IComment } from '../../interfaces/comment';
import Button from '../Button';
import { CommentFormWrapper } from "./CommentForm.style";

interface ICommentFormProps {
  comment: IComment;
  className?: string;
}


const CommentForm: React.FC<ICommentFormProps> = ({
  comment,
  className = ''
}) => {
  return (
    <CommentFormWrapper className={`d-flex flex-row align-items-start ${className}`}>
      <textarea id="content" name="content">
        {comment.content}
      </textarea>
      <Button type='button' className='ml-3'>Update</Button>
    </CommentFormWrapper>
  );
};

export default CommentForm;
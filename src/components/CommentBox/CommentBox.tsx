import React from 'react';
import { IComment } from '../../interfaces/comment';
import CommentBody from '../CommentBody';
import CommentForm from '../CommentForm';
import CommentHeader from '../CommentHeader';
import Score from '../Score';
import { CommentBoxWrapper } from "./CommentBox.style";

interface ICommentBoxProps {
  comment: IComment;
  className?: string;
}

const CommentBox: React.FC<ICommentBoxProps> = ({
  comment,
  className = ''
}) => {
  const isOwner = comment.user.username === 'juliusomo';

  return (
    <CommentBoxWrapper className={`d-flex flex-row px-4 py-4 ${className}`}>
      <div className='mr-4'>
        <Score score={comment.score} />
      </div>
      <div className='w-100'>
        <CommentHeader
          isOwner={isOwner}
          image={comment.user.image}
          username={comment.user.username}
          time={comment.createdAt}
        />
        <CommentBody content={comment.content} className='mt-3' />
      </div>
    </CommentBoxWrapper>
  );
};

export default CommentBox;
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
  const isOwner = true;

  return (
    <CommentBoxWrapper className={`${className} d-flex flex-row px-4 py-4`}>
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
        <CommentBody />
        <CommentForm comment={comment} />
      </div>
    </CommentBoxWrapper>
  );
};

export default CommentBox;
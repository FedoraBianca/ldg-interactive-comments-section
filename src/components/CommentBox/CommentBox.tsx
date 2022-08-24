import React from 'react';
import { IComment } from '../../interfaces/comment';
import CommentBody from '../CommentBody';
import CommentHeader from '../CommentHeader';
import Score from '../Score';
import { CommentBoxWrapper } from "./CommentBox.style";

interface ICommentBoxProps {
  comment: IComment;
  className?: string;
}

const CommentBox: React.FC<ICommentBoxProps> = (
  comment,
  className: ''
) => {
  return (
    <CommentBoxWrapper className={className}>
      <div>
        <Score />
      </div>
      <div>
        <CommentHeader />
        <CommentBody />
      </div>
    </CommentBoxWrapper>
  );
};

export default CommentBox;
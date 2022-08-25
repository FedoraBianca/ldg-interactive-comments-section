import React from 'react';
import { CommentBodyWrapper } from "./CommentBody.style";

interface ICommentBodyProps {
  content: string;
  className?: string;
}

const CommentBody: React.FC<ICommentBodyProps> = ({
  content,
  className = ''
}) => {
  return (
    <CommentBodyWrapper className={className}>
      {content}
    </CommentBodyWrapper>
  );
};

export default CommentBody;
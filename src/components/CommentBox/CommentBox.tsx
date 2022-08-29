import React, { useState } from 'react';
import { IComment } from '../../interfaces/comment';
import CommentBody from '../CommentBody';
import CommentForm from '../CommentForm';
import CommentHeader from '../CommentHeader';
import ReplyBox from '../ReplyBox';
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
  const [showReplyBox, setShowReplyBox] = useState<boolean>(false);
  const [isEditMode, setIsEditMode] = useState<boolean>(true);

  return (
    <div className={`d-flex flex-column ${className}`}>
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
            isEditMode={isEditMode}
          />
          <CommentBody
            content={comment.content}
            isEditMode={isEditMode}
            className='mt-3' />
        </div>
      </CommentBoxWrapper>

      {showReplyBox && (<ReplyBox />)}
    </div>
  );
};

export default CommentBox;
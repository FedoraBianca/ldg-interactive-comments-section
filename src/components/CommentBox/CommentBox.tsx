import React, { useState } from 'react';
import { IComment } from '../../interfaces/comment';
import CommentBody from '../CommentBody';
import CommentHeader from '../CommentHeader';
import ReplyBox from '../ReplyBox';
import Score from '../Score';
import { CommentBoxWrapper } from "./CommentBox.style";

interface ICommentBoxProps {
  comment: IComment;
  onChange: (value: IComment) => void;
  className?: string;
}

const CommentBox: React.FC<ICommentBoxProps> = ({
  comment,
  onChange,
  className = ''
}) => {
  const isOwner = comment.user.username === 'juliusomo';
  const [showReplyBox, setShowReplyBox] = useState<boolean>(false);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);

  const handleScoreIncrease = () => {
    onChange({
      ...comment,
      score: comment.score + 1
    });
  };

  const handleScoreDecrease = () => {
    onChange({
      ...comment,
      score: comment.score + 1
    });
  };

  const handleCommentUpdate = (value: string) => {
    onChange({
      ...comment,
      content: value
    });
    setIsEditMode(false);
  };

  const handleReply = (value: string) => {
    console.log('Submit from comment section: ', value);
  };

  const handleEdit = () => {
    setIsEditMode(true);
  }

  const handleDelete = () => {
    
  }

  return (
    <div className={`d-flex flex-column ${className}`}>
      <CommentBoxWrapper className={`d-flex flex-row px-4 py-4 ${className}`}>
        <div className='mr-4'>
          <Score 
            score={comment.score} 
            increaseScore={handleScoreIncrease} 
            decreaseScore={handleScoreDecrease}
            disabled={isOwner}
          />
        </div>
        <div className='w-100'>
          <CommentHeader
            isOwner={isOwner}
            image={comment.user.image}
            username={comment.user.username}
            time={comment.createdAt}
            isEditMode={isEditMode}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
          <CommentBody
            content={comment.content}
            isEditMode={isEditMode}
            onSubmit={handleCommentUpdate}
            className='mt-3' />
        </div>
      </CommentBoxWrapper>

      {showReplyBox && (<ReplyBox onSubmit={handleReply} />)}
    </div>
  );
};

export default CommentBox;
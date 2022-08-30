import React, { useState } from 'react';
import moment from 'moment';
import { IComment } from '../../interfaces/comment';
import CommentBody from '../CommentBody';
import CommentHeader from '../CommentHeader';
import ReplyBox from '../ReplyBox';
import Score from '../Score';
import { CommentBoxWrapper } from "./CommentBox.style";
import { generateId } from '../../helpers/general';

interface ICommentBoxProps {
  comment: IComment;
  onChange: (value: IComment) => void;
  onReplySubmit: (value: IComment) => void;
  className?: string;
}

const CommentBox: React.FC<ICommentBoxProps> = ({
  comment,
  onChange,
  onReplySubmit,
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
      score: comment.score - 1
    });
  };

  const handleCommentSubmit = (value: string) => {
    onChange({
      ...comment,
      content: value
    });
    setIsEditMode(false);
  };

  const handleReplySubmit = (value: string) => {
    const newReply: IComment = {
      id: generateId(10),
      content: value,
      createdAt: moment().format('DD-MM-YYYY'),
      score: 0,
      replyingTo: comment.id,
      user: {
        image: {
          png: "./images/avatars/image-juliusomo.png",
          webp: "./images/avatars/image-juliusomo.webp"
        },
        username: "juliusomo"
      },
      replies: [],
    };

    onReplySubmit(newReply);
    setShowReplyBox(false);
  };

  const handleReplyMode = () => {
    setShowReplyBox(true);
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
            onReply={handleReplyMode}
          />
          <CommentBody
            content={comment.content}
            isEditMode={isEditMode}
            onSubmit={handleCommentSubmit}
            className='mt-3' />
        </div>
      </CommentBoxWrapper>

      {showReplyBox && (<ReplyBox onSubmit={handleReplySubmit} />)}
    </div>
  );
};

export default CommentBox;
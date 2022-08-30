import React, { useState } from 'react';
import CommentForm from '../CommentForm';
import ProfilePicture from '../ProfilePicture';
import { ReplyBoxWrapper } from './ReplyBox.style';

interface IReplyBoxProps {
  onSubmit: (value: string) => void;
  buttonText?: string;
  className?: string;
}

const ReplyBox: React.FC<IReplyBoxProps> = ({
  onSubmit,
  buttonText = 'Reply',
  className = ''
}) => {
  const [replyText, setReplyText] = useState<string>('');

  const handleForm = (value: string) => {
    onSubmit(value);
  };

  return (
    <ReplyBoxWrapper className={`${className} d-flex flex-row px-4 py-4`}>
      <ProfilePicture size='40px' alt='user picture' src='./images/avatars/image-juliusomo.png' className='mr-2' />
      <CommentForm content={replyText} buttonText={buttonText} onSubmit={handleForm} className='w-100' />
    </ReplyBoxWrapper>
  );
};

export default ReplyBox;
import React, { useState } from 'react';
import { IComment } from '../../interfaces/comment';
import CommentForm from '../CommentForm';
import ProfilePicture from '../ProfilePicture';
import { ReplyBoxWrapper } from './ReplyBox.style';

interface IReplyBoxProps {
  buttonText?: string;
  className?: string;
}

const ReplyBox: React.FC<IReplyBoxProps> = ({
  buttonText = 'Reply',
  className = ''
}) => {
  const [replyText, setReplyText] = useState<string>('');

  return (
    <ReplyBoxWrapper className={`${className} d-flex flex-row px-4 py-4`}>
      <ProfilePicture size='40px' alt='user picture' src='./images/avatars/image-juliusomo.png' className='mr-2' />
      <CommentForm value={replyText} className='w-100' buttonText={buttonText} />
    </ReplyBoxWrapper>
  );
};

export default ReplyBox;
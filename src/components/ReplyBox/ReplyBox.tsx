import React from 'react';
import { IComment } from '../../interfaces/comment';
import CommentForm from '../CommentForm';
import ProfilePicture from '../ProfilePicture';
import { ReplyBoxWrapper } from './ReplyBox.style';

interface IReplyBoxProps {
  content?: string;
  buttonText?: string;
  className?: string;
}

const ReplyBox: React.FC<IReplyBoxProps> = ({
  content = '',
  buttonText = 'Reply',
  className = ''
}) => {
  return (
    <ReplyBoxWrapper className={`${className} d-flex flex-row px-4 py-4`}>
      <ProfilePicture size='40px' alt='user picture' src='./images/avatars/image-juliusomo.png' className='mr-2' />
      <CommentForm value={content} className='w-100' buttonText={buttonText} />
    </ReplyBoxWrapper>
  );
};

export default ReplyBox;
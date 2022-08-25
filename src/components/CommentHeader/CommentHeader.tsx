import React from 'react';
import { IComment } from '../../interfaces/comment';
import { IImage } from '../../interfaces/image';
import Badge from '../Badge';
import Button from '../Button';
import ProfilePicture from '../ProfilePicture';
import { CommentHeaderWrapper } from "./CommentHeader.style";

interface ICommentHeaderProps {
  isOwner: boolean;
  image: IImage;
  username: string;
  time: string;
  className?: string;
}

const CommentHeader: React.FC<ICommentHeaderProps> = ({
  isOwner,
  image,
  username,
  time,
  className = ''
}) => {
  return (
    <CommentHeaderWrapper className={`d-flex justify-content-between ${className}`}>
      <div className='d-flex flex-row align-items-center'>
        <ProfilePicture size='32px' alt='user picture' src={image.png} />
        <div className='ml-3 username'>{username}</div>
        {isOwner && <Badge backgroundColor='#5b5aaa' className='mr-3'>you</Badge>}
        <div className='time'>{time}</div>
      </div>

      {
        isOwner && <div>
          <Button type='button' theme='link' onClick={() => { }} className='mr-2'>
            Delete
          </Button>
          <Button type='button' theme='link' onClick={() => { }}>
            Edit
          </Button>
        </div>
      }

      {
        !isOwner && <div>
          <Button type='button' theme='link' onClick={() => { }}>Reply</Button>
        </div>
      }
    </CommentHeaderWrapper>
  );
};

export default CommentHeader;
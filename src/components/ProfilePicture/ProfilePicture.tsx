import React from 'react';
import { IUser } from '../../interfaces/user';
import { ProfilePictureWrapper } from "./ProfilePicture.style";

interface IProfilePictureProps {
  size: string;
  src: string;
  alt?: string;
  className?: string;
}

const ProfilePicture: React.FC<IProfilePictureProps> = ({
  size,
  src,
  alt = '',
  className = ''
}) => {
  return (
    <ProfilePictureWrapper size={size}>
      <img src={src} alt={alt} className={className} />
    </ProfilePictureWrapper>
  );
};

export default ProfilePicture;
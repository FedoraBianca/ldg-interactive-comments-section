import React from 'react';
import { IUser } from '../../interfaces/user';
import ProfilePicture from '../ProfilePicture';
import { UserInfoWrapper } from "./UserInfo.style";

interface IUserInfoProps {
  user: IUser;
}

const UserInfo: React.FC<IUserInfoProps> = ({
  user
}) => {
  return (
    <UserInfoWrapper>
      <div>
        <ProfilePicture size='20px' src={user.image.png} />
      </div>
      <div className='username'>{user.username}</div>
    </UserInfoWrapper>
  );
};

export default UserInfo;
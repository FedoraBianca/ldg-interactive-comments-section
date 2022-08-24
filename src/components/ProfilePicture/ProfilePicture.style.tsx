import styled from 'styled-components';

interface IProfilePictureWrapper {
  size: string;
}

export const ProfilePictureWrapper = styled.div<IProfilePictureWrapper>`
  img {
    height: ${(props) => props.size};
    width: ${(props) => props.size};
    border-radius: ${(props) => props.size};
  }
`;
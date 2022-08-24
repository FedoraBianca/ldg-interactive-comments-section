import styled from 'styled-components';

interface IBadgeWrapper {
  backgroundColor: string;
}

export const BadgeWrapper = styled.div<IBadgeWrapper>`
  background-color: ${(props) => props.backgroundColor};
`;
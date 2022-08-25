import styled from 'styled-components';

interface IBadgeWrapper {
  backgroundColor: string;
}

export const BadgeWrapper = styled.div<IBadgeWrapper>`
  background-color: ${(props) => props.backgroundColor};
  color: #ffffff;
  font-size: 11px;
  padding: 0px 4px 2px 4px;
`;
import styled from 'styled-components';

export const DefaultButton = styled.button`
  background-color: #5b5aaa;
  color: #ffffff;
  border-radius: 15px;
  font-weight: bold;
  padding: 13px 25px;
  border: none;
  border-radius: 10px;
  text-transform: uppercase;

  &:hover, &:active {
    background-color: #c4c6ef;
    cursor: pointer;
  }
`

export const LinkButton = styled.button`
  background-color: transparent;
  color: #5b5aaa;
  border: none;
  font-weight: bold;
`
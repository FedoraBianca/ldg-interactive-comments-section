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

  &:disabled {
    cursor: not-allowed;
    background-color: #c1c0f4;
  }

  &.danger {
    background-color: #ed6468;

    &:disabled {
      background-color: #ffb8bb;
    }
  }
`

export const LinkButton = styled.button`
  background-color: transparent;
  color: #5b5aaa;
  border: none;
  font-weight: bold;

  &:disabled {
    cursor: not-allowed;
    color: #c1c0f4;
  }

  &.danger {
    color: #ed6468;

    &:disabled {
      color: #ffb8bb;
    }
  }
`
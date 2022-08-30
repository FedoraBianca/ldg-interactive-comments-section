import styled from 'styled-components';

export const ScoreWrapper = styled.div`
  width: 40px;
  color: #5b5aaa;
  font-weight: bold;
  text-align: center;
  
  div {
    background-color: #f5f6fa;
    cursor: default;
  }
`;

export const ScoreButton = styled.button`
    background-color: #f5f6fa;
    color: #5b5aaa;
    cursor: pointer;
    font-weight: bold;
    padding: 5px;
    font-size: 1.2rem;
    border: none;
    width: 100%;

    &.plus {
      border-radius: 15px 15px 0 0;
    }

    &.minus {
      border-radius: 0 0 15px 15px;
    }

    &:disabled {
      cursor: not-allowed;
      color: #c1c0f4;
    }
`;
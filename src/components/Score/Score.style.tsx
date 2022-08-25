import styled from 'styled-components';

export const ScoreWrapper = styled.div`
  width: 40px;
  color: #5b5aaa;

  input {
    background-color: #f5f6fa;
    border: none;
    text-align: center;
    color: #5b5aaa;
    font-weight: bold;
    width: 100%;
  }

  .plus, .minus {
    background-color: #f5f6fa;
    cursor: pointer;
    font-weight: bold;
    padding: 5px;
    font-size: 1.2rem;
  }

  .plus {
    border-radius: 15px 15px 0 0;
  }

  .minus {
    border-radius: 0 0 15px 15px;
  }
`;
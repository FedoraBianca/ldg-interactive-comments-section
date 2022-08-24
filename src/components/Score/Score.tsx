import React from 'react';
import { ScoreWrapper } from "./Score.style";

const Score: React.FC = () => {
  return (
    <ScoreWrapper>
      <div className="plus">+</div>
      <input type="text" value="1" />
      <div className="minus">-</div>
    </ScoreWrapper>
  );
};

export default Score;
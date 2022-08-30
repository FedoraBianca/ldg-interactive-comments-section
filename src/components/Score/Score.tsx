import React, { useState } from 'react';
import { ScoreWrapper } from "./Score.style";

interface IScoreProps {
  score: number;
  increaseScore: () => void;
  decreaseScore: () => void;
}

const Score: React.FC<IScoreProps> = ({
  score,
  increaseScore,
  decreaseScore
}) => { 
  return (
    <ScoreWrapper>
      <div className="d-flex justify-content-center plus" onClick={increaseScore}>+</div>
      <input type="text" value={score} />
      <div className="d-flex justify-content-center minus" onClick={decreaseScore}>-</div>
    </ScoreWrapper>
  );
};

export default Score;
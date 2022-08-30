import React, { useState } from 'react';
import { ScoreButton, ScoreWrapper } from "./Score.style";

interface IScoreProps {
  score: number;
  increaseScore: () => void;
  decreaseScore: () => void;
  disabled?: boolean;
}

const Score: React.FC<IScoreProps> = ({
  score,
  increaseScore,
  decreaseScore,
  disabled = false,
}) => { 
  return (
    <ScoreWrapper>
      <ScoreButton className="d-flex justify-content-center plus" onClick={increaseScore} disabled={disabled}>+</ScoreButton>
      <div>{score}</div>
      <ScoreButton className="d-flex justify-content-center minus" onClick={decreaseScore} disabled={disabled}>-</ScoreButton>
    </ScoreWrapper>
  );
};

export default Score;
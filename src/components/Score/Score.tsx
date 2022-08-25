import React from 'react';
import { ScoreWrapper } from "./Score.style";

interface IScoreProps {
  score: number;
}

const Score: React.FC<IScoreProps> = ({
  score
}) => {
  return (
    <ScoreWrapper>
      <div className="d-flex justify-content-center plus">+</div>
      <input type="text" value={score} />
      <div className="d-flex justify-content-center minus">-</div>
    </ScoreWrapper>
  );
};

export default Score;
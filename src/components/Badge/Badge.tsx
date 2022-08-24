import React from 'react';
import { BadgeWrapper } from "./Badge.style";

interface IBadgeProps {
  text: string;
  backgroundColor: string;
}

const Badge: React.FC<IBadgeProps> = ({
  text,
  backgroundColor
}) => {
  return (
    <BadgeWrapper backgroundColor={backgroundColor}>
      {text}
    </BadgeWrapper>
  );
};

export default Badge;
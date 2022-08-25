import React from 'react';
import { BadgeWrapper } from "./Badge.style";

interface IBadgeProps {
  children: React.ReactNode;
  backgroundColor: string;
  className?: string;
}

const Badge: React.FC<IBadgeProps> = ({
  children,
  backgroundColor,
  className = ''
}) => {
  return (
    <BadgeWrapper backgroundColor={backgroundColor} className={className}>
      { children }
    </BadgeWrapper>
  );
};

export default Badge;
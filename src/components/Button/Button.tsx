import React from 'react';
import { DefaultButton, LinkButton } from "./Button.style";

interface IButtonProps {
  type: 'button' | 'submit' | 'reset';
  theme?: 'default' | 'link';
  onClick?: (e: React.MouseEvent) => void;
  children?: React.ReactNode;
  className?: string;
}

const Button: React.FC<IButtonProps> = ({
  children = null,
  theme = 'delault',
  className = '',
  ...rest
}) => {
  switch (theme) {
    case 'link':
      return (
        <LinkButton className={className} {...rest}>
          {children}
        </LinkButton>
      );
    default:
      return (
        <DefaultButton className={className} {...rest}>
          {children}
        </DefaultButton>
      );
  }
};

export default Button;
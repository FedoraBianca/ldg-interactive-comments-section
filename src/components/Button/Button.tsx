import React from 'react';
import { DefaultButton, LinkButton } from "./Button.style";

interface IButtonProps {
  type: 'button' | 'submit' | 'reset';
  theme?: 'default' | 'link';
  variant?: 'default' | 'danger';
  onClick?: (e: React.MouseEvent) => void;
  disabled?: boolean;
  children?: React.ReactNode;
  className?: string;
}

const Button: React.FC<IButtonProps> = ({
  children = null,
  theme = 'delault',
  variant = 'default',
  className = '',
  disabled = false,
  ...rest
}) => {
  switch (theme) {
    case 'link':
      return (
        <LinkButton
          className={`${variant} ${className}`}
          disabled={disabled}
          {...rest}
        >
          {children}
        </LinkButton>
      );
    default:
      return (
        <DefaultButton
          className={`${variant} ${className}`}
          disabled={disabled}
          {...rest}
        >
          {children}
        </DefaultButton>
      );
  }
};

export default Button;
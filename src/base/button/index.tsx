import React from 'react';
import { StyledButton } from './index.styled';

interface ButtonProps {
  htmlType?: 'button' | 'submit' | 'reset' | undefined;
  disabled?: boolean | undefined;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button: React.FC<ButtonProps> = ({ children, htmlType, ...btnProps }) => {
  return (
    <StyledButton type={htmlType} {...btnProps}>
      {children}
    </StyledButton>
  );
};

export default Button;

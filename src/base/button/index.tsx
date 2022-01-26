import React from 'react';
import { StyledButton } from './index.styled';

type ButtonHtmlType = 'button' | 'submit' | 'reset' | undefined;
interface ButtonProps {
  htmlType?: ButtonHtmlType;
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

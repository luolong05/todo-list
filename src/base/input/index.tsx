import React from 'react';
import { StyledInput } from './index.styled';

export interface InputProps {
  value?: string;
  name?: string;
  htmlType?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  [propName: string]: unknown;
}

const Input: React.FC<InputProps> = ({ htmlType, ...inputProps }) => {
  return <StyledInput type={htmlType} {...inputProps}></StyledInput>;
};

export default Input;

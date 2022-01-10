import styled from 'styled-components';

export const StyledButton = styled.button`
  border: 1px solid ${(props) => props.theme.colorPrimary};
  padding: 10px 14px;
  background-color: ${(props) => props.theme.colorPrimary};
  border-radius: 4px;
  color: ${(props) => props.theme.colorDefaultActive};
  font-size: ${(props) => props.theme.textLgFontSize};
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.colorPrimaryActive};
  }
  &[disabled] {
    cursor: not-allowed;
    border-color: ${(props) => props.theme.colorDisabled};
    background-color: ${(props) => props.theme.colorDisabled};
  }
`;

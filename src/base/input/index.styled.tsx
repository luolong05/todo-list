import styled from 'styled-components';

export const StyledInput = styled.input`
  border: 1px solid ${(props) => props.theme.colorDefault};
  padding: 10px 14px;
  width: 100%;
  background-color: ${(props) => props.theme.colorDefaultActive};
  color: ${(props) => props.theme.textDefaultColor};
  font-size: ${(props) => props.theme.textLgFontSize};
  border-radius: 4px;
  &:focus {
    border-color: ${(props) => props.theme.colorPrimary};
  }
  &[disabled] {
    cursor: not-allowed;
    border-color: ${(props) => props.theme.colorDefault};
  }
`;

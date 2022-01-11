import styled from 'styled-components';

export const PageWrap = styled.article`
  margin: 100px auto 0;
  max-width: 800px;
`;

export const PageHeader = styled.header`
  margin-bottom: 50px;
`;

export const TodoForm = styled.form`
  display: flex;
  align-items: center;
`;

export const FormInputWrap = styled.div`
  margin-right: 10px;
  flex: 1;
`;

export const PageContent = styled.article``;

export const TodoList = styled.ul``;

export const TodoItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
  padding: 10px;
  border-radius: 2px;
`;

export const TodoItemInputWrap = styled.span`
  display: flex;
  align-items: center;
  flex-basis: 30px;
  input {
    cursor: pointer;
    width: 18px;
    height: 18px;
  }
`;

export const TodoItemLabel = styled.span<{ done: boolean }>`
  flex: 1;
  font-size: ${(props) => props.theme.textLgFontSize};
  color: ${(props) => (props.done ? props.theme.colorSuccess : props.theme.colorDefault)};
`;

export const TodoItemDelete = styled.span`
  font-size: 20px;
  color: #919191;
  cursor: pointer;
`;

export const EmptyList = styled.div`
  margin-top: 100px;
  font-size: 30px;
  color: #ddd;
  text-align: center;
`;

import React from 'react';
import { TodoStatus, TodoType } from '@/views/todoList/todoTypes';
import * as Styled from '@/views/todoList/index.styled';
import { Input } from '@/base';

interface TodoListProps {
  todoList: TodoType[];
  onUpdate: (todo: TodoType) => void;
  onDelete: (todo: TodoType) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todoList, onUpdate, onDelete }) => {
  const handleToggleTodoStatus = (todo: TodoType): void => {
    onUpdate({
      ...todo,
      statue: todo.statue === TodoStatus.DOING ? TodoStatus.DONE : TodoStatus.DOING
    });
  };

  const handleTodoDelete = (todo: TodoType): void => {
    onDelete(todo);
  };

  const todoListIsEmpty = todoList.length === 0;
  if (todoListIsEmpty) {
    return <Styled.EmptyList>暂无数据</Styled.EmptyList>;
  }

  return (
    <ul>
      {todoList.map((todo) => (
        <Styled.TodoItem key={todo.id}>
          <Styled.TodoItemInputWrap>
            <Input htmlType="checkbox" onChange={() => handleToggleTodoStatus(todo)} />
          </Styled.TodoItemInputWrap>
          <Styled.TodoItemLabel done={todo.statue === TodoStatus.DONE}>
            {todo.label}
          </Styled.TodoItemLabel>
          <Styled.TodoItemDelete onClick={() => handleTodoDelete(todo)}>x</Styled.TodoItemDelete>
        </Styled.TodoItem>
      ))}
    </ul>
  );
};

export default TodoList;

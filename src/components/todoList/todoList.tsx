import React from 'react';
import { TodoStatus, TodoType } from '@/components/todoList/todoTypes';
import * as Styled from '@/components/todoList/index.styled';
import { Input } from '@/base';
import { apiTodoUpdate, apiTodoDelete } from '@/api/todo';

interface TodoListProps {
  todoList: TodoType[];
  onUpdate: (todo: TodoType) => void;
  onDelete: (todo: TodoType) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todoList, onUpdate, onDelete }) => {
  const handleToggleTodoStatus = async (todo: TodoType): Promise<void> => {
    const newTodo: TodoType = {
      ...todo,
      status: todo.status === TodoStatus.DOING ? TodoStatus.DONE : TodoStatus.DOING
    };

    const [err, resData] = await apiTodoUpdate(todo.id, newTodo);
    if (!err) {
      onUpdate(resData?.data as TodoType);
    }
  };

  const handleTodoDelete = async (todo: TodoType): Promise<void> => {
    const [err] = await apiTodoDelete(todo.id);
    if (!err) {
      onDelete(todo);
    }
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
            <Input
              htmlType="checkbox"
              checked={todo.status === TodoStatus.DONE}
              onChange={() => handleToggleTodoStatus(todo)}
            />
          </Styled.TodoItemInputWrap>
          <Styled.TodoItemLabel done={todo.status === TodoStatus.DONE}>
            {todo.label}
          </Styled.TodoItemLabel>
          <Styled.TodoItemDelete onClick={() => handleTodoDelete(todo)}>x</Styled.TodoItemDelete>
        </Styled.TodoItem>
      ))}
    </ul>
  );
};

export default TodoList;

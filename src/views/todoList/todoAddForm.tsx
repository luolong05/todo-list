import React, { useState } from 'react';
import { TodoStatus, TodoType } from '@/views/todoList/todoTypes';
import * as Styled from '@/views/todoList/index.styled';
import { Button, Input } from '@/base';

interface TodoAddFormProps {
  onAddTodo: (todo: TodoType) => void;
}

const TodoAddForm: React.FC<TodoAddFormProps> = ({ onAddTodo }) => {
  const [newItemName, setNewItemName] = useState('');

  const handleInputValueChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setNewItemName(event.target.value);
  };

  const handleCommit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    onAddTodo({
      id: Math.floor(Math.random() * 100000),
      label: newItemName,
      statue: TodoStatus.DOING
    });

    setNewItemName('');
  };

  return (
    <Styled.TodoForm onSubmit={handleCommit}>
      <Styled.FormInputWrap>
        <Input value={newItemName} onChange={handleInputValueChange} />
      </Styled.FormInputWrap>
      <Button htmlType="submit" disabled={!newItemName}>
        Add Todo
      </Button>
    </Styled.TodoForm>
  );
};

export default TodoAddForm;

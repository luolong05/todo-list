import React, { useState } from 'react';
import { TodoStatus, TodoType } from '@/components/todoList/todoTypes';
import * as Styled from '@/components/todoList/index.styled';
import { Button, Input } from '@/base';
import { apiTodoAdd } from '@/api/todo';

interface TodoAddFormProps {
  onAddTodo: (todo: TodoType) => void;
}

const TodoAddForm: React.FC<TodoAddFormProps> = ({ onAddTodo }) => {
  const [newItemName, setNewItemName] = useState('');

  const handleInputValueChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setNewItemName(event.target.value);
  };

  const handleCommit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();

    const newTodo: TodoType = {
      id: Math.floor(Math.random() * 100000),
      label: newItemName,
      statue: TodoStatus.DOING
    };

    const [err, resData] = await apiTodoAdd(newTodo);
    if (!err) {
      onAddTodo(resData?.data as TodoType);

      setNewItemName('');
    }
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

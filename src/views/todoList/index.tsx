import React, { useState, useMemo } from 'react';
import * as Styled from './index.styled';
import { Input, Button } from '@/base/index';
import { TodoStatus, TodoType } from './todoTypes';

const TodoManager: React.FC = () => {
  const [todoList, setTodoList] = useState<TodoType[]>([]);

  const handleAddTodo = (todo: TodoType): void => {
    setTodoList([...todoList, todo]);
  };

  const handleTodoUpdate = (todo: TodoType): void => {
    const idx: number = getTodoIndexById(todoList, todo.id);
    const todoExist: boolean = idx > -1;
    if (todoExist) {
      todoList.splice(idx, 1, todo);
      setTodoList([...todoList]);
    }
  };

  const handleTodoDelete = (todo: TodoType): void => {
    const idx: number = getTodoIndexById(todoList, todo.id);
    const todoExist: boolean = idx > -1;
    if (todoExist) {
      todoList.splice(idx, 1);
      setTodoList([...todoList]);
    }
  };

  const getTodoIndexById = (todoList: TodoType[], id: number): number => {
    return todoList.findIndex((item) => item.id === id);
  };

  return (
    <Styled.PageWrap>
      <Styled.PageHeader>
        <TodoAddForm onAddTodo={handleAddTodo}></TodoAddForm>
      </Styled.PageHeader>
      <Styled.PageContent>
        <TodoList
          todoList={todoList}
          onUpdate={handleTodoUpdate}
          onDelete={handleTodoDelete}
        ></TodoList>
      </Styled.PageContent>
    </Styled.PageWrap>
  );
};

interface TodoAddFormProps {
  onAddTodo: (todo: TodoType) => void;
}

const TodoAddForm: React.FC<TodoAddFormProps> = ({ onAddTodo }) => {
  const [newItemName, setNewItemName] = useState('');
  const disableButton: boolean = useMemo(() => {
    return !newItemName;
  }, [newItemName]);

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
    <Styled.TodoForm onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleCommit(e)}>
      <Styled.FormInputWrap>
        <Input value={newItemName} onChange={handleInputValueChange}></Input>
      </Styled.FormInputWrap>
      <Button htmlType="submit" disabled={disableButton}>
        Add Todo
      </Button>
    </Styled.TodoForm>
  );
};

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

  const handleTodoDelete = (todo: TodoType) => {
    onDelete(todo);
  };

  const todoListIsEmpty = todoList.length === 0;
  if (todoListIsEmpty) {
    return <Styled.EmptyList>暂无数据</Styled.EmptyList>;
  }

  return (
    <Styled.TodoList>
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
    </Styled.TodoList>
  );
};

export default TodoManager;

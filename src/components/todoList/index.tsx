import React, { useEffect, useState } from 'react';
import * as Styled from './index.styled';
import { TodoType } from './todoTypes';
import TodoAddForm from './todoAddForm';
import TodoList from './todoList';
import { apiTodoList } from '@/api/todo';

const TodoManager: React.FC = () => {
  const [todoList, setTodoList] = useState<TodoType[]>([]);

  useEffect(() => {
    getTodoList();
  }, []);

  const getTodoList = async (): Promise<void> => {
    const [err, res] = await apiTodoList();
    if (!err) {
      const todoList = (res?.data || []) as TodoType[];
      setTodoList(todoList);
    }
  };

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
        <TodoAddForm onAddTodo={handleAddTodo} />
      </Styled.PageHeader>
      <article>
        <TodoList todoList={todoList} onUpdate={handleTodoUpdate} onDelete={handleTodoDelete} />
      </article>
    </Styled.PageWrap>
  );
};

export default TodoManager;

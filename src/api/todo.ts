import request, { ResponseType } from '@/utils/fetch';
import { TodoType } from '@/components/todoList/todoTypes';

export const apiTodoList = (): Promise<ResponseType> => {
  return request('/todo');
};

export const apiTodoAdd = (todo: TodoType): Promise<ResponseType> => {
  return request('/todo/add', { method: 'post', body: JSON.stringify(todo) });
};

export const apiTodoUpdate = (id: number, todo: TodoType): Promise<ResponseType> => {
  return request(`/todo/update/${id}`, { method: 'put', body: JSON.stringify(todo) });
};

export const apiTodoDelete = (id: number): Promise<ResponseType> => {
  return request(`/todo/delete/${id}`, { method: 'delete' });
};

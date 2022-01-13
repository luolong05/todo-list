import request, { ResponseData } from '@/utils/fetch';
import { TodoType } from '@/components/todoList/todoTypes';

type RequestReturnType = [Error | null, ResponseData?];

export const apiTodoList = (): Promise<RequestReturnType> => {
  return request('/todo');
};

export const apiTodoAdd = (todo: TodoType): Promise<RequestReturnType> => {
  return request('/todo/add', { method: 'post', body: JSON.stringify(todo) });
};

export const apiTodoUpdate = (id: number, todo: TodoType): Promise<RequestReturnType> => {
  return request(`/todo/update/${id}`, { method: 'put', body: JSON.stringify(todo) });
};

export const apiTodoDelete = (id: number): Promise<RequestReturnType> => {
  return request(`/todo/delete/${id}`, { method: 'delete' });
};

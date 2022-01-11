import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import TodoList from './index';
import userEvent from '@testing-library/user-event';

let todoInstance: RenderResult;
beforeEach(() => {
  todoInstance = render(<TodoList />);
});

describe('Test the elements of the todo-list component', () => {
  it('The todo-list component should have an input box and a commit button', () => {
    const inputEl = todoInstance.getByRole('textbox');
    const buttonEl = todoInstance.getByRole('button');

    expect(inputEl).toBeInTheDocument();
    expect(buttonEl).toBeInTheDocument();
  });
});

describe('Test the function of the todo-list component', () => {
  it('Test add and delete and update todo item function', () => {
    const todoItemLabel = 'test-todo-item';
    const inputEl = todoInstance.getByRole('textbox') as HTMLInputElement;
    const buttonEl = todoInstance.getByRole('button');

    expect(buttonEl).toBeDisabled();

    // add
    userEvent.type(inputEl, todoItemLabel);

    expect(buttonEl).toBeEnabled();

    userEvent.click(buttonEl);

    expect(buttonEl).toBeDisabled();
    expect(inputEl.value).toEqual('');

    const newTodoItem = todoInstance.getByText(todoItemLabel);
    expect(newTodoItem).toBeInTheDocument();
    expect(newTodoItem.parentElement?.tagName.toLocaleLowerCase()).toEqual('li');

    // update
    const checkboxEl = newTodoItem.parentElement?.querySelector('input');
    expect(checkboxEl).toBeInTheDocument();

    if (checkboxEl) {
      userEvent.click(checkboxEl);

      expect(newTodoItem).toHaveStyle({
        color: 'rgb(48 197 87)'
      });
    }

    // delete
    const deleteBtn = newTodoItem.nextElementSibling;
    expect(deleteBtn).toHaveTextContent('x');

    if (deleteBtn) {
      userEvent.click(deleteBtn);
      expect(newTodoItem).not.toBeInTheDocument();
    }
  });
});

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
  const todoItemLabel = 'test-todo-item';
  const noDataTips = '暂无数据';

  let newTodoItem: HTMLElement;

  it('Test add and delete and update todo item function', () => {
    const inputEl = todoInstance.getByRole('textbox') as HTMLInputElement;
    const buttonEl = todoInstance.getByRole('button');

    expect(buttonEl).toBeDisabled();

    // show no data tips
    const noDataEl = todoInstance.getByText(noDataTips);
    expect(noDataEl).toBeInTheDocument();

    userEvent.type(inputEl, todoItemLabel);

    expect(buttonEl).toBeEnabled();

    userEvent.click(buttonEl);

    expect(buttonEl).toBeDisabled();
    expect(inputEl.value).toEqual('');

    newTodoItem = todoInstance.getByText(todoItemLabel);
    expect(newTodoItem).toBeInTheDocument();
    expect(newTodoItem.parentElement?.tagName.toLocaleLowerCase()).toEqual('li');

    expect(noDataEl).not.toBeInTheDocument();
  });

  it('Test update todo item function', () => {
    const checkboxEl = newTodoItem.parentElement?.querySelector('input');
    expect(checkboxEl).toBeInTheDocument();

    if (checkboxEl) {
      userEvent.click(checkboxEl);

      expect(newTodoItem).toHaveStyle({
        color: 'rgb(48 197 87)'
      });
    }
  });

  it('Test delete todo item function', () => {
    const deleteBtn = newTodoItem.nextElementSibling;
    expect(deleteBtn).toHaveTextContent('x');

    if (deleteBtn) {
      userEvent.click(deleteBtn);
      expect(newTodoItem).not.toBeInTheDocument();

      expect(todoInstance.getByText(noDataTips)).toBeInTheDocument();
    }
  });
});

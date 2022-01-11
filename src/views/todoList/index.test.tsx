import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import TodoList from './index';

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

describe('Test the function of the todo-list component', () => {});

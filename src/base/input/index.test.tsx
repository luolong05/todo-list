import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Input from './index';

describe('Test the elements of the input component', () => {
  it('The input element should be in the document', () => {
    const { getByRole } = render(
      <Input htmlType="text" name="test-input"></Input>
    );
    const input = getByRole('textbox');

    expect(input).toBeInTheDocument();
  });
});

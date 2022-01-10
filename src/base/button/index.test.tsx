import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './index';

describe('Test the elements of the button component', () => {
  it('The button component should be in the document', () => {
    const { getByRole } = render(<Button disabled>commit</Button>);
    const button = getByRole('button', { name: 'commit' });

    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
  });
});

describe('Test the function of the button component', () => {
  it('The button component should trigger the click function when clicked', () => {
    const handleClick = jest.fn(() => {});
    const { getByRole } = render(<Button onClick={handleClick}>commit</Button>);
    const button = getByRole('button', { name: 'commit' });

    userEvent.click(button);
    expect(handleClick).toBeCalled();
  });
});

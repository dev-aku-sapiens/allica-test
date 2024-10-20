import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';

import Input, { InputProps } from '../src/components/shared/Input';

describe('Input Component', () => {
  const setup = (props: Partial<InputProps> = {}) => {
    const initialProps: InputProps = {
      id: 'test-input',
      label: 'Test Label',
      value: '',
      onChange: jest.fn(),
      ...props,
    };

    return render(<Input {...initialProps} />);
  };

  it('renders input with label', () => {
    setup();

    // Assert that label and input elements are in the document
    expect(screen.getByLabelText('Test Label')).toBeInTheDocument();
    expect(screen.getByText('Test Label')).toBeInTheDocument();
  });

  it('calls onChange handler when value changes', () => {
    const onChange = jest.fn();
    setup({ onChange });

    const inputElement = screen.getByLabelText(
      'Test Label'
    ) as HTMLInputElement;

    // Simulate input change event
    fireEvent.change(inputElement, { target: { value: 'New Value' } });

    // Assert that onChange was called
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(expect.any(Object));
  });

  it('displays the required indicator if the field is required', () => {
    setup({ required: true });

    // Assert that required indicator (*) is displayed
    expect(screen.getByText('*')).toBeInTheDocument();
  });

  it('renders error message when error is passed', () => {
    const error = 'This field is required';
    setup({ error });

    // Assert that the error message is displayed
    expect(screen.getByText(error)).toBeInTheDocument();

    // Assert aria-invalid is true when error exists
    expect(screen.getByLabelText('Test Label')).toHaveAttribute(
      'aria-invalid',
      'true'
    );
  });

  it('renders the correct aria-label', () => {
    setup({ ariaLabel: 'Custom Aria Label' });

    // Assert that aria-label is applied correctly
    const inputElement = screen.getByLabelText('Custom Aria Label');
    expect(inputElement).toBeInTheDocument();
  });

  it('uses label text as aria-label if ariaLabel prop is not provided', () => {
    setup();

    // Assert aria-label defaults to the label text if no ariaLabel is provided
    const inputElement = screen.getByLabelText('Test Label');
    expect(inputElement).toBeInTheDocument();
  });

  it('renders the correct placeholder', () => {
    setup({ placeholder: 'Enter text here' });

    // Assert that the placeholder text is rendered
    const inputElement = screen.getByPlaceholderText('Enter text here');
    expect(inputElement).toBeInTheDocument();
  });

  it('applies the correct type attribute', () => {
    setup({ type: 'email' });

    // Assert that the input type is set correctly
    const inputElement = screen.getByLabelText('Test Label');
    expect(inputElement).toHaveAttribute('type', 'email');
  });

  it('displays the error message and has the correct aria-describedby', () => {
    const error = 'Invalid value';
    setup({ error });

    const inputElement = screen.getByLabelText('Test Label');

    // Assert that the input is described by the error element
    expect(inputElement).toHaveAttribute(
      'aria-describedby',
      'test-input-error'
    );
    expect(screen.getByText(error)).toBeInTheDocument();
  });

  it('does not display aria-describedby if there is no error', () => {
    setup();

    const inputElement = screen.getByLabelText('Test Label');

    // Assert that aria-describedby is not set if there's no error
    expect(inputElement).not.toHaveAttribute('aria-describedby');
  });
});

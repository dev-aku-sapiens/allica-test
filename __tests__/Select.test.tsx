import React, { useState } from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Select from '../src/components/shared/Select';

describe('Select Component', () => {
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  it('calls onChange handler when a new option is selected', () => {
    const TestSelectComponent = () => {
      const [value, setValue] = useState('');

      return (
        <Select
          id='test-select'
          label='Test Select'
          value={value}
          onChange={(e) => setValue(e.target.value)}
          options={options}
        />
      );
    };

    render(<TestSelectComponent />);

    const selectElement = screen.getByLabelText(
      'Test Select'
    ) as HTMLSelectElement;

    fireEvent.change(selectElement, { target: { value: 'option2' } });

    expect(selectElement.value).toBe('option2');
  });

  it('renders the placeholder when no value is selected', () => {
    render(
      <Select
        id='test-select'
        label='Test Select'
        value=''
        onChange={jest.fn()}
        options={options}
      />
    );

    const placeholderOption = screen.getByText('Please select');
    expect(placeholderOption).toBeInTheDocument();
    expect(placeholderOption).toHaveAttribute('disabled');
  });

  it('displays the error message and sets aria-invalid and aria-describedby when error is provided', () => {
    const error = 'This field is required';
    render(
      <Select
        id='test-select'
        label='Test Select'
        value=''
        onChange={jest.fn()}
        options={options}
        error={error}
      />
    );

    const errorMessage = screen.getByText(error);
    expect(errorMessage).toBeInTheDocument();

    const selectElement = screen.getByLabelText('Test Select');
    expect(selectElement).toHaveAttribute('aria-invalid', 'true');

    expect(selectElement).toHaveAttribute(
      'aria-describedby',
      'test-select-error'
    );
  });

  it('renders the required asterisk when required prop is true', () => {
    render(
      <Select
        id='test-select'
        label='Test Select'
        value=''
        required
        onChange={jest.fn()}
        options={options}
      />
    );

    const asterisk = screen.getByText('*');
    expect(asterisk).toBeInTheDocument();
    expect(asterisk).toHaveClass('text-red-500');
  });

  it('supports aria-label for accessibility', () => {
    render(
      <Select
        id='test-select'
        label='Test Select'
        ariaLabel='Custom Aria Label'
        value=''
        onChange={jest.fn()}
        options={options}
      />
    );

    const selectElement = screen.getByLabelText('Custom Aria Label');
    expect(selectElement).toBeInTheDocument();
  });

  it('renders all options correctly', () => {
    render(
      <Select
        id='test-select'
        label='Test Select'
        value=''
        onChange={jest.fn()}
        options={options}
      />
    );

    options.forEach((option) => {
      expect(screen.getByText(option.label)).toBeInTheDocument();
    });
  });

  it('does not trigger onChange when disabled', () => {
    const mockOnChange = jest.fn();

    render(
      <Select
        id='test-select'
        label='Test Select'
        value=''
        disabled={true}
        onChange={mockOnChange}
        options={options}
      />
    );

    const selectElement = screen.getByLabelText('Test Select');

    fireEvent.change(selectElement, { target: { value: 'option2' } });

    expect(mockOnChange).not.toHaveBeenCalled();
  });
});

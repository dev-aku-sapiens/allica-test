import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Button, { ButtonProps } from '../src/components/shared/Button';

describe('Button Component', () => {
  const defaultProps: ButtonProps = {
    children: 'Test Button',
  };

  it('renders the button with children text', () => {
    render(<Button {...defaultProps} />);
    expect(screen.getByText('Test Button')).toBeInTheDocument();
  });

  it('triggers onClick when button is clicked', () => {
    const onClick = jest.fn();
    render(<Button {...defaultProps} onClick={onClick} />);
    fireEvent.click(screen.getByText('Test Button'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('disables the button when disabled prop is true', () => {
    render(<Button {...defaultProps} disabled />);
    expect(screen.getByText('Test Button')).toBeDisabled();
  });

  it('does not trigger onClick when button is disabled', () => {
    const onClick = jest.fn();
    render(<Button {...defaultProps} onClick={onClick} disabled />);
    fireEvent.click(screen.getByText('Test Button'));
    expect(onClick).not.toHaveBeenCalled();
  });

  it('renders full-width when `fw` prop is true', () => {
    render(<Button {...defaultProps} fw />);
    expect(screen.getByText('Test Button')).toHaveClass('w-full');
  });

  it('applies primary variant styles by default', () => {
    render(<Button {...defaultProps} variant='primary' />);
    expect(screen.getByText('Test Button')).toHaveClass(
      'bg-primary',
      'text-white'
    );
  });

  it('applies secondary variant styles when specified', () => {
    render(<Button {...defaultProps} variant='secondary' />);
    expect(screen.getByText('Test Button')).toHaveClass(
      'text-primary',
      'border-primary'
    );
  });

  it('applies ghost variant styles when specified', () => {
    render(<Button {...defaultProps} variant='ghost' />);
    expect(screen.getByText('Test Button')).toHaveClass(
      'bg-transparent',
      'text-primary'
    );
  });

  it('supports `aria-label` for accessibility', () => {
    render(<Button {...defaultProps} ariaLabel='Custom Label' />);
    expect(screen.getByLabelText('Custom Label')).toBeInTheDocument();
  });

  it('calls onClick when pressing Enter key', () => {
    const onClick = jest.fn();
    render(<Button {...defaultProps} onClick={onClick} />);
    fireEvent.keyUp(screen.getByText('Test Button'), { key: 'Enter' });
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('calls onClick when pressing Space key', () => {
    const onClick = jest.fn();
    render(<Button {...defaultProps} onClick={onClick} />);
    fireEvent.keyUp(screen.getByText('Test Button'), { key: ' ' });
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('applies additional `className` prop', () => {
    render(<Button {...defaultProps} className='custom-class' />);
    expect(screen.getByText('Test Button')).toHaveClass('custom-class');
  });

  it('removes focus after click', () => {
    render(<Button {...defaultProps} />);
    const button = screen.getByText('Test Button');
    button.focus();
    fireEvent.click(button);
    expect(button).not.toHaveFocus();
  });
});

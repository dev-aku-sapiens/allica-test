import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Modal, { ModalProps } from '../src/components/shared/Modal';

beforeAll(() => {
  const modalRoot = document.createElement('div');
  modalRoot.setAttribute('id', 'modal');
  document.body.appendChild(modalRoot);
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('Modal Component', () => {
  const defaultProps: ModalProps = {
    title: 'Test Modal',
    isOpen: true,
    onClose: jest.fn(),
    onConfirm: jest.fn(),
    children: <div>Modal Content</div>,
  };

  it('renders the modal when open', () => {
    render(<Modal {...defaultProps} />);
    expect(screen.getByText('Modal Content')).toBeInTheDocument();
  });

  it('does not render when closed', () => {
    render(<Modal {...defaultProps} isOpen={false} />);
    expect(screen.queryByText('Modal Content')).not.toBeInTheDocument();
  });

  it('calls onClose when clicking the close button', () => {
    render(<Modal {...defaultProps} />);
    fireEvent.click(screen.getByLabelText('Close'));
    expect(defaultProps.onClose).toHaveBeenCalledTimes(1);
  });

  it('calls onConfirm when the confirm button is clicked', () => {
    render(<Modal {...defaultProps} />);
    fireEvent.click(screen.getAllByText('Confirm')[0]);
    expect(defaultProps.onConfirm).toHaveBeenCalledTimes(1);
  });

  it('closes when pressing the Escape key', () => {
    render(<Modal {...defaultProps} />);
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(defaultProps.onClose).toHaveBeenCalledTimes(1);
  });

  it('calls onConfirm when clicking the confirm button', () => {
    render(<Modal {...defaultProps} />);
    fireEvent.click(screen.getAllByText('Confirm')[0]);
    expect(defaultProps.onConfirm).toHaveBeenCalledTimes(1);
  });

  it('traps focus inside the modal when open', async () => {
    render(<Modal {...defaultProps} />);
    const closeButton = screen.getByLabelText('Close');
    closeButton.focus();
    await waitFor(() => expect(closeButton).toHaveFocus());
  });

  it('restores focus to the last focused element when closed', () => {
    const lastFocusedElement = document.createElement('button');
    document.body.appendChild(lastFocusedElement);
    lastFocusedElement.focus();
    render(<Modal {...defaultProps} isOpen={false} />);
    expect(lastFocusedElement).toHaveFocus();
  });

  it('removes body overflow when modal is closed', () => {
    render(<Modal {...defaultProps} isOpen={true} />);
    expect(document.body.style.overflow).toBe('hidden');
    render(<Modal {...defaultProps} isOpen={false} />);
    expect(document.body.style.overflow).toBe('auto');
  });

  it('closes when clicking outside the modal', async () => {
    render(<Modal {...defaultProps} />);
    fireEvent.click(screen.getByTestId('modal-backdrop'));
    await waitFor(() => expect(defaultProps.onClose).toHaveBeenCalledTimes(1));
  });

  it('has proper accessibility attributes', () => {
    render(<Modal {...defaultProps} />);
    expect(screen.getByRole('dialog')).toHaveAttribute('aria-modal', 'true');
    expect(screen.getByRole('dialog')).toHaveAttribute(
      'aria-labelledby',
      'modal-header'
    );
  });
});

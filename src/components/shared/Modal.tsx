import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

import Button from './Button';
import CloseIcon from '@mui/icons-material/Close';

export interface ModalProps {
  title?: string;
  isOpen: boolean;
  eyebrow?: string;
  onClose: () => void;
  onConfirm: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  title,
  isOpen,
  onClose,
  eyebrow,
  children,
  onConfirm,
}) => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const lastFocusedElementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKey);
    } else {
      document.removeEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen && lastFocusedElementRef.current) {
      lastFocusedElementRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const handleClickOutside = (event: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  if (!isOpen) {
    return null;
  }

  const modalContent = (
    <div
      role='dialog'
      aria-modal='true'
      data-testid='modal-backdrop'
      onClick={handleClickOutside}
      aria-labelledby='modal-header'
      aria-describedby='modal-description'
      className='fixed inset-0 flex items-center justify-center bg-scrim z-50'
    >
      <div
        tabIndex={-1}
        ref={modalRef}
        data-testid='modal-content'
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='bg-white p-6 rounded-md relative shadow-lg size-full overflow-y-auto sm:h-auto sm:w-[504px] sm:max-h-[89vh] md:h-auto md:w-[568px] md:max-h-[89vh] flex flex-col'
      >
        <div className='absolute top-3 right-4'>
          <button
            onClick={() => {
              onClose();
            }}
            aria-label='Close'
            ref={closeButtonRef}
            className='text-closeIcon flex items-center focus:outline-none focus:ring-2 focus:ring-primary-focus'
          >
            <CloseIcon />
          </button>
        </div>

        <div className='flex flex-col justify-start mb-4 sm:mt-4'>
          {eyebrow && (
            <p className='text-sm text-eyebrow' id='modal-description'>
              {eyebrow}
            </p>
          )}
          {title && (
            <h2
              id='modal-header'
              className='text-lg font-semibold text-headerTitle'
            >
              {title}
            </h2>
          )}
        </div>

        <div className='flex-grow w-full overflow-y-auto'>{children}</div>

        <div className='sm:hidden w-full flex flex-col gap-y-2 mt-4'>
          <Button variant='primary' onClick={onConfirm} fw={true}>
            Confirm
          </Button>
          <Button variant='ghost' onClick={onClose} fw={true}>
            Cancel
          </Button>
        </div>

        <div className='hidden sm:flex w-full justify-end gap-x-4 mt-4'>
          <Button variant='ghost' onClick={onClose}>
            Cancel
          </Button>
          <Button variant='primary' onClick={onConfirm}>
            Confirm
          </Button>
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalContent, document.getElementById('modal')!);
};

export default Modal;

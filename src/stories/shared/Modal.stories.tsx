import { useEffect, useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';

import Button from '../../components/shared/Button';
import Modal, { ModalProps } from '../../components/shared/Modal';

export default {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {
    title: { control: 'text' },
    eyebrow: { control: 'text' },
    isOpen: { control: 'boolean' },
  },
  decorators: [
    (Story) => {
      useEffect(() => {
        const modalRoot = document.getElementById('modal');
        if (!modalRoot) {
          const div = document.createElement('div');
          div.id = 'modal-root';
          document.body.appendChild(div);
        }
      }, []);

      return <Story />;
    },
  ],
} as Meta<ModalProps>;

export const Default: StoryFn<ModalProps> = (args) => {
  const [isOpen, setIsOpen] = useState(args.isOpen);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <Button onClick={handleOpen}>Open Modal</Button>
      <Modal {...args} isOpen={isOpen} onClose={handleClose}>
        <p>This is the default modal content.</p>
      </Modal>
    </>
  );
};
Default.args = {
  title: 'Default Modal',
  eyebrow: 'Eyebrow Text',
  isOpen: false,
};

export const WithoutTitle: StoryFn<ModalProps> = (args) => {
  const [isOpen, setIsOpen] = useState(args.isOpen);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <Button onClick={handleOpen}>Open Modal Without Title</Button>
      <Modal {...args} isOpen={isOpen} onClose={handleClose}>
        <p>This modal has no title.</p>
      </Modal>
    </>
  );
};
WithoutTitle.args = {
  eyebrow: 'Eyebrow Text',
  isOpen: false,
};

export const LongContent: StoryFn<ModalProps> = (args) => {
  const [isOpen, setIsOpen] = useState(args.isOpen);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <Button onClick={handleOpen}>Open Modal with Long Content</Button>
      <Modal {...args} isOpen={isOpen} onClose={handleClose}>
        <p>Here is a lot of content to demonstrate scrolling...</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Phasellus nec tortor nec eros consectetur auctor.</p>
        <p>Here is a lot of content to demonstrate scrolling...</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Phasellus nec tortor nec eros consectetur auctor.</p>
        <p>Here is a lot of content to demonstrate scrolling...</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Phasellus nec tortor nec eros consectetur auctor.</p>
        <p>Here is a lot of content to demonstrate scrolling...</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Phasellus nec tortor nec eros consectetur auctor.</p>
        <p>Here is a lot of content to demonstrate scrolling...</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Phasellus nec tortor nec eros consectetur auctor.</p>
        <p>Here is a lot of content to demonstrate scrolling...</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Phasellus nec tortor nec eros consectetur auctor.</p>
        <p>Here is a lot of content to demonstrate scrolling...</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Phasellus nec tortor nec eros consectetur auctor.</p>
      </Modal>
    </>
  );
};
LongContent.args = {
  title: 'Modal with Long Content',
  isOpen: false,
};

export const Confirmation: StoryFn<ModalProps> = (args) => {
  const [isOpen, setIsOpen] = useState(args.isOpen);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <Button onClick={handleOpen}>Open Confirmation Modal</Button>
      <Modal
        {...args}
        isOpen={isOpen}
        onClose={handleClose}
        onConfirm={() => alert('Confirmed!')}
      >
        <p>Are you sure you want to confirm this action?</p>
      </Modal>
    </>
  );
};

Confirmation.args = {
  title: 'Confirmation Modal',
  eyebrow: 'Important Action',
  isOpen: false,
};

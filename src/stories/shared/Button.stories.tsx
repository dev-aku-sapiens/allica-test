import { Meta, StoryFn } from '@storybook/react';
import Button, { ButtonProps } from '../../components/shared/Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: { type: 'select', options: ['primary', 'secondary', 'ghost'] },
    },
    fw: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
} as Meta<ButtonProps>;

export const Primary: StoryFn<ButtonProps> = (args) => <Button {...args} />;
Primary.args = {
  variant: 'primary',
  children: 'Primary Button',
};

export const Secondary: StoryFn<ButtonProps> = (args) => <Button {...args} />;
Secondary.args = {
  variant: 'secondary',
  children: 'Secondary Button',
};

export const Ghost: StoryFn<ButtonProps> = (args) => <Button {...args} />;
Ghost.args = {
  variant: 'ghost',
  children: 'Ghost Button',
};

export const FullWidth: StoryFn<ButtonProps> = (args) => <Button {...args} />;
FullWidth.args = {
  variant: 'primary',
  fw: true,
  children: 'Full Width Button',
};

export const Disabled: StoryFn<ButtonProps> = (args) => <Button {...args} />;
Disabled.args = {
  variant: 'primary',
  children: 'Disabled Button',
  disabled: true,
};

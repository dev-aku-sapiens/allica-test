import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Input, { InputProps } from '../../components/shared/Input';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
    error: { control: 'text' },
    placeholder: { control: 'text' },
    type: { control: 'text' },
    required: { control: 'boolean' },
  },
} as Meta<InputProps>;

const Template: StoryFn<InputProps> = (args) => {
  const [inputValue, setInputValue] = useState(args.value || '');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return <Input {...args} value={inputValue} onChange={handleChange} />;
};

export const Default: StoryFn<InputProps> = Template.bind({});
Default.args = {
  id: 'input-default',
  label: 'Default Input',
  value: '',
  placeholder: 'Type something...',
};

export const WithError: StoryFn<InputProps> = Template.bind({});
WithError.args = {
  id: 'input-error',
  label: 'Input with Error',
  value: '',
  error: 'This field is required',
  required: true,
  placeholder: 'Enter a value',
};

export const Prefilled: StoryFn<InputProps> = Template.bind({});
Prefilled.args = {
  id: 'input-prefilled',
  label: 'Prefilled Input',
  value: 'Initial value',
  placeholder: 'Enter your name',
};

export const Password: StoryFn<InputProps> = Template.bind({});
Password.args = {
  id: 'input-password',
  label: 'Password Input',
  type: 'password',
  value: '',
  placeholder: 'Enter your password',
};

export const Required: StoryFn<InputProps> = Template.bind({});
Required.args = {
  id: 'input-required',
  label: 'Required Input',
  required: true,
  value: '',
  placeholder: 'Required field',
};

import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Select, { SelectProps } from '../../components/shared/Select';

export default {
  title: 'Components/Select',
  component: Select,
  argTypes: {
    label: { control: 'text' },
    error: { control: 'text' },
    options: { control: 'object' },
    ariaLabel: { control: 'text' },
    required: { control: 'boolean' },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
  },
} as Meta<SelectProps>;

const Template: StoryFn<SelectProps> = (args) => {
  const [selectedValue, setSelectedValue] = useState<string>(args.value || '');

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(e.target.value);
    args.onChange?.(e);
  };

  return <Select {...args} value={selectedValue} onChange={handleChange} />;
};

export const Default: StoryFn<SelectProps> = Template.bind({});
Default.args = {
  id: 'select-default',
  label: 'Select an Option',
  options: [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ],
  placeholder: 'Please select an option',
  disabled: false,
};

export const WithError: StoryFn<SelectProps> = Template.bind({});
WithError.args = {
  id: 'select-error',
  label: 'Select Option with Error',
  options: [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ],
  error: 'This field is required.',
  required: true,
  placeholder: 'Please select an option',
  disabled: false,
};

export const Required: StoryFn<SelectProps> = Template.bind({});
Required.args = {
  id: 'select-required',
  label: 'Required Select',
  options: [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ],
  required: true,
  placeholder: 'Please select an option',
  disabled: false,
};

export const WithInitialValue: StoryFn<SelectProps> = Template.bind({});
WithInitialValue.args = {
  id: 'select-initial-value',
  label: 'Select with Initial Value',
  value: 'option2',
  options: [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ],
  placeholder: 'Please select an option',
  disabled: false,
};

export const Disabled: StoryFn<SelectProps> = Template.bind({});
Disabled.args = {
  id: 'select-disabled',
  label: 'Disabled Select',
  options: [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ],
  placeholder: 'Please select an option',
  disabled: true,
};

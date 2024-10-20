import { Meta, StoryFn } from '@storybook/react';
import Spinner from '../../components/shared/Spinner';

export default {
  title: 'Components/Spinner',
  component: Spinner,
  argTypes: {},
} as Meta<typeof Spinner>;

const Template: StoryFn<typeof Spinner> = () => <Spinner />;

export const Default = Template.bind({});

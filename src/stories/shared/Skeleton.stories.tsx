import { Meta, StoryFn } from '@storybook/react';
import Skeleton from '../../components/shared/Skeleton';

export default {
  title: 'Components/Skeleton',
  component: Skeleton,
  argTypes: {
    className: { control: 'text' },
    ariaLabel: { control: 'text' },
  },
} as Meta<typeof Skeleton>;

const Template: StoryFn<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: 'w-32 h-8',
  ariaLabel: 'Loading content...',
};

import { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { APIPeopleProps } from '../../services';
import Pagination from '../../components/shared/Pagination';

export default {
  component: Pagination,
  title: 'Components/Pagination',
  argTypes: {
    data: { control: 'object' },
  },
} as Meta<typeof Pagination>;

const Template: StoryFn<typeof Pagination> = (args) => {
  const [page, setPage] = useState(1);

  const data = {
    count: 100,
    next: page < 10 ? `${page + 1}` : null,
    previous: page > 1 ? `${page - 1}` : null,
    results: Array.from({ length: 10 }),
  } as APIPeopleProps;

  return (
    <>
      <Pagination {...args} data={data} setPage={setPage} />
      <p className='mt-2 text-center w-full'>Current Page: {page}</p>
    </>
  );
};

export const Default = Template.bind({});

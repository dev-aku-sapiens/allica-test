import React, { useCallback } from 'react';
import Button from './Button';
import { APIPeopleProps } from '../../services';

export interface PaginationProps {
  data: APIPeopleProps | undefined;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination: React.FC<PaginationProps> = ({ data, setPage }) => {
  const handlePreviousPage = useCallback(() => {
    setPage((prev) => Math.max(prev - 1, 1));
  }, [setPage]);

  const handleNextPage = useCallback(() => {
    setPage((prev) => prev + 1);
  }, [setPage]);

  if (!data?.count) return null;

  return (
    <nav className='flex justify-between mt-4' aria-label='Pagination'>
      <Button
        variant='primary'
        disabled={!data.previous}
        aria-label='Go to previous page'
        onClick={handlePreviousPage}
      >
        Previous
      </Button>

      <span className='sr-only' aria-live='polite'>
        Page {data.previous ? data.previous + 1 : 1}
      </span>

      <Button
        variant='primary'
        disabled={!data.next}
        aria-label='Go to next page'
        onClick={handleNextPage}
      >
        Next
      </Button>
    </nav>
  );
};

export default Pagination;

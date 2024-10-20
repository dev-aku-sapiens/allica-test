import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Skeleton from '../src/components/shared/Skeleton';

describe('Skeleton Component', () => {
  it('renders the Skeleton component', () => {
    render(<Skeleton />);
    const skeletonElement = screen.getByRole('status');
    expect(skeletonElement).toBeInTheDocument();
  });

  it('renders with the correct default aria-label', () => {
    render(<Skeleton />);
    const skeletonElement = screen.getByRole('status');
    expect(skeletonElement).toHaveAttribute('aria-label', 'Loading...');
  });

  it('renders with a custom aria-label when passed', () => {
    render(<Skeleton ariaLabel='Custom loading message' />);
    const skeletonElement = screen.getByRole('status');
    expect(skeletonElement).toHaveAttribute(
      'aria-label',
      'Custom loading message'
    );
  });

  it('applies additional class names when passed', () => {
    render(<Skeleton className='w-48 h-48' />);
    const skeletonElement = screen.getByRole('status');
    expect(skeletonElement).toHaveClass('w-48 h-48');
  });

  it('applies the default animation class', () => {
    render(<Skeleton />);
    const skeletonElement = screen.getByRole('status');
    expect(skeletonElement).toHaveClass('animate-pulse bg-gray-300');
  });
});

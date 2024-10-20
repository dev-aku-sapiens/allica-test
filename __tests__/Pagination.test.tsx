import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';

import { APIPeopleProps } from '../src/services';
import Pagination from '../src/components/shared/Pagination';

describe('Pagination Component', () => {
  const mockSetPage = jest.fn();

  const mockData: APIPeopleProps = {
    count: 10,
    next: '10',
    previous: null,
    results: Array(10).fill({}),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render both Previous and Next buttons', () => {
    render(<Pagination data={mockData} setPage={mockSetPage} />);
    expect(
      screen.getByRole('button', { name: /Previous/i })
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Next/i })).toBeInTheDocument();
  });

  it('should disable Previous button on first page', () => {
    render(<Pagination data={mockData} setPage={mockSetPage} />);
    const previousButton = screen.getByRole('button', { name: /Previous/i });
    expect(previousButton).toBeDisabled();
  });

  it('should enable Next button when more pages are available', () => {
    render(<Pagination data={mockData} setPage={mockSetPage} />);
    const nextButton = screen.getByRole('button', { name: /Next/i });
    expect(nextButton).not.toBeDisabled();
  });

  it('should call setPage with correct value when clicking Next', () => {
    render(<Pagination data={mockData} setPage={mockSetPage} />);
    const nextButton = screen.getByRole('button', { name: /Next/i });
    fireEvent.click(nextButton);
    expect(mockSetPage).toHaveBeenCalledWith(expect.any(Function));
  });

  it('should call setPage with correct value when clicking Previous', () => {
    const mockDataWithPrevious = { ...mockData, previous: '9' };
    render(<Pagination data={mockDataWithPrevious} setPage={mockSetPage} />);
    const previousButton = screen.getByRole('button', { name: /Previous/i });
    fireEvent.click(previousButton);
    expect(mockSetPage).toHaveBeenCalledWith(expect.any(Function));
  });

  it('should not render pagination if there is no data', () => {
    render(<Pagination data={undefined} setPage={mockSetPage} />);
    expect(screen.queryByRole('button', { name: /Previous/i })).toBeNull();
    expect(screen.queryByRole('button', { name: /Next/i })).toBeNull();
  });

  it('should handle no results in the data gracefully', () => {
    const emptyData = { count: 0, next: null, previous: null, results: [] };
    render(<Pagination data={emptyData} setPage={mockSetPage} />);
    expect(screen.queryByRole('button', { name: /Previous/i })).toBeNull();
    expect(screen.queryByRole('button', { name: /Next/i })).toBeNull();
  });

  it('should update the `aria-live` region to indicate the current page', () => {
    render(<Pagination data={mockData} setPage={mockSetPage} />);
    const liveRegion = screen.getByText(/Page 1/i);
    expect(liveRegion).toHaveAttribute('aria-live', 'polite');
  });
});

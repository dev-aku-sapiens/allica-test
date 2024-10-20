import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Spinner from '../src/components/shared/Spinner';

describe('Spinner Component', () => {
  it('renders the Spinner component', () => {
    render(<Spinner />);
    const spinnerElement = screen.getByRole('status');
    expect(spinnerElement).toBeInTheDocument();
  });

  it('has the correct aria-busy attribute', () => {
    render(<Spinner />);
    const spinnerElement = screen.getByRole('status');
    expect(spinnerElement).toHaveAttribute('aria-busy', 'true');
  });

  it('has the correct aria-live attribute', () => {
    render(<Spinner />);
    const spinnerElement = screen.getByRole('status');
    expect(spinnerElement).toHaveAttribute('aria-live', 'polite');
  });

  it('contains the CircularProgress component', () => {
    render(<Spinner />);
    const circularProgressElement = screen.getByRole('progressbar');
    expect(circularProgressElement).toBeInTheDocument();
  });

  it('applies the correct styling for center alignment', () => {
    render(<Spinner />);
    const spinnerElement = screen.getByRole('status');
    expect(spinnerElement).toHaveStyle({
      height: '75vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    });
  });
});

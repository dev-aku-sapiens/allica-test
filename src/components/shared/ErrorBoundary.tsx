import { Component, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any): ErrorBoundaryState {
    console.error('Error caught by ErrorBoundary:', error);
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className='p-6 text-center text-red-600'>
          <h1 className='text-2xl font-bold'>Something went wrong.</h1>
          <p className='text-lg mt-4'>
            Sorry, an error occurred while loading the page.
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

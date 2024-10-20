import React from 'react';

export interface SkeletonProps {
  className?: string;
  ariaLabel?: string;
}

const Skeleton: React.FC<SkeletonProps> = ({
  className = '',
  ariaLabel = 'Loading...',
}) => {
  return (
    <div
      role='status'
      aria-label={ariaLabel}
      className={`animate-pulse bg-gray-300 ${className}`}
    />
  );
};

export default Skeleton;

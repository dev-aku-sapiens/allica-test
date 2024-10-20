import React from 'react';
import { Skeleton } from '../shared';

const SkeletonCard: React.FC = () => {
  return (
    <div
      aria-label='Loading character details'
      className='bg-white border border-gray-200 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col gap-2'
    >
      <div className='flex justify-between items-center'>
        <Skeleton className='h-6 w-1/3' ariaLabel='Loading character name' />

        <Skeleton
          className='size-14 rounded-full'
          ariaLabel='Loading favorite button'
        />
      </div>

      <div className='grid grid-cols-2 gap-y-1 text-sm text-gray-700'>
        <div className='flex items-center gap-x-2'>
          <Skeleton
            className='size-5 rounded-full'
            ariaLabel='Loading Home World icon'
          />
          <Skeleton
            className='h-4 w-2/3'
            ariaLabel='Loading Home World label'
          />
        </div>
        <Skeleton className='h-4 w-1/3' ariaLabel='Loading Home World name' />

        <div className='flex items-center gap-x-2'>
          <Skeleton
            className='size-5 rounded-full'
            ariaLabel='Loading Birth Year icon'
          />
          <Skeleton
            className='h-4 w-2/3'
            ariaLabel='Loading Birth Year label'
          />
        </div>
        <Skeleton className='h-4 w-1/3' ariaLabel='Loading Birth Year value' />

        <div className='flex items-center gap-x-2'>
          <Skeleton
            className='size-5 rounded-full'
            ariaLabel='Loading Gender icon'
          />
          <Skeleton className='h-4 w-2/3' ariaLabel='Loading Gender label' />
        </div>
        <Skeleton className='h-4 w-1/3' ariaLabel='Loading Gender value' />

        <div className='flex items-center gap-x-2'>
          <Skeleton
            className='size-5 rounded-full'
            ariaLabel='Loading Hair Color icon'
          />
          <Skeleton
            className='h-4 w-2/3'
            ariaLabel='Loading Hair Color label'
          />
        </div>
        <Skeleton className='h-4 w-1/3' ariaLabel='Loading Hair Color value' />

        <div className='flex items-center gap-x-2'>
          <Skeleton
            className='size-5 rounded-full'
            ariaLabel='Loading Height icon'
          />
          <Skeleton className='h-4 w-2/3' ariaLabel='Loading Height label' />
        </div>
        <Skeleton className='h-4 w-1/3' ariaLabel='Loading Height value' />

        <div className='flex items-center gap-x-2'>
          <Skeleton
            className='size-5 rounded-full'
            ariaLabel='Loading Mass icon'
          />
          <Skeleton className='h-4 w-2/3' ariaLabel='Loading Mass label' />
        </div>
        <Skeleton className='h-4 w-1/3' ariaLabel='Loading Mass value' />
      </div>

      <Skeleton
        className='h-14 mt-4 w-full'
        ariaLabel='Loading View Detail button'
      />
    </div>
  );
};

export default SkeletonCard;

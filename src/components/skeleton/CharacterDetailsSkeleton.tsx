import React from 'react';
import Skeleton from '../shared/Skeleton';

const CharacterDetailsSkeleton: React.FC = () => {
  return (
    <div className='container mx-auto px-4 py-4'>
      <div className='flex justify-between items-center mb-4'>
        <Skeleton
          className='h-8 w-64 rounded'
          aria-label='Loading character name'
        />
        <Skeleton
          className='h-8 w-64 rounded'
          aria-label='Loading character name'
        />
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
        <div className='space-y-2 mb-4'>
          <Skeleton className='h-6 w-48 rounded' aria-label='Loading gender' />
          <Skeleton
            className='h-6 w-48 rounded'
            aria-label='Loading hair color'
          />
          <Skeleton
            className='h-6 w-48 rounded'
            aria-label='Loading eye color'
          />
          <Skeleton className='h-6 w-48 rounded' aria-label='Loading height' />
          <Skeleton
            className='h-6 w-48 rounded'
            aria-label='Loading birth year'
          />
        </div>

        <div className='space-y-2'>
          <Skeleton
            className='h-6 w-48 rounded'
            aria-label='Loading home world'
          />
          <Skeleton
            className='h-6 w-48 rounded'
            aria-label='Loading skin color'
          />
          <Skeleton className='h-6 w-48 rounded' aria-label='Loading mass' />
        </div>
      </div>
      <div className='mt-6'>
        <Skeleton
          className='h-8 w-64 rounded'
          aria-label='Loading character name'
        />
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-2'>
          <ListSkeleton />
          <ListSkeleton />
        </div>
      </div>
    </div>
  );
};

export default CharacterDetailsSkeleton;

export const ListSkeleton: React.FC = () => {
  return (
    <div className='mt-6'>
      <h3 className='mb-4'>
        <Skeleton
          className='h-6 w-32 rounded'
          aria-label='Loading section title'
        />
      </h3>

      <ul>
        {Array.from({ length: 3 }).map((_, index) => (
          <li key={index} className='mb-2'>
            <Skeleton
              className='h-4 w-64 rounded'
              aria-label={`Loading list item ${index + 1}`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

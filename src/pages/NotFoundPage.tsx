import React from 'react';
import { Link } from 'react-router-dom';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { Button } from '../components/shared';

const NotFoundPage: React.FC = () => {
  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='flex flex-col items-center justify-center h-full'>
        <ErrorOutlineIcon
          sx={{
            fontSize: { xs: 60, sm: 80, md: 100 },
            color: '#E53E3E',
          }}
        />
        <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mt-4 text-center'>
          Page Not Found
        </h1>
        <p className='text-gray-600 mt-2 text-center text-sm sm:text-base'>
          The page you are looking for does not exist.
        </p>
        <Link className='mt-4' aria-label='Back to Home' to='/'>
          <Button className='mt-6' variant='primary'>
            Go to Homepage
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;

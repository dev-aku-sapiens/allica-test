import React from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

const Spinner: React.FC = () => {
  return (
    <Box
      role='status'
      aria-busy='true'
      aria-live='polite'
      sx={{
        height: '75vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default Spinner;

import React from 'react';
import { Box, CircularProgress, Stack } from '@mui/material';

const LoadingSpinner = () => {
  return (
    <>
      <Box minHeight="95vh">
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          width={'100%'}
          height="80vh"
        >
          <CircularProgress />
        </Stack>
      </Box>
    </>
  );
};

export default LoadingSpinner;

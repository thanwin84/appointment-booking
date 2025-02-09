import { Outlet, useNavigate } from 'react-router';
import { Box, Button, Stack, Typography } from '@mui/material';

import { LocalizationProvider } from '@/providers';

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <LocalizationProvider>
      <Stack spacing={4}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          paddingX={4}
        >
          <Typography variant="h1">Welcome!</Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate('/book-slot')}
          >
            Book a Slot
          </Button>
        </Box>
        <Box padding={4}>
          <Outlet />
        </Box>
      </Stack>
    </LocalizationProvider>
  );
};

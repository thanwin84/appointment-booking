import { useNavigate } from 'react-router';
import { Box, Button, Typography } from '@mui/material';

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ width: '100%', textAlign: 'center' }}>
      <Typography variant="h1">Welcome!</Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate('/book-slot')}
      >
        Book a Slot
      </Button>
    </Box>
  );
};

import { Box, Typography } from '@mui/material';
import * as Home from './components';

const HomePage = () => {
  return (
    <Box sx={{ position: 'relative', height: '100vh' }}>
      <Home.Background />
      <Home.BackgroundOverlay />
      <Home.Content>
        <Typography variant='h1' color='white'>
          Test
        </Typography>
      </Home.Content>
    </Box>
  );
};

export default HomePage;

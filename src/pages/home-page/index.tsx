import { Box, Typography } from '@mui/material';
import * as Home from './components';

const HomePage = () => (
  <Box sx={{ position: 'relative', height: '100vh' }}>
    <Home.Background />
    <Home.BackgroundOverlay />
    <Home.Content color="white">
      <Typography variant="h2" component="h1" fontWeight={100} gutterBottom>EngServices</Typography>
      <Typography variant="h4" component="p" fontWeight={100} display={{ xs: 'none', sm: 'block' }}>Leave all your construction problems to us</Typography>
    </Home.Content>
  </Box>
);

export default HomePage;

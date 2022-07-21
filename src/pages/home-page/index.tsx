import {
  Box, Typography, useMediaQuery, useTheme,
} from '@mui/material';
import * as Home from './components';

const HomePage = () => {
  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Box sx={{ position: 'relative', height: '100vh' }}>
      <Home.Background />
      <Home.BackgroundOverlay />
      <Home.Content color='white' textAlign='center'>
        <Typography variant='h2' component='h1' fontWeight={100} fontSize={smUp ? '60px' : '40px'} gutterBottom>
          EngServices
        </Typography>
        <Typography variant='h4' component='p' fontWeight={100} fontSize={smUp ? '34px' : '20px'}>
          Leave all your design and construction problems to us
        </Typography>
      </Home.Content>
    </Box>
  );
};

export default HomePage;

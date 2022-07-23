import {
  Box, Typography, useMediaQuery, useTheme,
} from '@mui/material';
import * as Home from './components';
import cardsData from '../../assets/data/home-cards-data';

const HomePage = () => {
  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Home.Container>
      <Home.Background />
      <Home.BackgroundOverlay />
      <Home.Content>
        <Typography variant='h2' component='h1' fontWeight={100} fontSize={smUp ? '60px' : '40px'} gutterBottom color='#d4e157'>
          EngServices
        </Typography>
        <Typography variant='h4' component='p' fontWeight={100} fontSize={smUp ? '30px' : '20px'} mb={5}>
          We are happy being able to offer professional skills
          and highest competences to solve all your design and construction problems
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 5 }}>
          {
            cardsData.map(({ title, img, description }) => (
              <Home.HomeCard key={title} title={title} img={img} description={description} />
            ))
          }
        </Box>
      </Home.Content>
    </Home.Container>
  );
};

export default HomePage;

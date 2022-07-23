import {
  Box, Typography, useMediaQuery, useTheme,
} from '@mui/material';
import * as Home from './components';
import cardsData from '../../assets/data/home-cards-data';

const HomePage = () => {
  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Home.Container>
      <Home.Background />
      <Home.BackgroundOverlay />
      <Home.Content>
        <Typography variant='h2' component='h1' fontWeight={100} fontSize={mdUp ? '60px' : '40px'} gutterBottom color='primary'>
          EngServices
        </Typography>
        <Typography variant='body1' fontWeight={100} fontSize={mdUp ? '30px' : '20px'} mb={5}>
          We are happy being able to offer professional skills
          and highest competences to solve all your design and construction problems
        </Typography>
        {
          mdUp ? (
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 5 }}>
              {
            cardsData.map(({ title, img, description }) => (
              <Home.HomeCard key={title} title={title} img={img} description={description} />
            ))
          }
            </Box>
          ) : (
            null
          )
        }
      </Home.Content>
    </Home.Container>
  );
};

export default HomePage;

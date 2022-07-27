import { useNavigate } from 'react-router-dom';
import {
  Box, Button, Grid, Typography, useMediaQuery, useTheme,
} from '@mui/material';
import * as Home from './components';
import cardsData from '../../assets/data/home-cards-data';

const HomePage = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Home.Container>
      <Home.Background />
      <Home.BackgroundOverlay />
      <Home.Content>
        <Typography variant='h2' component='h1' fontWeight={100} fontSize={mdUp ? 50 : 40} gutterBottom color='primary'>
          EngServices
        </Typography>
        <Typography variant='body1' fontWeight={100} fontSize={mdUp ? 24 : 20} mb={5} sx={{ maxWidth: { xs: 600, md: 1200 } }}>
          We are happy being able to offer professional skills
          and highest competences to solve all your design and construction problems
        </Typography>
        {
          mdUp ? (
            <Grid container justifyContent='center' spacing={3} maxWidth={1200}>
              {
            cardsData.map(({ title, img, description }) => (
              <Grid item key={title} display='flex' justifyContent='center' md={3}>
                <Home.HomeCard title={title} img={img} description={description} />
              </Grid>
            ))
          }
            </Grid>
          ) : (
            <Box display='flex' flexDirection='column' gap={2} width='100%'>
              {
                cardsData.map(({ title }) => (
                  <Button variant='outlined' fullWidth size='medium' sx={{ fontSize: 18, fontWeight: 400 }} onClick={() => navigate('/services')}>
                    {title}
                  </Button>
                ))
              }
            </Box>
          )
        }
      </Home.Content>
    </Home.Container>
  );
};

export default HomePage;

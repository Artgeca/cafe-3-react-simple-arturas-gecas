import {
  Box, Typography, useMediaQuery, useTheme,
} from '@mui/material';
import * as Home from './components';

import designImg from '../../assets/images/design.jpg';
import constructionImg from '../../assets/images/construction.jpg';
import demolitionImg from '../../assets/images/demolition.jpg';
import rentalImg from '../../assets/images/rental.jpg';

const cardsData = [
  {
    title: 'Design',
    img: designImg,
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit doloribus molestias dolor corrupti cumque, accusamus distinctio cum eaque voluptas, modi sed odit, quidem velit iusto consequuntur asperiores eveniet perferendis ipsa?',
  },
  {
    title: 'Construction',
    img: constructionImg,
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia ipsam esse impedit quaerat numquam dolorem.',
  },
  {
    title: 'Demolition',
    img: demolitionImg,
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit doloribus molestias dolor corrupti cumque, accusamus distinctio cum eaque voluptas, modi sed odit, quidem velit iusto consequuntur asperiores eveniet perferendis ipsa?',
  },
  {
    title: 'Equipment',
    img: rentalImg,
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit doloribus molestias dolor corrupti cumque.',
  },
];

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

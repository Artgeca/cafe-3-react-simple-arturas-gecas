import { Box, Typography } from '@mui/material';
import demolitionImg from '../../../assets/images/demolition2.jpg';

const DemolitionTab = () => (
  <Box
    display='flex'
    maxWidth={800}
    flexDirection={{ xs: 'column' }}
    justifyContent='center'
    alignItems='center'
    gap={3}
  >
    <Box
      component='img'
      src={demolitionImg}
      width='100%'
      maxHeight={380}
      sx={{ objectFit: 'cover' }}
    />
    <Typography align='center'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Dolore neque aut ab ut! Vel deleniti cupiditate, illo laborum rerum
      aut dicta blanditiis quo id saepe, incidunt quis ullam velit.
      Laudantium inventore quisquam est debitis! Aliquid, numquam
      magnam est doloremque beatae sequi fugiat ex non quam ullam rem
      voluptatem quos, repudiandae libero ad earum error perspiciatis
      voluptatum accusantium eligendi, similique atque?
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Dolore neque aut ab ut! Vel deleniti cupiditate, illo laborum rerum
      aut dicta blanditiis quo id saepe, incidunt quis ullam velit.
      Laudantium inventore quisquam est debitis! Aliquid, numquam
      magnam est doloremque beatae sequi fugiat ex non quam ullam rem
      voluptatem quos, repudiandae libero ad earum error perspiciatis
      voluptatum accusantium eligendi, similique atque?
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Dolore neque aut ab ut! Vel deleniti cupiditate, illo laborum rerum
      aut dicta blanditiis quo id saepe, incidunt quis ullam velit.
      Laudantium inventore quisquam est debitis! Aliquid, numquam
      magnam est doloremque beatae sequi fugiat ex non quam ullam rem
      voluptatem quos, repudiandae libero ad earum error perspiciatis
      voluptatum accusantium eligendi, similique atque?
    </Typography>
  </Box>
);

export default DemolitionTab;

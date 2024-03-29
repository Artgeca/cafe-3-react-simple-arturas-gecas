import { Box, Typography } from '@mui/material';
import designImg from '../../../assets/images/design3.jpg';

const DesignTab = () => (
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
      src={designImg}
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

export default DesignTab;

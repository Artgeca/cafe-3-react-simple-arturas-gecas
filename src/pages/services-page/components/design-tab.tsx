import { Box, Typography } from '@mui/material';
import designImg from '../../../assets/images/design2.jpg';

const DesignTab = () => (
  <Box
    display='flex'
    maxWidth={1440}
    flexDirection={{ xs: 'column', sm: 'row' }}
    gap={2}
  >
    <Box
      component='img'
      src={designImg}
      height={300}
      sx={{ objectFit: 'cover' }}
    />
    <Typography>
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

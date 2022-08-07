import { Box, Button, Typography } from '@mui/material';
import equipmentImg from '../../../assets/images/rental.jpg';

const EquipmentTab = () => (
  <Box
    display='flex'
    maxWidth={800}
    flexDirection={{ xs: 'column' }}
    justifyContent='center'
    alignItems='center'
    gap={3}
  >
    <Box position='relative' width='100%' height={380}>
      <Box
        position='absolute'
        top={0}
        left={0}
        component='img'
        src={equipmentImg}
        width='100%'
        height='100%'
        sx={{ objectFit: 'cover', zIndex: 1 }}
      />
      <Box
        position='absolute'
        top={0}
        left={0}
        width='100%'
        height='100%'
        bgcolor='common.black'
        sx={{
          zIndex: 2,
          opacity: 0.6,
        }}
      />
      <Box
        position='absolute'
        top={0}
        left={0}
        width='100%'
        height='100%'
        display='flex'
        justifyContent='center'
        alignItems='center'
        sx={{
          zIndex: 3,
        }}
      >
        <Button sx={{
          width: '100%',
          height: '100%',
          textTransform: 'none',
        }}
        >
          <Typography variant='h4'>Visit Store</Typography>
        </Button>
      </Box>
    </Box>
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

export default EquipmentTab;

import React from 'react';
import {
  Paper, Typography, Box, Button, Chip, TextField,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { RentalItem } from '../types';

const RentalCard: React.FC<RentalItem> = ({
  id,
  title,
  rentalCategoryId,
  rentalCategory,
  specs,
  img,
}) => (
  <Paper sx={{
    display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2, width: 300,
  }}
  >
    <Box
      component='img'
      src={img}
      sx={{
        width: 250,
        pb: 2,
      }}
    />
    <Typography variant='h6' fontWeight={400} sx={{ pb: 2 }}>{title}</Typography>
    <Box
      display='flex'
      flexDirection='column'
      gap={1}
      width='100%'
      pb={2}
    >
      {
        specs.map((spec) => (
          <Chip key={spec} label={spec} color='primary' />
        ))
      }
    </Box>
    <Box sx={{
      width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2,
    }}
    >
      <Box display='flex' gap={1}>
        <Button variant='contained' color='secondary'>
          <RemoveIcon />
        </Button>
        <TextField
          color='secondary'
          type='number'
          size='small'
          fullWidth
        />
        <Button variant='contained' color='secondary'>
          <AddIcon />
        </Button>
      </Box>
      <Button variant='contained' color='secondary' fullWidth>More</Button>
    </Box>
  </Paper>
);

export default RentalCard;

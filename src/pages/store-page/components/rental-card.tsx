import React from 'react';
import {
  Paper, Typography, Box, Button, Chip, TextField, OutlinedInput,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { RentalItem } from '../types';
import AmountField from '../../../components/amount-field/amount-field';

const RentalCard: React.FC<RentalItem> = ({
  id,
  title,
  rentalCategoryId,
  rentalCategory,
  specs,
  img,
}) => {
  const onInc = () => console.log('pressed "+"');
  const onDec = () => console.log('pressed "-"');

  return (
    <Paper sx={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', p: 2, width: 300, height: 520,
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
      <Box>
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
            <AmountField amount={0} onInc={onInc} onDec={onDec} />
            <Button variant='contained' color='secondary'>
              <ShoppingCartIcon />
            </Button>
          </Box>
          <Button variant='contained' color='secondary' fullWidth>More info</Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default RentalCard;

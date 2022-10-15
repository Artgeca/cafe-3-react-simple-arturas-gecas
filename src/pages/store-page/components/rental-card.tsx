import React from 'react';
import {
  Paper, Typography, Box, Button, Chip,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { RentalItem } from '../types';
import AmountField from '../../../components/amount-field/amount-field';
import Image from '../../../components/image';
import { decrement, increment } from '../../../store/cart';

const RentalCard: React.FC<RentalItem> = ({
  id,
  title,
  specs,
  img,
  moreInfoBtn,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onInc = () => dispatch(increment());
  const onDec = () => dispatch(decrement());

  return (
    <Paper sx={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', p: 2, width: { xs: 300, sm: 330 }, height: 520,
    }}
    >
      <Image src={img} width={250} />
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
          <Box display={moreInfoBtn ? 'block' : 'none'} width='100%'>
            <Button
              variant='contained'
              color='secondary'
              fullWidth
              onClick={() => navigate(`./${id}`)}
            >
              More info
            </Button>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default RentalCard;

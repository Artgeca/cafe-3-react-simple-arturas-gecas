import React, { useState } from 'react';
import {
  Paper, Typography, Box, Button, Chip,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RentalItem } from '../types';
import AmountField from '../../../components/amount-field/amount-field';
import Image from '../../../components/image';
import { addItem } from '../../../store/cart';
import { RootState } from '../../../store/configure-store';

const RentalCard: React.FC<RentalItem> = ({
  id,
  title,
  specs,
  img,
  moreInfoBtn,
}) => {
  const initCount = useSelector(
    (state: RootState) => state.cart.items.find((x) => x.id === id)?.count ?? 0,
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [count, setCount] = useState(initCount);

  const onInc = () => setCount(count + 1);
  const onDec = () => setCount(count - 1);

  const handleAddItemToCart = () => dispatch(addItem({ id, count }));

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
            <AmountField amount={count} onInc={onInc} onDec={onDec} />
            <Button
              variant='contained'
              color='secondary'
              disabled={count < 1}
              onClick={handleAddItemToCart}
            >
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

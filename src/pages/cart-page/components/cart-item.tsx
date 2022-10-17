import {
  Paper, Typography, Button, Box,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import * as Components from '../../../components';
import AmountField from '../../../components/amount-field/amount-field';
import { RootState } from '../../../store';
import { itemAdded } from '../../../store/cart';

interface Props {
  id: string,
  img: string,
  title: string,
}

const CartItem: React.FC<Props> = ({
  id, img, title,
}) => {
  const initCount = useSelector(
    (state: RootState) => state.cart.items.find((x) => x.id === id)?.count ?? 0,
  );

  const dispatch = useDispatch();
  const [count, setCount] = useState(initCount);

  const onInc = () => {
    setCount(count + 1);
    dispatch(itemAdded({ id, count: count + 1 }));
  };
  const onDec = () => {
    if (count > 1) {
      setCount(count - 1);
      dispatch(itemAdded({ id, count: count - 1 }));
    }
  };

  return (
    <Paper
      elevation={3}
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 2,
        width: '100%',
        p: 2,
      }}
    >
      <Components.Image src={img} width={150} />
      <Typography>{title}</Typography>
      <Box width={200}>
        <AmountField amount={count} onInc={onInc} onDec={onDec} />
      </Box>
      <Button
        variant='contained'
        color='secondary'
      >
        <DeleteOutlineIcon color='warning' />
      </Button>
    </Paper>
  );
};

export default CartItem;

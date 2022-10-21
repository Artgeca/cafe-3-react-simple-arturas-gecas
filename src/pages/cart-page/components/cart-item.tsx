import {
  Paper, Typography, Button, Box, Grid,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import * as Components from '../../../components';
import AmountField from '../../../components/amount-field/amount-field';
import { RootState } from '../../../store';
import { itemAdded, itemRemoved } from '../../../store/cart';

interface Props {
  id: string,
  img: string,
  title: string,
}

const CartItem: React.FC<Props> = ({
  id, img, title,
}) => {
  const initCount = useSelector(
    (state: RootState) => state.entities.cart.items.find((x) => x.id === id)?.count ?? 0,
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

  const onDelete = () => {
    dispatch(itemRemoved(id));
  };

  return (
    <Paper
      elevation={3}
      sx={{
        display: 'flex',
        p: 2,
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          justifyContent: { xs: 'center', sm: 'space-between' },
          alignItems: 'center',
        }}
      >
        <Grid
          item
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'center',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <Components.Image src={img} width={150} />
          <Typography>{title}</Typography>
        </Grid>
        <Grid
          item
          display='flex'
          justifyContent='center'
          alignItems='center'
          gap={1}
        >
          <Box width={200}>
            <AmountField amount={count} onInc={onInc} onDec={onDec} />
          </Box>
          <Button
            variant='contained'
            color='secondary'
            onClick={onDelete}
          >
            <DeleteOutlineIcon color='warning' />
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CartItem;

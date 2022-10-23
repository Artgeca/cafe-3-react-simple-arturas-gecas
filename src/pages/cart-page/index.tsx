import {
  Paper, Typography, IconButton, Box, Button,
} from '@mui/material';
import {
  useContext, useEffect, useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import * as Page from '../../components';
import { RootState } from '../../store/index';
import RentalsService from '../../services/rentals-service';
import { FormatedItem, RentalItem } from '../store-page/types';
import * as Components from './components';
import { AlertContext } from '../../contexts/alert-context';
import { itemRemoved } from '../../store/cart';
import noImg from '../../assets/images/no-image.jpg';

const CartPage = () => {
  const dispatch = useDispatch();
  const { setAlert } = useContext(AlertContext);
  const [formatedItems, setFormatedItems] = useState<FormatedItem[]>([]);
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const navigate = useNavigate();

  const findItemCount = (id: string) => cartItems.find((x) => x.id === id)?.count;

  const emptyOrder = formatedItems.length === 0;

  const removeAllItemsFromCart = () => {
    formatedItems.forEach((item) => dispatch(itemRemoved(item.id)));
  };

  const handleSubmit = () => {
    setAlert({
      open: true, type: 'success', message: 'Your request successfuly delivered',
    });
    removeAllItemsFromCart();
    navigate('../');
    console.log('Order info: ');
    console.log(formatedItems);
  };

  useEffect(() => {
    (
      async () => {
        const fetchedData: RentalItem[] = await RentalsService.fetchAll();
        const cartItemIds = cartItems.map((item) => item.id);
        const filteredData = fetchedData.filter((item) => cartItemIds.includes(item.id));
        const formatedData = filteredData.map((item) => ({
          ...item,
          count: findItemCount(item.id),
        }));
        setFormatedItems([...formatedData]);
      }
    )();
  }, [formatedItems]);

  return (
    <Page.Content sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 3,
      pt: { xs: 10, sm: 12 },
      px: { xs: 3, md: 5 },
      pb: 5,
    }}
    >
      <Box
        display='flex'
        alignItems='center'
        justifyContent='space-between'
        gap={3}
        width='100%'
        maxWidth={1440}
        px={2}
      >
        <Box
          display='flex'
          alignItems='center'
          sx={(theme) => ({ color: theme.palette.common.white })}
          gap={{ xs: 1, md: 3 }}
        >
          <IconButton color='inherit' onClick={() => navigate('../')}>
            <ArrowBackIcon fontSize='large' />
          </IconButton>
          <Typography
            display={{ xs: 'none', sm: 'block' }}
            variant='h6'
            fontWeight={100}
            fontSize={{ xs: 24, md: 30 }}
            color='inherit'
          >
            Back to store
          </Typography>
        </Box>
        <Page.Title title='Your order' />
      </Box>
      {
        emptyOrder ? (
          <Typography
            variant='h3'
            fontWeight={100}
            fontSize={{ xs: 30, sm: 48 }}
            color='common.white'
            paddingTop={3}
          >
            Your order is empty
          </Typography>
        ) : (
          <Paper sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
            maxWidth: 1440,
            p: 3,
          }}
          >
            {
              formatedItems.map(({
                id, img, title,
              }) => (
                <Components.CartItem
                  key={id}
                  id={id}
                  img={img || noImg}
                  title={title}
                />
              ))
            }
            <Button
              disabled={emptyOrder}
              variant='contained'
              color='secondary'
              fullWidth
              onClick={handleSubmit}
            >
              Confirm Request
            </Button>
          </Paper>
        )
      }
    </Page.Content>
  );
};

export default CartPage;

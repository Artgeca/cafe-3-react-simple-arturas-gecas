import { Paper } from '@mui/material';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import * as Page from '../../components';
import { RootState } from '../../store/index';
import RentalsService from '../../services/rentals-service';
import { FormatedItem, RentalItem } from '../store-page/types';
import * as Components from './components';

const CartPage = () => {
  const [formatedItems, setFormatedItems] = useState<FormatedItem[]>([]);
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const findItemCount = (id: string) => cartItems.find((x) => x.id === id)?.count;

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
  }, []);

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
      <Page.Title title='Your Order' />
      <Paper sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
        maxWidth: 1440,
        p: 5,
      }}
      >
        {
          formatedItems.map(({
            id, img, title,
          }) => (
            <Components.CartItem
              key={id}
              id={id}
              img={img}
              title={title}
            />
          ))
        }
      </Paper>
    </Page.Content>
  );
};

export default CartPage;

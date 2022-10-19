import { Grid, Paper } from '@mui/material';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import * as Page from '../../components';
import RentalsService from '../../services/rentals-service';
import { RentalItem } from './types';
import * as Components from './components';

const StorePage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [rentals, setRentals] = useState<RentalItem[]>([]);
  const [filteredRentals, setFilteredRentals] = useState<RentalItem[]>([]);

  const handleOnChange = (
    _e: React.MouseEvent<HTMLElement>,
    newFilter: string,
  ) => {
    if (newFilter) {
      searchParams.set('categoryType', newFilter);
      const filteredData = rentals.filter(
        (rental) => (rental.rentalCategory.type === newFilter),
      );
      setFilteredRentals([...filteredData]);
    } else {
      searchParams.delete('categoryType');
      setFilteredRentals([...rentals]);
    }
    setSearchParams(searchParams);
  };

  const mountComponent = async () => {
    const rentalsData: RentalItem[] = await RentalsService.fetchAll();
    setRentals([...rentalsData]);

    const categoryFilter = searchParams.get('categoryType');
    if (categoryFilter) {
      const filteredData = rentalsData.filter(
        (rental) => (rental.rentalCategory.type === categoryFilter),
      );
      setFilteredRentals([...filteredData]);
    } else {
      setFilteredRentals([...rentalsData]);
    }
  };

  useEffect(() => {
    mountComponent();
  }, []);

  return (
    <Page.Content sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
      pt: { xs: 10, sm: 12 },
      px: { xs: 3, md: 5 },
      pb: 5,
      gap: 3,
    }}
    >
      <Page.Title title='Rent equipment' />
      <Paper sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        maxWidth: 1440,
      }}
      >
        <Components.CategoryFilter searchParams={searchParams} handleOnChange={handleOnChange} />
      </Paper>
      <Grid
        container
        justifyContent='center'
        gap={3}
        maxWidth={1440}
        bgcolor='secondary.main'
        sx={{ p: { xs: 2, sm: 3 }, borderRadius: 1 }}
      >
        {
          filteredRentals.map(({
            id, title, rentalCategoryId, rentalCategory, specs, img,
          }) => (
            <Grid
              item
              key={id}
            >
              <Components.RentalCard
                id={id}
                title={title}
                rentalCategoryId={rentalCategoryId}
                rentalCategory={rentalCategory}
                specs={specs}
                img={img}
                moreInfoBtn
              />
            </Grid>
          ))
        }
      </Grid>
      <Page.CartButton to='./cart' />
    </Page.Content>
  );
};

export default StorePage;

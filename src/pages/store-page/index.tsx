import { Box } from '@mui/material';
import { useState, useEffect } from 'react';
import * as Page from '../../components';
import RentalsService from '../../services/rentals-service';
import { RentalCard } from './components';

const StorePage: React.FC = () => {
  const [rentals, setRentals] = useState<any[]>([]);

  console.log(rentals);

  const handleFetchRentals = async () => {
    const rentalsData = await RentalsService.fetchAll();
    setRentals([rentalsData[0]]);
  };

  useEffect(() => {
    handleFetchRentals();
  }, []);

  return (
    <Page.Content sx={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', pt: { xs: 10, sm: 12 }, px: { xs: 3, md: 5 }, pb: 5, gap: 3,
    }}
    >
      <Page.Title title='Rent equipment' />
      <Box
        display='flex'
        justifyContent='center'
        flexWrap='wrap'
        gap={2}
        maxWidth={1440}
      >
        {
          rentals.map(({
            id, title, rentalCategoryId, rentalCategory, specs, img,
          }) => (
            <RentalCard
              key={id}
              id={id}
              title={title}
              rentalCategoryId={rentalCategoryId}
              rentalCategory={rentalCategory}
              specs={specs}
              img={img}
            />
          ))
        }
      </Box>
    </Page.Content>
  );
};

export default StorePage;

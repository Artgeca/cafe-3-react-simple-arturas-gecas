import { Box, Paper, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import * as Page from '../../components';
import RentalsService from '../../services/rentals-service';

const StorePage: React.FC = () => {
  const [rentals, setRentals] = useState<any[]>([]);

  console.log(rentals);

  const handleFetchRentals = async () => {
    const rentalsData = await RentalsService.fetchAll();
    setRentals([...rentalsData]);
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
      >
        {
          rentals.map((item) => (
            <Paper key={item.id} sx={{ p: 3 }}>
              <Typography>{item.title}</Typography>
              <Box component='img' src={item.img} />
            </Paper>
          ))
        }
      </Box>
    </Page.Content>
  );
};

export default StorePage;

import { Box, Paper, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import * as Page from '../../components';

const StorePage: React.FC = () => {
  const [rentals, setRentals] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('http://localhost:8000/rentals?_expand=rentalCategory');
        const data = await response.json();
        setRentals([...data]);
      } catch (error) {
        console.dir(error);
      }
    })();
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

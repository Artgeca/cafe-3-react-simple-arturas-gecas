import {
  Grid, Paper, ToggleButtonGroup, ToggleButton, Accordion, AccordionSummary, Typography, Box,
} from '@mui/material';
import { useState, useEffect } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import * as Page from '../../components';
import RentalsService from '../../services/rentals-service';
import { RentalCard } from './components';
import { RentalItem } from './types';
import * as Components from './components';

const StorePage: React.FC = () => {
  const [rentals, setRentals] = useState<RentalItem[]>([]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleFetchRentals = async () => {
    const rentalsData = await RentalsService.fetchAll();
    setRentals([...rentalsData]);
  };

  useEffect(() => {
    handleFetchRentals();
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
      <Page.Title title='Heavy duty equipment' />
      <Paper sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'center',
        alignItems: 'center',
        width: { xs: '100%', sm: '100%' },
        maxWidth: 1440,
      }}
      >
        <Accordion sx={{ width: '100%', bgcolor: 'secondary.main' }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon color='primary' />}>
            <Typography color='primary.main'>Category filter</Typography>
          </AccordionSummary>
          <ToggleButtonGroup
            fullWidth
            color='secondary'
            orientation='vertical'
            // value={view}
            exclusive
          >
            <ToggleButton value='list' sx={{ color: 'primary.main' }}>
              Backhoe Loaders
            </ToggleButton>
            <ToggleButton value='list' sx={{ color: 'primary.main' }}>
              Skid-Steer Loaders
            </ToggleButton>
            <ToggleButton value='list' sx={{ color: 'primary.main' }}>
              Mini Excavators
            </ToggleButton>
            <ToggleButton value='list' sx={{ color: 'primary.main' }}>
              Excavators
            </ToggleButton>
            <ToggleButton value='list' sx={{ color: 'primary.main' }}>
              Dozers
            </ToggleButton>
            <ToggleButton value='list' sx={{ color: 'primary.main' }}>
              Wheel Loders
            </ToggleButton>
            <ToggleButton value='list' sx={{ color: 'primary.main' }}>
              Generators
            </ToggleButton>
          </ToggleButtonGroup>
        </Accordion>
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
          rentals.map(({
            id, title, rentalCategoryId, rentalCategory, specs, img,
          }) => (
            <Grid
              item
              key={id}
            >
              <RentalCard
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
    </Page.Content>
  );
};

export default StorePage;

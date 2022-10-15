import {
  Grid, Paper, ToggleButtonGroup, ToggleButton, Accordion, AccordionSummary, Typography,
} from '@mui/material';
import { useState, useEffect } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useSearchParams } from 'react-router-dom';
import * as Page from '../../components';
import RentalsService from '../../services/rentals-service';
import { RentalItem } from './types';
import * as Components from './components';

const StorePage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [rentals, setRentals] = useState<RentalItem[]>([]);
  const [filteredRentals, setFilteredRentals] = useState<RentalItem[]>([]);

  const handleFetchRentals = async () => {
    const rentalsData = await RentalsService.fetchAll();
    setRentals([...rentalsData]);
    setFilteredRentals([...rentalsData]);
  };

  const handleOnChange = (
    _e: React.MouseEvent<HTMLElement>,
    newFilter: string,
  ) => {
    if (newFilter) {
      searchParams.set('categoryType', newFilter);
      const data = rentals.filter(
        (rental) => (rental.rentalCategory.type === newFilter ? rental : null),
      );
      setFilteredRentals([...data]);
    } else {
      searchParams.delete('categoryType');
      setFilteredRentals([...rentals]);
    }
    setSearchParams(searchParams);
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
        <Accordion sx={{ width: '100%', bgcolor: 'secondary.main' }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon color='primary' />}>
            <Typography color='primary.main'>Category</Typography>
          </AccordionSummary>
          <ToggleButtonGroup
            fullWidth
            color='secondary'
            orientation='vertical'
            value={searchParams.get('categoryType')}
            onChange={handleOnChange}
            exclusive
          >
            <ToggleButton value='1' sx={{ color: 'common.white', '&.Mui-selected': { color: 'primary.main' } }}>
              Backhoe Loader
            </ToggleButton>
            <ToggleButton value='2' sx={{ color: 'common.white', '&.Mui-selected': { color: 'primary.main' } }}>
              Skid-Steer Loader
            </ToggleButton>
            <ToggleButton value='3' sx={{ color: 'common.white', '&.Mui-selected': { color: 'primary.main' } }}>
              Mini Excavator
            </ToggleButton>
            <ToggleButton value='4' sx={{ color: 'common.white', '&.Mui-selected': { color: 'primary.main' } }}>
              Excavator
            </ToggleButton>
            <ToggleButton value='5' sx={{ color: 'common.white', '&.Mui-selected': { color: 'primary.main' } }}>
              Dozer
            </ToggleButton>
            <ToggleButton value='6' sx={{ color: 'common.white', '&.Mui-selected': { color: 'primary.main' } }}>
              Wheel Loder
            </ToggleButton>
            <ToggleButton value='7' sx={{ color: 'common.white', '&.Mui-selected': { color: 'primary.main' } }}>
              Generator
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
    </Page.Content>
  );
};

export default StorePage;

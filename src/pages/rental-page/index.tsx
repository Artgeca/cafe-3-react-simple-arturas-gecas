import {
  Paper, Box, IconButton, Typography,
} from '@mui/material';
import {
  useState, useEffect, useCallback, useMemo,
} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import * as Page from '../../components';
import RentalsService from '../../services/rentals-service';
import { RentalCard } from '../store-page/components';
import { RentalItem } from '../store-page/types';
import * as Rentals from './components';

const RentalPage: React.FC = () => {
  const [rental, setRental] = useState<RentalItem>();
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchRental = useCallback(
    async () => {
      if (id) {
        const rentalData = await RentalsService.fetchById(id);
        setRental(rentalData);
      }
    },
    [id],
  );

  const rentalDescription = useMemo(() => {
    let description;
    switch (rental?.rentalCategory.title) {
      case 'Backhoe Loader':
        description = <Rentals.BackhoeLoaderDescription />;
        break;
      case 'Skid-Steer Loader':
        description = <Rentals.SkidSteerLoaderDescription />;
        break;
      case 'Mini Excavator':
        description = <Rentals.MiniExcavatorDescription />;
        break;
      case 'Excavator':
        description = <Rentals.ExcavatorDescription />;
        break;
      case 'Dozer':
        description = <Rentals.DozerDescription />;
        break;
      case 'Wheel Loder':
        description = <Rentals.WheelLoaderDescription />;
        break;
      case 'Generator':
        description = <Rentals.GeneratorDescription />;
        break;

      default:
        break;
    }

    return description;
  }, [rental]);

  useEffect(() => {
    fetchRental();
  }, []);

  return (
    <Page.Content sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      pt: { xs: 10, sm: 12 },
      px: { xs: 3, md: 5 },
      pb: 5,
      gap: 3,
    }}
    >
      {
        rental && (
          <>
            <Box
              display='flex'
              flexDirection={{ xs: 'column', md: 'row' }}
              alignItems='center'
              justifyContent='space-between'
              gap={3}
              width='100%'
              maxWidth={1440}
              px={2}
            >
              <Box
                display={{ xs: 'none', md: 'flex' }}
                alignItems='center'
                sx={(theme) => ({ color: theme.palette.common.white })}
                gap={1}
              >
                <IconButton color='inherit' onClick={() => navigate('../')}>
                  <ArrowBackIcon fontSize='large' />
                </IconButton>
                <Typography variant='h6' fontWeight={100} color='inherit'>Back to Store</Typography>
              </Box>
              <Page.Title title={rental.title} />
            </Box>
            <Paper sx={{
              p: 3, width: '100%', maxWidth: 1440, height: '100%',
            }}
            >
              <Box
                display='flex'
                flexDirection={{ xs: 'column', md: 'row' }}
                alignItems='center'
                gap={3}
              >
                <RentalCard
                  id={rental.id}
                  title={rental.title}
                  rentalCategoryId={rental.rentalCategoryId}
                  rentalCategory={rental.rentalCategory}
                  specs={rental.specs}
                  img={rental.img}
                  moreInfoBtn={false}
                />
                {rentalDescription}
              </Box>
            </Paper>
          </>
        )
      }
    </Page.Content>
  );
};

export default RentalPage;

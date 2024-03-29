import React, { useState } from 'react';
import {
  Paper, Typography, Box, Button, Chip,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RentalItem } from '../types';
import AmountField from '../../../components/amount-field/amount-field';
import Image from '../../../components/image';
import { itemAdded, itemRemoved } from '../../../store/cart';
import { RootState } from '../../../store';
import AdminPanel from './admin-panel';
import useAdmin from '../../../hooks/use-admin';
import noImg from '../../../assets/images/no-image.jpg';
import RentalsService from '../../../services/rentals-service';

const RentalCard: React.FC<RentalItem> = ({
  id,
  title,
  specs,
  img,
  moreInfoBtn,
  setDeleteClicked,
  setOpenEditModal,
  setEditRentalId,
}) => {
  const initCount = useSelector(
    (state: RootState) => state.cart.items.find((x) => x.id === id)?.count ?? 0,
  );
  const isAdmin = useAdmin();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [count, setCount] = useState(initCount);

  const onInc = () => setCount(count + 1);
  const onDec = () => (count <= 0 ? setCount(0) : setCount(count - 1));

  const handleAddItemToCart = () => dispatch(itemAdded({ id, count }));
  const handleDeleteItemFromCart = () => dispatch(itemRemoved(id));

  const hanldeClick = () => {
    if (count === 0 && count !== initCount) {
      handleDeleteItemFromCart();
    } else {
      handleAddItemToCart();
    }
  };

  const handleDelete = () => {
    RentalsService.remove(id);
    setDeleteClicked!(true);
  };

  const handleEditClick = () => {
    setEditRentalId!(id);
    setOpenEditModal!(true);
  };

  return (
    <Paper sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      p: 2,
      width: { xs: 300, sm: 330 },
      height: isAdmin ? 600 : 520,
    }}
    >
      <Image src={img || noImg} width={250} />
      <Box>
        <Typography variant='h6' fontWeight={400} sx={{ pb: 2 }}>{title}</Typography>
        <Box
          display='flex'
          flexDirection='column'
          gap={1}
          width='100%'
          pb={2}
        >
          {
            specs
            && specs.map((spec) => (
              <Chip key={spec} label={spec} color='primary' />
            ))
          }
        </Box>
        <Box sx={{
          width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1,
        }}
        >
          <Box display='flex' gap={1}>
            <AmountField amount={count} onInc={onInc} onDec={onDec} />
            <Button
              variant='contained'
              color='secondary'
              disabled={count === initCount}
              onClick={hanldeClick}
            >
              {count === 0 && count !== initCount ? (
                <DeleteOutlineIcon color='warning' />
              ) : (
                <ShoppingCartIcon />
              )}
            </Button>
          </Box>
          <Box display={moreInfoBtn ? 'block' : 'none'} width='100%'>
            <Button
              variant='contained'
              color='secondary'
              fullWidth
              onClick={() => navigate(`./${id}`)}
            >
              More info
            </Button>
          </Box>
          {
            isAdmin && moreInfoBtn && (
              <AdminPanel handleDelete={handleDelete} handleEditClick={handleEditClick} />
            )
          }
        </Box>
      </Box>
    </Paper>
  );
};

export default RentalCard;

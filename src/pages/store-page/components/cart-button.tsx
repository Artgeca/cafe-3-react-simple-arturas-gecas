import { Fab, Badge } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';

const CartButton: React.FC = () => {
  const navigate = useNavigate();
  const cartCount = useSelector((state: RootState) => state.cart.count);

  return (
    <Fab
      size='large'
      onClick={() => navigate('./cart')}
      sx={{
        position: 'sticky',
        bottom: { xs: 20, sm: 40 },
        left: '90%',
        bgcolor: 'common.black',
        color: 'common.white',
        '&:hover': { bgcolor: 'grey.900' },
      }}
    >
      <Badge
        badgeContent={cartCount}
        sx={{ '& .MuiBadge-badge': { backgroundColor: 'primary.main', color: 'common.black' } }}
      >
        <ShoppingCartOutlinedIcon />
      </Badge>
    </Fab>
  );
};

export default CartButton;

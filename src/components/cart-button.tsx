import { Fab, Badge } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

interface Props {
  to: string
}

const CartButton: React.FC<Props> = ({ to }) => {
  const navigate = useNavigate();
  const cartCount = useSelector(
    (state: RootState) => state.cart.items.reduce((sum, item) => sum + item.count, 0),
  );

  return (
    <Fab
      size='large'
      onClick={() => navigate(to)}
      sx={{
        position: 'sticky',
        bottom: { xs: 20, sm: 20 },
        left: { xs: '75%', sm: '100%' },
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

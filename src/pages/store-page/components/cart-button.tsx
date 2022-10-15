import { Fab, Badge } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useNavigate } from 'react-router-dom';

const CartButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Fab
      size='large'
      onClick={() => navigate('./cart')}
      sx={{
        position: 'sticky',
        bottom: 40,
        left: '100%',
        bgcolor: 'common.black',
        color: 'common.white',
        '&:hover': { bgcolor: 'grey.900' },
      }}
    >
      <Badge
        badgeContent={2}
        sx={{ '& .MuiBadge-badge': { backgroundColor: 'primary.main', color: 'common.black' } }}
      >
        <ShoppingCartOutlinedIcon />
      </Badge>
    </Fab>
  );
};

export default CartButton;

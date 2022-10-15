import Fab from '@mui/material/Fab';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const CartButton: React.FC = () => (
  <Fab
    size='large'
    sx={{
      position: 'sticky',
      bottom: 40,
      left: '90%',
      bgcolor: 'common.black',
      color: 'primary.main',
      '&:hover': { bgcolor: 'grey.900' },
    }}
  >
    <ShoppingCartOutlinedIcon />
  </Fab>
);

export default CartButton;

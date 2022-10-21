import { useDispatch } from 'react-redux';
import { userAdded } from '../../store/auth';
import { itemAdded, CartItem } from '../../store/cart';

interface Props {
  children: JSX.Element
}

const LoadApp: React.FC<Props> = ({ children }) => {
  const dispatch = useDispatch();

  const user = JSON.parse(localStorage.getItem('user')!);
  if (user) dispatch(userAdded(user));

  const cartItems = JSON.parse(localStorage.getItem('cart')!);
  if (cartItems) {
    cartItems.forEach((item: CartItem) => dispatch(itemAdded(item)));
  }

  return (
    children
  );
};

export default LoadApp;

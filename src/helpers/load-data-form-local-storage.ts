import { useDispatch } from 'react-redux';
import { itemAdded, CartItem } from '../store/cart';

interface Props {
  children: JSX.Element
}

const LoadDataFromLocalStorage: React.FC<Props> = ({ children }) => {
  const dispatch = useDispatch();

  const items = JSON.parse(localStorage.getItem('cart')!);
  if (items) {
    items.forEach((item: CartItem) => dispatch(itemAdded(item)));
  }

  return children;
};

export default LoadDataFromLocalStorage;

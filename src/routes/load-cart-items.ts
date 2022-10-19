import { useDispatch } from 'react-redux';
import { CartItem, itemAdded } from '../store/cart';

interface Props {
  children: JSX.Element
}

const LoadCartItems: React.FC<Props> = ({ children }) => {
  const dispatch = useDispatch();

  const getItemsFromLocalStorage = () => {
    const itemsFromLocalStorage = JSON.parse(localStorage.getItem('cart')!);
    if (itemsFromLocalStorage) {
      itemsFromLocalStorage.forEach((item: CartItem) => dispatch(itemAdded(item)));
    } else {
      localStorage.setItem('cart', '[]');
    }
  };

  getItemsFromLocalStorage();

  return children;
};

export default LoadCartItems;

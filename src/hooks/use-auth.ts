import { useSelector } from 'react-redux';
import { RootState } from '../store/index';

const useAuth = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  return Boolean(user);
};

export default useAuth;

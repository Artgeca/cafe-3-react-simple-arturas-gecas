import { useSelector } from 'react-redux';
import { RootState } from '../store/index';

const useAdmin = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  if (user) {
    return Boolean(user.role === 'admin');
  }

  return false;
};

export default useAdmin;

import { Outlet } from 'react-router-dom';
import { Content } from '../components';

const AuthLayout: React.FC = () => (
  <Content
    display='flex'
    justifyContent='center'
    alignItems='center'
    height='calc(100vh - 64px)'
    color='common.white'
  >
    <Outlet />
  </Content>
);

export default AuthLayout;

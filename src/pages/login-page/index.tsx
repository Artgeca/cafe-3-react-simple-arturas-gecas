import { Typography } from '@mui/material';
import { Content } from '../../components';

const LoginPage = () => (
  <Content
    display='flex'
    justifyContent='center'
    alignItems='center'
    height='calc(100vh - 64px)'
    color='common.white'
  >
    <Typography variant='h4' fontWeight={100}>LoginPage</Typography>
  </Content>
);

export default LoginPage;

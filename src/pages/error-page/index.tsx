import { Typography } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import * as Page from '../../components';

const ErrorPage = () => (
  <Page.Content
    display='flex'
    justifyContent='center'
    alignItems='center'
    sx={{ color: 'warning.main' }}
  >
    <ErrorOutlineIcon fontSize='large' />
    <Typography
      variant='h4'
      component='p'
      mx={1}
      sx={{ fontSize: { xs: 28, md: 34 } }}
    >
      Page Not Found
    </Typography>
    <ErrorOutlineIcon fontSize='large' />
  </Page.Content>
);

export default ErrorPage;

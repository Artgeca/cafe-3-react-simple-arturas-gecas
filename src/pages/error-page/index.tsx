import { Box, Typography } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const ErrorPage = () => {
  return (
    <Box
      mt={15}
      display='flex'
      justifyContent='center'
      alignItems='center'
      sx={{ color: 'error.main' }}
    >
      <ErrorOutlineIcon fontSize='large' />
      <Typography variant='h4' component='p' mx={1}>
        Page Not Found
      </Typography>
      <ErrorOutlineIcon fontSize='large' />
    </Box>
  );
};

export default ErrorPage;

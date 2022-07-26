import { Box, styled } from '@mui/material';

const Content = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  width: '100vw',
  backgroundColor: theme.palette.secondary.light,
}));

export default Content;

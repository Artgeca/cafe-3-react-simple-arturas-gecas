import { Box, styled } from '@mui/material';

const Content = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  width: '100vw',
  paddingTop: 100,
  backgroundColor: theme.palette.secondary.light,
}));

export default Content;

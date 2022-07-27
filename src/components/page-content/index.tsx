import { Box, styled } from '@mui/material';

const Content = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  backgroundColor: theme.palette.secondary.light,
}));

export default Content;

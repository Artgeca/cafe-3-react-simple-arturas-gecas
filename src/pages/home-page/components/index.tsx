import { Box, styled } from '@mui/material';
import img1 from '../../../assets/images/home1.jpg';
import img2 from '../../../assets/images/home2.jpg';

export { default as HomeCard } from './home-card';

export const Container = styled(Box)(() => ({
  position: 'relative',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
}));

export const Background = styled(Box)(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundImage: `url(${img1})`,
  backgroundPosition: 'center top',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  zIndex: 1,

  [theme.breakpoints.up('md')]: {
    backgroundImage: `url(${img2})`,
  },
}));

export const BackgroundOverlay = styled(Box)(() => ({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: '#000',
  opacity: 0.8,
  zIndex: 2,
}));

export const Content = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: 3,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  padding: theme.spacing(5),
  paddingTop: theme.spacing(12),
  marginBottom: theme.spacing(10),
  color: theme.palette.common.white,
  overflow: 'auto',
}));

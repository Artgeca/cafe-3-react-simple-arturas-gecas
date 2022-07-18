import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography
} from '@mui/material';
import StraightenIcon from '@mui/icons-material/Straighten';
import * as Nav from './components';

const pages = [
  { title: 'Services', to: '/services' },
  { title: 'Projects', to: '/projects' },
  { title: 'Galery', to: '/galery' },
  { title: 'About', to: '/about' },
  { title: 'Contact', to: '/contact' }
];

const Navbar = () => {
  return (
    <AppBar sx={{ opacity: 0.9, bgcolor: '#2C3639', color: '#DCD7C9' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <IconButton color='inherit'>
            <StraightenIcon />
          </IconButton>
          <Typography variant='h6'>EngServices</Typography>
        </Box>
        <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
          {pages.map((page) => (
            <Button key={page.title} color='inherit'>
              {page.title}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

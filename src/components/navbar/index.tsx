import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import StraightenIcon from '@mui/icons-material/Straighten';
import MenuIcon from '@mui/icons-material/Menu';
import * as Nav from './components';

const pages = [
  { title: 'Services', to: '/services' },
  { title: 'Projects', to: '/projects' },
  { title: 'Galery', to: '/galery' },
  { title: 'About', to: '/about' },
  { title: 'Contacts', to: '/contacts' }
];

const Navbar = () => {
  return (
    <AppBar sx={{ bgcolor: '#2C3639' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box
          sx={(theme) => ({
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: theme.palette.grey[200]
          })}
        >
          <Nav.HomeLink color='inherit' to='/'>
            <StraightenIcon />
            <Typography variant='h6' ml={1}>
              EngServices
            </Typography>
          </Nav.HomeLink>
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignSelf: 'stretch' }}>
          {pages.map((page) => (
            <Nav.Link key={page.title} to={page.to} color='inherit'>
              {page.title}
            </Nav.Link>
          ))}
        </Box>
        <IconButton
          sx={(theme) => ({
            display: { md: 'none' },
            color: theme.palette.grey[200]
          })}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

import { useState } from 'react';
import {
  AppBar, Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton,
  ListItemText, Toolbar, Typography,
} from '@mui/material';
import StraightenIcon from '@mui/icons-material/Straighten';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import * as Nav from './components';

const pages = [
  { title: 'Services', to: '/services' },
  { title: 'Projects', to: '/projects' },
  { title: 'Galery', to: '/galery' },
  { title: 'About', to: '/about' },
  { title: 'Contacts', to: '/contacts' },
  { title: 'Store', to: '/store' },
];

const authPages = [
  { title: 'Sign up', to: '/auth/signup' },
  { title: 'Log in', to: '/auth/login' },
];

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const handleDrawerNavigation = (to: string) => {
    navigate(to);
    setDrawerOpen(false);
  };

  return (
    <AppBar color='secondary'>
      <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
        <Box
          sx={(theme) => ({
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: theme.palette.grey[200],
          })}
        >
          <Nav.HomeLink color='inherit' to='/'>
            <StraightenIcon />
            <Typography
              variant='h6'
              ml={1}
              color='primary'
              fontWeight={100}
            >
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
          <Divider
            variant='middle'
            orientation='vertical'
            flexItem
            sx={{ bgcolor: 'grey.500', my: 2 }}
          />
          {
            authPages.map((page) => (
              <Nav.Link key={page.title} to={page.to} color='inherit'>
                {page.title}
              </Nav.Link>
            ))
          }
        </Box>
        <IconButton
          sx={(theme) => ({
            display: { md: 'none' },
            color: theme.palette.grey[200],
            mr: 2,
          })}
          onClick={() => setDrawerOpen(true)}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          anchor='right'
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          sx={{ display: { md: 'none' } }}
          PaperProps={{ sx: { bgcolor: 'primary.light' } }}
        >
          <List sx={{
            py: 3, display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between',
          }}
          >
            <Box>
              {
                pages.map((page) => (
                  <ListItem disablePadding key={page.title}>
                    <ListItemButton sx={{ px: 5 }} onClick={() => handleDrawerNavigation(page.to)}>
                      <ListItemText primary={page.title} />
                    </ListItemButton>
                  </ListItem>
                ))
              }
            </Box>
            <Box>
              <Divider variant='middle' sx={{ my: 2 }} />
              {
                authPages.map((page) => (
                  <ListItem disablePadding key={page.title}>
                    <ListItemButton sx={{ px: 5 }} onClick={() => handleDrawerNavigation(page.to)}>
                      <ListItemText primary={page.title} />
                    </ListItemButton>
                  </ListItem>
                ))
              }
            </Box>
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

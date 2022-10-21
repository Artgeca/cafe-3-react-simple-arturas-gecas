import { useState } from 'react';
import {
  AppBar, Box, Divider, SwipeableDrawer, IconButton, List, ListItem, ListItemButton,
  ListItemText, Toolbar, Typography,
} from '@mui/material';
import StraightenIcon from '@mui/icons-material/Straighten';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as Nav from './components';
import { RootState } from '../../store';
import { userRemoved } from '../../store/auth';

const pages = [
  { title: 'Services', to: '/services' },
  { title: 'Projects', to: '/projects' },
  { title: 'Galery', to: '/galery' },
  { title: 'Contacts', to: '/contacts' },
  { title: 'Store', to: '/store' },
];

const authPages = [
  { title: 'Sign up', to: '/auth/signup' },
  { title: 'Log in', to: '/auth/login' },
];

const Navbar = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const handleDrawerNavigation = (to: string) => {
    navigate(to);
    setDrawerOpen(false);
  };

  const handleLogOut = () => {
    dispatch(userRemoved());
  };

  return (
    <AppBar color='secondary'>
      <Toolbar disableGutters sx={{ justifyContent: 'space-between', px: { xs: 0, sm: 3 } }}>
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
            user ? (
              <Nav.LogOut to='#' onClick={handleLogOut}>
                <LogoutIcon />
              </Nav.LogOut>
            ) : (
              authPages.map((page) => (
                <Nav.Link key={page.title} to={page.to} color='inherit'>
                  {page.title}
                </Nav.Link>
              ))
            )
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
        <SwipeableDrawer
          anchor='right'
          open={drawerOpen}
          onOpen={() => setDrawerOpen(true)}
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
                user ? (
                  <ListItem disablePadding>
                    <ListItemButton
                      sx={{ px: 5 }}
                      onClick={handleLogOut}
                    >
                      <ListItemText primary='Log out' />
                      <LogoutIcon color='action' sx={{ ml: 1 }} />
                    </ListItemButton>
                  </ListItem>
                ) : (
                  authPages.map((page) => (
                    <ListItem disablePadding key={page.title}>
                      <ListItemButton
                        sx={{ px: 5 }}
                        onClick={
                          () => handleDrawerNavigation(page.to)
                        }
                      >
                        <ListItemText primary={page.title} />
                      </ListItemButton>
                    </ListItem>
                  ))
                )
              }
            </Box>
          </List>
        </SwipeableDrawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

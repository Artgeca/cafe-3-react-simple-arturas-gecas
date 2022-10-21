import { styled } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(0, 2),
  textDecoration: 'none',
  color: theme.palette.grey[500],

  '&.active': {
    boxShadow: `inset 0 -4px 0 ${theme.palette.common.white}`,
    color: theme.palette.grey[200],
  },

  ':hover': {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.grey[200],
  },
}));

export const HomeLink = styled(NavLink)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(0, 2),
  textDecoration: 'none',
  color: theme.palette.grey[200],
}));

export const LogOut = styled(NavLink)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(0, 3),
  textDecoration: 'none',
  color: theme.palette.grey[500],

  ':hover': {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.grey[200],
  },
}));

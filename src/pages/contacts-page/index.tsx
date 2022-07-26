import { useState } from 'react';
import {
  Box,
  MenuItem, Paper, TextField, Typography,
} from '@mui/material';
import * as Page from '../../components';

const questionCategory = [
  {
    label: 'Design',
    value: 'design',
  },
  {
    label: 'Construction',
    value: 'construction',
  },
  {
    label: 'Products',
    value: 'products',
  },
  {
    label: 'Rentals',
    value: 'rentals',
  },
];

const ContactsPage = () => {
  const [value, setValue] = useState<string>('');

  return (
    <Page.Content sx={{
      display: 'flex', justifyContent: 'center',
    }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 5, mt: 12, mb: 5,
        }}
      >
        <Typography variant='h4'>Contact Us</Typography>
        <Box sx={{
          display: 'flex', flexDirection: 'column', gap: 3, mt: 3,
        }}
        >
          <TextField variant='standard' label='Name' placeholder='John' fullWidth InputLabelProps={{ shrink: true }} />
          <TextField variant='standard' label='Surname' placeholder='Doe' fullWidth InputLabelProps={{ shrink: true }} />
          <TextField variant='standard' label='Mail' placeholder='johndoe@mail.com' fullWidth InputLabelProps={{ shrink: true }} />
          <TextField variant='standard' label='Phone' placeholder='+908...' fullWidth InputLabelProps={{ shrink: true }} />
          <TextField variant='standard' select value={value} label='Question category' fullWidth color='primary' onChange={(e) => setValue(e.target.value)} sx={{ width: 250 }} InputLabelProps={{ style: { color: 'inherit' } }}>
            {
            questionCategory.map((item) => (
              <MenuItem key={item.value} value={item.value}>{item.label}</MenuItem>
            ))
            }
          </TextField>
          <TextField variant='standard' label='Name' placeholder='John' fullWidth InputLabelProps={{ shrink: true }} />
          <TextField variant='standard' label='Surname' placeholder='Doe' fullWidth InputLabelProps={{ shrink: true }} />
          <TextField variant='standard' label='Mail' placeholder='johndoe@mail.com' fullWidth InputLabelProps={{ shrink: true }} />
          <TextField variant='standard' label='Phone' placeholder='+908...' fullWidth InputLabelProps={{ shrink: true }} />
          <TextField variant='standard' label='Name' placeholder='John' fullWidth InputLabelProps={{ shrink: true }} />
          <TextField variant='standard' label='Surname' placeholder='Doe' fullWidth InputLabelProps={{ shrink: true }} />
          <TextField variant='standard' label='Mail' placeholder='johndoe@mail.com' fullWidth InputLabelProps={{ shrink: true }} />
          <TextField variant='standard' label='Phone' placeholder='+908...' fullWidth InputLabelProps={{ shrink: true }} />
        </Box>
      </Paper>
    </Page.Content>
  );
};

export default ContactsPage;

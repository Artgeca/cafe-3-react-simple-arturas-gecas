import { useState } from 'react';
import {
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
          p: 5, mt: 15, mx: 3, textAlign: 'center', maxWidth: '400px', height: '400px',
        }}
      >
        <Typography variant='h4' gutterBottom>Contact Us</Typography>
        <TextField select value={value} label='Question category' color='primary' onChange={(e) => setValue(e.target.value)} sx={{ width: 250 }}>
          {
          questionCategory.map((item) => (
            <MenuItem key={item.value} value={item.value}>{item.label}</MenuItem>
          ))
        }
        </TextField>
      </Paper>
    </Page.Content>
  );
};

export default ContactsPage;

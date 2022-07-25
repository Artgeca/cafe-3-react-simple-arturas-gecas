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
          p: '48px', mt: '128px', textAlign: 'center', width: '400px', height: '400px',
        }}
      >
        <Typography variant='h4' pb={4}>Contact Us</Typography>
        <TextField select fullWidth value={value} label='Question category' color='secondary' onChange={(e) => setValue(e.target.value)}>
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

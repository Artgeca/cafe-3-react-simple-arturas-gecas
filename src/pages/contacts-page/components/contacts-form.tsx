import { useState } from 'react';
import {
  Box, Button, MenuItem, Paper, TextField, Typography,
} from '@mui/material';

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

const ContactsForm = () => {
  const [value, setValue] = useState<string>('');

  return (
    <Paper
      elevation={3}
      sx={{
        p: 5, mt: { xs: 12, md: 12 }, mb: { xs: 0, md: 5 }, textAlign: 'center', height: 675, width: '85%', maxWidth: 500, order: { xs: 1, md: 2 },
      }}
    >
      <Typography variant='h4' gutterBottom>Contact Us</Typography>
      <Typography variant='body1' fontWeight={100}>Any questions or remarks? Just write us a message!</Typography>
      <Box sx={{
        display: 'flex', flexDirection: 'column', gap: 3, mt: 3,
      }}
      >
        <TextField variant='standard' required label='Name' placeholder='John' color='secondary' fullWidth InputLabelProps={{ shrink: true }} />
        <TextField variant='standard' required label='Surname' placeholder='Doe' color='secondary' fullWidth InputLabelProps={{ shrink: true }} />
        <TextField variant='standard' required label='Mail' placeholder='johndoe@mail.com' color='secondary' fullWidth InputLabelProps={{ shrink: true }} />
        <TextField variant='standard' required label='Phone' placeholder='+908...' color='secondary' fullWidth InputLabelProps={{ shrink: true }} />
        <TextField variant='standard' required select value={value} label='Question category' color='secondary' fullWidth onChange={(e) => setValue(e.target.value)} InputLabelProps={{ shrink: true }}>
          {
            questionCategory.map((item) => (
              <MenuItem key={item.value} value={item.value}>{item.label}</MenuItem>
            ))
            }
        </TextField>
        <TextField variant='standard' required label='Message' color='secondary' fullWidth multiline maxRows={4} InputLabelProps={{ shrink: true }} />
        <Button variant='contained' color='primary'>Send Message</Button>
      </Box>
    </Paper>
  );
};

export default ContactsForm;

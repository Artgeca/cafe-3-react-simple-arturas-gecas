import { useState } from 'react';
import {
  Box, Button, MenuItem, Paper, TextField, Typography,
} from '@mui/material';
import * as Page from '../../../components';

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

interface Form {
  name: string,
  surname: string,
  mail: string,
  phone: string,
  category: string,
  message: string
}

const ContactsForm = () => {
  const [formValue, setFormValue] = useState<Form>({
    name: '',
    surname: '',
    mail: '',
    phone: '',
    category: '',
    message: '',
  });
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const { mail, category, message } = formValue;
    if (!mail || !category || !message) {
      setSnackbarOpen(true);

      return;
    }
    console.log('test');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Paper
        elevation={3}
        sx={{
          p: 5, mt: { xs: 12, md: 12 }, mb: { xs: 0, md: 5 }, textAlign: 'center', height: 700, width: '85%', maxWidth: 500, order: { xs: 1, md: 2 },
        }}
      >
        <Typography variant='h4' gutterBottom>Contact Us</Typography>
        <Typography variant='body1' fontWeight={100}>Any questions or remarks? Just write us a message!</Typography>
        <Box sx={{
          display: 'flex', flexDirection: 'column', gap: 3, mt: 3,
        }}
        >
          <TextField
            variant='standard'
            name='name'
            value={formValue.name}
            label='Name'
            placeholder='John'
            color='secondary'
            fullWidth
            InputLabelProps={{ shrink: true }}
            onChange={handleChange}
          />
          <TextField
            variant='standard'
            name='surname'
            value={formValue.surname}
            label='Surname'
            placeholder='Doe'
            color='secondary'
            fullWidth
            InputLabelProps={{ shrink: true }}
            onChange={handleChange}
          />
          <TextField
            error={!formValue.mail}
            variant='standard'
            required
            name='mail'
            value={formValue.mail}
            label='Mail'
            placeholder='johndoe@mail.com'
            color='secondary'
            fullWidth
            InputLabelProps={{ shrink: true }}
            onChange={handleChange}
          />
          <TextField
            variant='standard'
            name='phone'
            value={formValue.phone}
            label='Phone'
            placeholder='+908...'
            color='secondary'
            fullWidth
            InputLabelProps={{ shrink: true }}
            onChange={handleChange}
          />
          <TextField
            error={!formValue.category}
            variant='standard'
            required
            name='category'
            select
            value={formValue.category}
            label='Question category'
            color='secondary'
            fullWidth
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
            sx={{ textAlign: 'left' }}
          >
            {
            questionCategory.map((item) => (
              <MenuItem key={item.value} value={item.value}>{item.label}</MenuItem>
            ))
            }
          </TextField>
          <TextField
            error={!formValue.message}
            variant='standard'
            required
            name='message'
            value={formValue.message}
            label='Message'
            color='secondary'
            fullWidth
            multiline
            rows={3}
            InputLabelProps={{ shrink: true }}
            onChange={handleChange}
          />
          <Button variant='contained' color='secondary' onClick={(handleClick)}>Send Message</Button>
        </Box>
      </Paper>
      <Page.PageSnackbar
        open={snackbarOpen}
        onClose={() => setSnackbarOpen(false)}
        type='error'
        message='Please fill all required fields'
      />
    </>
  );
};

export default ContactsForm;

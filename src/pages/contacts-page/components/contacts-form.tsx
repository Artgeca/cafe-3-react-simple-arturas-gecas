import { useContext, useState } from 'react';
import {
  Box, Button, Paper, Typography,
} from '@mui/material';
import AlertContext from '../../../contexts/alert-context';
import ContactsFormList from './contacts-form-list';
import { Form } from '../types';

const defaultFormValues = {
  name: '',
  surname: '',
  mail: '',
  phone: '',
  category: '',
  message: '',
};

const ContactsForm = () => {
  const context = useContext(AlertContext);
  const { alert, setAlert } = context;

  const [formValue, setFormValue] = useState<Form>({
    name: '',
    surname: '',
    mail: '',
    phone: '',
    category: '',
    message: '',
  });

  const postMessage = async (data: Form) => {
    await fetch('http://localhost:8000/contactsMessages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    setFormValue(defaultFormValues);
  };

  const handleClick = () => {
    const { mail, category, message } = formValue;
    if (!mail || !category || !message) {
      setAlert({
        ...alert, open: true, type: 'error', message: 'Please fill all required fields',
      });

      return;
    }
    postMessage(formValue);
    setAlert({
      ...alert, open: true, type: 'success', message: 'Your message successfully delivered',
    });
  };

  return (
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
        <ContactsFormList formValue={formValue} setFormValue={setFormValue} />
        <Button variant='contained' color='secondary' onClick={(handleClick)}>Send Message</Button>
      </Box>
    </Paper>
  );
};

export default ContactsForm;

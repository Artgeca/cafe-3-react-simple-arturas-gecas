import { MenuItem, TextField } from '@mui/material';
import React from 'react';
import { Form } from '../types';

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

interface Props {
  formValue: Form,
  setFormValue: React.Dispatch<React.SetStateAction<Form>>
}

const ContactsFormList = ({ formValue, setFormValue }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  return (
    <>
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
    </>
  );
};

export default ContactsFormList;

import { MenuItem, TextField } from '@mui/material';
import { FormikErrors, FormikTouched } from 'formik';
import { FormInterface } from '../types';

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
    label: 'Demolition',
    value: 'demolition',
  },
  {
    label: 'Rentals',
    value: 'rentals',
  },
];

interface Props {
  values: FormInterface,
  errors: FormikErrors<FormInterface>
  touched: FormikTouched<FormInterface>
  handleChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
  handleBlur: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>
}

const ContactsFormList: React.FC<Props> = ({
  values, errors, touched, handleChange, handleBlur,
}) => (
  <>
    <TextField
      name='name'
      value={values.name}
      label='Name'
      placeholder='John'
      color='secondary'
      fullWidth
      InputLabelProps={{ shrink: true }}
      onChange={handleChange}
      onBlur={handleBlur}
      error={touched.name && Boolean(errors.name)}
    />
    <TextField
      name='surname'
      value={values.surname}
      label='Surname'
      placeholder='Doe'
      color='secondary'
      fullWidth
      InputLabelProps={{ shrink: true }}
      onChange={handleChange}
      onBlur={handleBlur}
      error={touched.surname && Boolean(errors.surname)}
    />
    <TextField
      name='email'
      value={values.email}
      label='Email'
      placeholder='johndoe@mail.com'
      color='secondary'
      fullWidth
      InputLabelProps={{ shrink: true }}
      onChange={handleChange}
      onBlur={handleBlur}
      error={touched.email && Boolean(errors.email)}
    />
    <TextField
      name='phone'
      value={values.phone}
      label='Phone'
      placeholder='+0123...'
      color='secondary'
      fullWidth
      InputLabelProps={{ shrink: true }}
      onChange={handleChange}
      onBlur={handleBlur}
      error={touched.phone && Boolean(errors.phone)}
    />
    <TextField
      name='category'
      select
      value={values.category}
      label='Question category'
      placeholder='Select category'
      color='secondary'
      fullWidth
      onChange={handleChange}
      onBlur={handleBlur}
      error={touched.category && Boolean(errors.category)}
      sx={{ textAlign: 'left' }}
    >
      {
        questionCategory.map((item) => (
          <MenuItem key={item.value} value={item.value}>{item.label}</MenuItem>
        ))
      }
    </TextField>
    <TextField
      name='message'
      value={values.message}
      label='Message'
      placeholder='Your message...'
      color='secondary'
      fullWidth
      multiline
      rows={3}
      InputLabelProps={{ shrink: true }}
      onChange={handleChange}
      onBlur={handleBlur}
      error={touched.message && Boolean(errors.message)}
    />
  </>
);

export default ContactsFormList;

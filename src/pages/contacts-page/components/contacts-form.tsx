import { useContext } from 'react';
import {
  Box,
  Button,
  Paper,
  Typography,
} from '@mui/material';
import * as yup from 'yup';
import { useFormik, FormikConfig } from 'formik';
import { AlertContext } from '../../../contexts/alert-context';
import ContactsFormList from './contacts-form-list';
import { FormInterface } from '../types';

type ContactsFormik = FormikConfig<FormInterface>;

const initialValues: FormInterface = {
  name: '',
  surname: '',
  email: '',
  phone: '',
  category: '',
  message: '',
};

const onSubmit: ContactsFormik['onSubmit'] = (values, actions) => {
  console.log('Contacts form values:');
  console.log(JSON.stringify(values, null, 2));
  actions.resetForm();
};

const validationSchema = yup.object({
  name: yup.string()
    .required('Required'),
  surname: yup.string()
    .required('Required'),
  email: yup.string()
    .required('Required')
    .email('Invalid email'),
  phone: yup.string()
    .required('Required'),
  category: yup.string()
    .required('Required'),
  message: yup.string()
    .required('Required')
    .max(300, 'Max message length is 300 symbols'),
});

const ContactsForm: React.FC = () => {
  const context = useContext(AlertContext);
  const { setAlert } = context;

  const {
    values, dirty, errors, touched, isValid,
    handleChange, handleSubmit, handleBlur,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const onSubmitHandler = () => {
    handleSubmit();
    setAlert({
      open: true, type: 'success', message: 'Your message successfuly delivered',
    });
  };

  return (
    <Paper
      elevation={3}
      sx={{
        p: 5, mt: 12, mb: { xs: 0, md: 5 }, textAlign: 'center', height: 780, width: '85%', maxWidth: 500, order: { xs: 1, md: 2 }, display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
      }}
    >
      <Box>
        <Typography variant='h4' fontWeight={100} mb={3}>Contact Us</Typography>
        <Typography variant='body1' fontWeight={100}>Any questions or remarks? Just write us a message!</Typography>
      </Box>
      <Box sx={{
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 3, mt: 3,
      }}
      >
        <ContactsFormList
          values={values}
          errors={errors}
          touched={touched}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
        <Button
          variant='contained'
          color='secondary'
          onClick={onSubmitHandler}
          disabled={!dirty || !isValid}
          sx={{ mt: 1 }}
        >
          Send Message
        </Button>
      </Box>
    </Paper>
  );
};

export default ContactsForm;

import { TextField } from '@mui/material';
import { useFormik, FormikConfig } from 'formik';
import { Form } from '../../components';

interface SingUpValues {
  email: string,
  confirmEmail: string,
  password: string,
  confirmPassword: string,
  fullName: string,
  birthDate: string
}

type SignUpFormik = FormikConfig<SingUpValues>;

const initialValues: SingUpValues = {
  email: '',
  confirmEmail: '',
  password: '',
  confirmPassword: '',
  fullName: '',
  birthDate: '',
};

const onSubmit: SignUpFormik['onSubmit'] = (values, actions) => {
  console.log(JSON.stringify(values, null, 2));
  actions.resetForm();
};

const SignUpPage: React.FC = () => {
  const {
    values,
    handleChange, handleSubmit,
  } = useFormik({
    initialValues,
    onSubmit,
  });

  return (
    <Form title='Sign Up' btnText='Confirm' onSubmit={handleSubmit}>
      <TextField
        variant='outlined'
        color='secondary'
        type='email'
        name='email'
        label='Email'
        fullWidth
        value={values.email}
        onChange={handleChange}
      />
      <TextField
        variant='outlined'
        color='secondary'
        type='email'
        name='confirmEmail'
        label='Confirm email'
        fullWidth
        value={values.confirmEmail}
        onChange={handleChange}
      />
      <TextField
        variant='outlined'
        color='secondary'
        type='password'
        name='password'
        label='Password'
        fullWidth
        value={values.password}
        onChange={handleChange}
      />
      <TextField
        variant='outlined'
        color='secondary'
        type='password'
        name='confirmPassword'
        label='Confirm password'
        fullWidth
        value={values.confirmPassword}
        onChange={handleChange}
      />
      <TextField
        variant='outlined'
        color='secondary'
        type='text'
        name='fullName'
        label='Full name'
        fullWidth
        value={values.fullName}
        onChange={handleChange}
      />
      <TextField
        variant='outlined'
        color='secondary'
        type='date'
        name='birthDate'
        label='Birth date'
        fullWidth
        value={values.birthDate}
        onChange={handleChange}
      />
    </Form>
  );
};
export default SignUpPage;

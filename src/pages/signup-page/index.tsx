import { TextField } from '@mui/material';
import { useFormik } from 'formik';
import { Form } from '../../components';

interface FormValuesType {
  email: string,
  confirmEmail: string,
  password: string,
  confirmPassword: string,
  fullName: string,
  birthDate: string
}

const initialValues = {
  email: '',
  confirmEmail: '',
  password: '',
  confirmPassword: '',
  fullName: '',
  birthDate: '',
};

const onSubmit = (values: FormValuesType, actions: { resetForm: () => void; }) => {
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
        variant='standard'
        type='email'
        name='email'
        label='Email'
        fullWidth
        value={values.email}
        onChange={handleChange}
      />
      <TextField
        variant='standard'
        type='email'
        name='confirmEmail'
        label='Confirm email'
        fullWidth
        value={values.confirmEmail}
        onChange={handleChange}
      />
      <TextField
        variant='standard'
        type='password'
        name='password'
        label='Password'
        fullWidth
        value={values.password}
        onChange={handleChange}
      />
      <TextField
        variant='standard'
        type='password'
        name='confirmPassword'
        label='Confirm password'
        fullWidth
        value={values.confirmPassword}
        onChange={handleChange}
      />
      <TextField
        variant='standard'
        type='text'
        name='fullName'
        label='Full name'
        fullWidth
        value={values.fullName}
        onChange={handleChange}
      />
      <TextField
        variant='standard'
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

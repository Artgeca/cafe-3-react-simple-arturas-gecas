import { TextField } from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers';
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
        color='secondary'
        type='email'
        name='email'
        label='Email'
        fullWidth
        value={values.email}
        onChange={handleChange}
      />
      <TextField
        color='secondary'
        type='email'
        name='confirmEmail'
        label='Confirm email'
        fullWidth
        value={values.confirmEmail}
        onChange={handleChange}
      />
      <TextField
        color='secondary'
        type='password'
        name='password'
        label='Password'
        fullWidth
        value={values.password}
        onChange={handleChange}
      />
      <TextField
        color='secondary'
        type='password'
        name='confirmPassword'
        label='Confirm password'
        fullWidth
        value={values.confirmPassword}
        onChange={handleChange}
      />
      <TextField
        color='secondary'
        type='text'
        name='fullName'
        label='Full name'
        fullWidth
        value={values.fullName}
        onChange={handleChange}
      />
      <DesktopDatePicker
        inputFormat='yyyy-MM-DD'
        disableMaskedInput
        value={values.birthDate}
        disableFuture
        onChange={handleChange}
        renderInput={(params) => (
          <TextField
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...params}
            color='secondary'
            label='Birth date'
            error={false}
          />
        )}
      />
    </Form>
  );
};
export default SignUpPage;

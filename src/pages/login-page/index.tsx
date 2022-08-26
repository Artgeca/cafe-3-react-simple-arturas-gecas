import { FormikConfig, useFormik } from 'formik';
import { TextField } from '@mui/material';
import * as yup from 'yup';
import { Form } from '../../components';

interface LogInValues {
  email: string,
  password: string,
}

type LogInFormik = FormikConfig<LogInValues>;

const initialValues: LogInValues = {
  email: '',
  password: '',
};

const onSubmit: LogInFormik['onSubmit'] = (values, actions) => {
  console.log('Log In form values:');
  console.log(JSON.stringify(values, null, 2));
  actions.resetForm();
};

const validationSchema = yup.object({
  email: yup.string()
    .required('Required')
    .email('Invalid email'),
  password: yup.string()
    .required('Required')
    .min(8, 'At least 8 symbols')
    .matches(/[a-z]/, 'At least 1 lowercase')
    .matches(/[A-Z]/, 'At least 1 uppercase')
    .matches(/\d/, 'At least 1 number')
    .matches(/\W/, 'At least 1 special symbol'),
});

const LoginPage = () => {
  const {
    values, dirty, errors, touched, isValid,
    handleChange, handleSubmit, handleBlur,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <Form
      title='Log In'
      btnText='Confirm'
      onSubmit={handleSubmit}
      disabled={!dirty || !isValid}
    >
      <TextField
        color='secondary'
        type='email'
        name='email'
        label='Email'
        fullWidth
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.email && Boolean(errors.email)}
        helperText={touched.email && errors.email}
      />
      <TextField
        color='secondary'
        type='password'
        name='password'
        label='Password'
        fullWidth
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.password && Boolean(errors.password)}
        helperText={touched.password && errors.password}
      />
    </Form>
  );
};

export default LoginPage;

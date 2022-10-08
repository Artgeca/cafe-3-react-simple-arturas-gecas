import * as yup from 'yup';
import { TextField } from '@mui/material';
import { useFormik, FormikConfig } from 'formik';
import { Form } from '../../components';

interface SingUpValues {
  companyName: string,
  email: string,
  confirmEmail: string,
  password: string,
  confirmPassword: string,
}

type SignUpFormik = FormikConfig<SingUpValues>;

const initialValues: SingUpValues = {
  companyName: '',
  email: '',
  confirmEmail: '',
  password: '',
  confirmPassword: '',
};

const onSubmit: SignUpFormik['onSubmit'] = (values, actions) => {
  console.log('Sign Up form values:');
  console.log(JSON.stringify(values, null, 2));
  actions.resetForm();
};

const validationSchema = yup.object({
  companyName: yup.string()
    .required('Required')
    .min(6, 'At least 6 letters')
    .matches(/^[a-ząčęėįšųūž0-9 ]+$/i, 'Only letters, numbers and spaces allowed'),
  email: yup.string()
    .required('Required')
    .email('Invalid email'),
  confirmEmail: yup.string()
    .required('Required')
    .oneOf([yup.ref('email')], 'Email not matching'),
  password: yup.string()
    .required('Required')
    .min(8, 'At least 8 symbols')
    .matches(/[a-z]/, 'At least 1 lowercase')
    .matches(/[A-Z]/, 'At least 1 uppercase')
    .matches(/\d/, 'At least 1 number')
    .matches(/\W/, 'At least 1 special symbol'),
  confirmPassword: yup.string()
    .required('Required')
    .oneOf([yup.ref('password')], 'Password not matching'),
});

const SignUpPage: React.FC = () => {
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
      title='Sign Up'
      btnText='Confirm'
      onSubmit={handleSubmit}
      disabled={!dirty || !isValid}
    >
      <TextField
        color='secondary'
        type='text'
        name='companyName'
        label='Company name'
        fullWidth
        value={values.companyName}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.companyName && Boolean(errors.companyName)}
        helperText={touched.companyName && errors.companyName}
      />
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
        type='email'
        name='confirmEmail'
        label='Confirm email'
        fullWidth
        value={values.confirmEmail}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.confirmEmail && Boolean(errors.confirmEmail)}
        helperText={touched.confirmEmail && errors.confirmEmail}
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
      <TextField
        color='secondary'
        type='password'
        name='confirmPassword'
        label='Confirm password'
        fullWidth
        value={values.confirmPassword}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.confirmPassword && Boolean(errors.confirmPassword)}
        helperText={touched.confirmPassword && errors.confirmPassword}
      />
    </Form>
  );
};
export default SignUpPage;

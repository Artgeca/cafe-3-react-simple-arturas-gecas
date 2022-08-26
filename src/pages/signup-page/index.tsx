import * as yup from 'yup';
import { TextField } from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import { useFormik, FormikConfig } from 'formik';
import moment from 'moment';
import { Form } from '../../components';

const dateNow = moment(new Date());

interface SingUpValues {
  email: string,
  confirmEmail: string,
  password: string,
  confirmPassword: string,
  fullName: string,
  birthDate: moment.Moment
}

type SignUpFormik = FormikConfig<SingUpValues>;

const initialValues: SingUpValues = {
  email: '',
  confirmEmail: '',
  password: '',
  confirmPassword: '',
  fullName: '',
  birthDate: dateNow,
};

const onSubmit: SignUpFormik['onSubmit'] = (values, actions) => {
  console.log('Sign Up form values:');
  console.log(JSON.stringify(values, null, 2));
  actions.resetForm();
};

const validationSchema = yup.object({
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
  fullName: yup.string()
    .required('Required')
    .min(6, 'At least 6 letters')
    .matches(/^[a-ząčęėįšųūž ]+$/i, 'Only letters and spaces allowed'),
  birthDate: yup.date(),
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
      <TextField
        color='secondary'
        type='text'
        name='fullName'
        label='Full name'
        fullWidth
        value={values.fullName}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.fullName && Boolean(errors.fullName)}
        helperText={touched.fullName && errors.fullName}
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
            name='birthDate'
            label='Birth date'
            onBlur={handleBlur}
            error={touched.birthDate && Boolean(errors.birthDate)}
          // helperText={touched.birthDate && errors.birthDate}
          />
        )}
      />
    </Form>
  );
};
export default SignUpPage;

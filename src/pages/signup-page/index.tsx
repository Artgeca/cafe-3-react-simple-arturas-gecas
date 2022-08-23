import {
  Button, Paper, TextField, Typography,
} from '@mui/material';
import { useFormik } from 'formik';

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

const onSubmit = (values: FormValuesType) => {
  console.log(JSON.stringify(values, null, 2));
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
    <Paper
      component='form'
      onSubmit={handleSubmit}
      sx={{
        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: 400, p: 3, m: 3,
      }}
    >
      <Typography variant='h4' fontWeight={100}>Sign Up</Typography>
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
      <Button
        type='submit'
        variant='contained'
        fullWidth
        color='secondary'
        sx={{ mt: 2 }}
      >
        Submit
      </Button>
    </Paper>
  );
};

export default SignUpPage;

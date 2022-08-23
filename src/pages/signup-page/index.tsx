import { Paper, TextField, Typography } from '@mui/material';
import { useState } from 'react';

interface FormValuesType {
  firstName: string
}

const defaultFormValues = {
  firstName: '',
};

const SignUpPage: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValuesType>(defaultFormValues);

  return (
    <Paper
      component='form'
      sx={{
        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', p: 2,
      }}
    >
      <Typography variant='h4' fontWeight={100}>Sign Up</Typography>
      <TextField name='firstName' />
    </Paper>
  );
};

export default SignUpPage;

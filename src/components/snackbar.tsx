import { Alert, Snackbar } from '@mui/material';
import { useContext } from 'react';
import AlertContext from '../contexts/alert-context';

const AlertSnackbar = () => {
  const { alert, setAlert } = useContext(AlertContext);
  const { open, type, message } = alert;

  return (
    <Snackbar
      open={open}
      onClose={() => setAlert({ ...alert, open: false })}
      autoHideDuration={5000}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    >
      <Alert variant='filled' severity={type} sx={{ width: '100%', mx: { xs: 5, sm: 0 } }}>{message}</Alert>
    </Snackbar>
  );
};

export default AlertSnackbar;

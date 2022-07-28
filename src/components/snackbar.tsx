import { Alert, AlertColor, Snackbar } from '@mui/material';

interface Props {
  open: boolean,
  onClose: () => void,
  type: AlertColor,
  message: string
}

const PageSnackbar = ({
  open, onClose, type, message,
}: Props) => (
  <Snackbar
    open={open}
    onClose={onClose}
    autoHideDuration={5000}
    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
  >
    <Alert variant='filled' severity={type} sx={{ width: '100%', mx: { xs: 5, sm: 0 } }}>{message}</Alert>
  </Snackbar>

);

export default PageSnackbar;

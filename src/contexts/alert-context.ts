import { createContext } from 'react';
import { AlertColor } from '@mui/material';

interface AlertInterface {
  open: boolean,
  type: AlertColor,
  message: string
}

export const defaultAlert: AlertInterface = {
  open: false,
  type: 'error',
  message: '',
};

interface AlertContextInterface {
  alert: AlertInterface;
  setAlert: React.Dispatch<React.SetStateAction<AlertInterface>>
}

const alertContext: AlertContextInterface = {
  alert: defaultAlert,
  setAlert: () => {},
};

const AlertContext = createContext<AlertContextInterface>(alertContext);

export default AlertContext;

import {
  createContext, useMemo, useState,
} from 'react';
import { AlertColor } from '@mui/material';

interface AlertInterface {
  open: boolean,
  type: AlertColor,
  message: string
}

interface AlertContextInterface {
  alert: AlertInterface;
  setAlert: React.Dispatch<React.SetStateAction<AlertInterface>>
}

export const defaultAlert: AlertInterface = {
  open: false,
  type: 'error',
  message: '',
};

const alertContext: AlertContextInterface = {
  alert: defaultAlert,
  setAlert: () => { },
};

export const AlertContext = createContext<AlertContextInterface>(alertContext);

interface AlertContextProviderProps {
  children: React.ReactNode
}

const AlertProvider = ({ children }: AlertContextProviderProps) => {
  const [alert, setAlert] = useState(defaultAlert);
  const context = useMemo(() => ({
    alert,
    setAlert,
  }), [alert]);

  return (
    <AlertContext.Provider value={context}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertProvider;

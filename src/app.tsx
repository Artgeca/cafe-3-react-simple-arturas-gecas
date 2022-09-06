import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import theme from './theme';
import AlertProvider from './contexts/alert-context';
import { CartProvider } from './contexts/cart-context';
import PageRoutes from './routes/page-routes';
import ServiceNavigationProvider from './contexts/services-page-navigation-context';
import { AlertSnackbar, Navbar } from './components';

const App = () => (
  <BrowserRouter>
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <AlertProvider>
        <ServiceNavigationProvider>
          <ThemeProvider theme={theme}>
            <CartProvider>
              <Navbar />
              <PageRoutes />
              <AlertSnackbar />
            </CartProvider>
          </ThemeProvider>
        </ServiceNavigationProvider>
      </AlertProvider>
    </LocalizationProvider>
  </BrowserRouter>
);

export default App;

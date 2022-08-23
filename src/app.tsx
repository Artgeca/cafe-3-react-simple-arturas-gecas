import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import theme from './theme';
import AlertProvider from './contexts/alert-context';
import PageRoutes from './routes/page-routes';
import ServiceNavigationProvider from './contexts/services-page-navigation-context';
import { AlertSnackbar, Navbar } from './components';

const App = () => (
  <BrowserRouter>
    <AlertProvider>
      <ServiceNavigationProvider>
        <ThemeProvider theme={theme}>
          <Navbar />
          <PageRoutes />
          <AlertSnackbar />
        </ThemeProvider>
      </ServiceNavigationProvider>
    </AlertProvider>
  </BrowserRouter>
);

export default App;

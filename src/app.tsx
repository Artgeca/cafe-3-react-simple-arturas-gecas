import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import theme from './theme';
import AlertProvider from './contexts/alert-context';
import PageRoutes from './routes/page-routes';
import ServiceNavigationProvider from './contexts/services-page-navigation-context';
import { AlertSnackbar, Navbar } from './components';
import { store } from './store';
import LoadDataFromLocalStorage from './helpers/load-data-form-local-storage';

const App: React.FC = () => (
  <BrowserRouter>
    <AlertProvider>
      <ServiceNavigationProvider>
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <LoadDataFromLocalStorage>
              <>
                <Navbar />
                <PageRoutes />
                <AlertSnackbar />
              </>
            </LoadDataFromLocalStorage>
          </Provider>
        </ThemeProvider>
      </ServiceNavigationProvider>
    </AlertProvider>
  </BrowserRouter>
);

export default App;

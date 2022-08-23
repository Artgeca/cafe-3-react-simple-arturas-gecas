import { ThemeProvider } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AlertSnackbar, Navbar } from './components';
import AboutPage from './pages/about-page';
import ContactsPage from './pages/contacts-page';
import ErrorPage from './pages/error-page';
import GaleryPage from './pages/galery-page';
import HomePage from './pages/home-page';
import ProjectsPage from './pages/projects-page';
import ServicesPage from './pages/services-page';
import theme from './theme';
import AlertProvider from './contexts/alert-context';
import StorePage from './pages/store-page';
import ServiceNavigationProvider from './contexts/services-page-navigation-context';
import SignUpPage from './pages/signup-page';
import LoginPage from './pages/login-page/index';

const App = () => (
  <BrowserRouter>
    <AlertProvider>
      <ServiceNavigationProvider>
        <ThemeProvider theme={theme}>
          <Navbar />
          <Routes>
            <Route path='/'>
              <Route index element={<HomePage />} />
              <Route path='services' element={<ServicesPage />} />
              <Route path='projects' element={<ProjectsPage />} />
              <Route path='galery' element={<GaleryPage />} />
              <Route path='about' element={<AboutPage />} />
              <Route path='contacts' element={<ContactsPage />} />
              <Route path='store' element={<StorePage />} />
              <Route path='auth/'>
                <Route path='signup' element={<SignUpPage />} />
                <Route path='login' element={<LoginPage />} />
              </Route>
              <Route path='*' element={<ErrorPage />} />
            </Route>
          </Routes>
          <AlertSnackbar />
        </ThemeProvider>
      </ServiceNavigationProvider>
    </AlertProvider>
  </BrowserRouter>
);

export default App;

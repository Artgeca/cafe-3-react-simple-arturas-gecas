import { ThemeProvider } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useMemo, useState } from 'react';
import { AlertSnackbar, Navbar } from './components';
import AboutPage from './pages/about-page';
import ContactsPage from './pages/contacts-page';
import ErrorPage from './pages/error-page';
import GaleryPage from './pages/galery-page';
import HomePage from './pages/home-page';
import ProjectsPage from './pages/projects-page';
import ServicesPage from './pages/services-page';
import theme from './theme';
import AlertContext, { defaultAlert } from './contexts/alert-context';
import StorePage from './pages/store-page';

const App = () => {
  const [alert, setAlert] = useState(defaultAlert);
  const context = useMemo(() => ({
    alert,
    setAlert,
  }), [alert]);

  return (
    <BrowserRouter>
      <AlertContext.Provider value={context}>
        <ThemeProvider theme={theme}>
          <Navbar />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/services' element={<ServicesPage />} />
            <Route path='/projects' element={<ProjectsPage />} />
            <Route path='/galery' element={<GaleryPage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/contacts' element={<ContactsPage />} />
            <Route path='/store' element={<StorePage />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
          <AlertSnackbar />
        </ThemeProvider>
      </AlertContext.Provider>
    </BrowserRouter>
  );
};

export default App;

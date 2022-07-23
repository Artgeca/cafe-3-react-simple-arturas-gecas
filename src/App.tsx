import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components';
import AboutPage from './pages/about-page';
import ContactsPage from './pages/contacts-page';
import ErrorPage from './pages/error-page';
import GaleryPage from './pages/galery-page';
import HomePage from './pages/home-page';
import ProjectsPage from './pages/projects-page';
import ServicesPage from './pages/services-page';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/services' element={<ServicesPage />} />
      <Route path='/projects' element={<ProjectsPage />} />
      <Route path='/galery' element={<GaleryPage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/contacts' element={<ContactsPage />} />

      <Route path='*' element={<ErrorPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;

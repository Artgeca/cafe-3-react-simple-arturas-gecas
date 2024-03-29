import {
  Navigate, Route, Routes,
} from 'react-router-dom';
import AuthLayout from '../layouts/auth-layout';
import CartPage from '../pages/cart-page';
import ContactsPage from '../pages/contacts-page';
import ErrorPage from '../pages/error-page';
import GaleryPage from '../pages/galery-page';
import HomePage from '../pages/home-page';
import LoginPage from '../pages/login-page';
import ProjectsPage from '../pages/projects-page';
import RentalPage from '../pages/rental-page';
import ServicesPage from '../pages/services-page';
import SignUpPage from '../pages/signup-page';
import StorePage from '../pages/store-page';
import PrivateRoutes from './private-route';

const PageRoutes: React.FC = () => (
  <Routes>
    <Route path='/'>
      <Route index element={<HomePage />} />
      <Route path='services' element={<ServicesPage />} />
      <Route path='projects' element={<ProjectsPage />} />
      <Route path='galery' element={<GaleryPage />} />
      <Route path='contacts' element={<ContactsPage />} />
      <Route element={<PrivateRoutes />}>
        <Route path='store/'>
          <Route index element={<StorePage />} />
          <Route path=':id' element={<RentalPage />} />
          <Route path='cart' element={<CartPage />} />
        </Route>
      </Route>
      <Route path='auth/' element={<AuthLayout />}>
        <Route index element={<Navigate to='login' />} />
        <Route path='signup' element={<SignUpPage />} />
        <Route path='login' element={<LoginPage />} />
      </Route>
      <Route path='*' element={<ErrorPage />} />
    </Route>
  </Routes>
);

export default PageRoutes;

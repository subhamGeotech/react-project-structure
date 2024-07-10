import { RouteObject } from 'react-router-dom';
import Home from '@/pages/home';
import ContactUs from '@/pages/contact-us';
import LoginPage from '@/pages/login';

const routes: RouteObject[] = [
  {
    index: true,
    element: <Home />,
  },
  {
    path: 'login',
    element: <LoginPage />,
  },
  {
    path: '',
    element: <ContactUs />,
  },
];
export default routes;
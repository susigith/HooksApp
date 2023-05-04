import { Navigate } from 'react-router-dom';
import { MainApp } from './MainApp';
import { LoginPage } from './LoginPage';
import { AboutPage } from './AboutPage';
import { ErrorPage } from './ErrorPage';
import { HomePage } from './HomePage';

export const routes = [
  {
    path: '/',
    element: <MainApp />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
    ],
  },
  {
    path: '/*',
    element: <Navigate to='about' />,
  },
];

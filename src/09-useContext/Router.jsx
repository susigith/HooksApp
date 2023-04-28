import { Navigate, createBrowserRouter } from 'react-router-dom';
import { MainApp } from './MainApp';
import { LoginPage } from './LoginPage';
import { AboutPage } from './AboutPage';
import { ErrorPage } from './ErrorPage';
import { HomePage } from './HomePage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainApp />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'home',
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
]);

import { Navigate, createBrowserRouter } from 'react-router-dom';
import { MainApp } from './MainApp';
import { LoginPage } from './LoginPage';
import { AboutPage } from './AboutPage';
import { ErrorPage } from './ErrorPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainApp />,
    errorElement: <ErrorPage />,
    children: [
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

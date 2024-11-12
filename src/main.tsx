import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@src/global.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LandingPage from '@src/components/pages/landing-page/landing-page';
import Home from '@src/components/pages/home/home';
import SignIn from '@src/components/pages/auth/sign-in/sign-in';
import ForgotPassword from '@src/components/pages/auth/forgot-password/forgot-password';
import SignUp from '@src/components/pages/auth/sign-up/sign-up';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/login',
    element: <SignIn />
  },
  {
    path: '/signup',
    element: <SignUp/>  
  },
  {
    path: '/forgot-password',
    element: <ForgotPassword/>
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
)

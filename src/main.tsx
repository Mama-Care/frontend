import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@src/global.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LandingPage from '@src/components/pages/landing-page/landing-page';
import Home from '@src/components/pages/home/home';
import SignIn from '@src/components/pages/auth/sign-in/sign-in';
import ForgotPassword from '@src/components/pages/auth/forgot-password/forgot-password';
import SignUp from '@src/components/pages/auth/sign-up/sign-up';
import AboutUs from '@src/components/pages/about-us/about-us';

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
  },
  {
    path: '/about-us',
    element: <AboutUs/>
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
)

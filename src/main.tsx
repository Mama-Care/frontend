import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@src/global.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LandingPage from '@src/components/pages/landing-page/landing-page';
import Home from '@src/components/pages/home/home';
import SignIn from '@src/components/pages/auth/sign-in/sign-in';
import ForgotPassword from '@src/components/pages/auth/forgot-password/forgot-password';
import SignUp from '@src/components/pages/auth/sign-up/sign-up';
import ProtectedRoute from '@src/components/organisms/protected-route/protected-route';
import { AuthProvider } from './contexts/auth/auth'; 
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import AboutUs from '@src/components/pages/about-us/about-us';
import HowTo from '@src/components/pages/how-to-use/how-to-use';
import { ChatProvider } from './contexts/chat/chat';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/home",
    element: (
      <ProtectedRoute>
        <ChatProvider>
          <Home />
        </ChatProvider>
      </ProtectedRoute>
    ),
  },
  {
    path: "/login",
    element: <SignIn />,
  },
  {
    path: "/register",
    element: <SignUp />,
  },
  {
    path: '/forgot-password',
    element: <ForgotPassword />
  },
  {
    path: '/about-us',
    element: <AboutUs />
  },
  {
    path: '/how-to-use',
    element: <HowTo />
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <ToastContainer />
      <RouterProvider router={routes} />
    </AuthProvider>
  </StrictMode>
);

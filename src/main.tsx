import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@src/global.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LandingPage from '@src/components/pages/landing-page/landing-page';
import Home from '@src/components/pages/home/home';
import SignIn from '@src/components/pages/auth/sign-in/sign-in';
import SignUp from '@src/components/pages/auth/sign-up/sign-up';
import ProtectedRoute from '@src/components/organisms/protected-route/protected-route';
import { AuthProvider } from './contexts/auth/auth'; 
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/home",
    element: (
      <ProtectedRoute>
        <Home />
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
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <ToastContainer />
      <RouterProvider router={routes} />
    </AuthProvider>
  </StrictMode>
);

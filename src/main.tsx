import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@src/global.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LandingPage from '@src/components/pages/landing-page/landing-page'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
)

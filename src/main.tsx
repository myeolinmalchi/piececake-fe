import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import './styles/reset.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MypageCarts, MypageInfo, MypageOrders } from './pages/mypage';
import { Signup, Success, Login } from './pages/accounts';
import Main from './pages/main';
import Layout from './components/layouts';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Main />,
      },
      {
        path: '/accounts',
        children: [
          {
            path: 'login',
            element: <Login />,
          },
          {
            path: 'signup',
            children: [
              {
                path: '',
                element: <Signup />,
              },
              {
                path: 'success',
                element: <Success />,
              },
            ],
          },
        ],
      },
      {
        path: '/mypage',
        children: [
          {
            path: 'info',
            element: <MypageInfo />,
          },
          {
            path: 'carts',
            element: <MypageCarts />,
          },
          {
            path: 'orders',
            element: <MypageOrders />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

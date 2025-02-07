import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'styles/index.css';
import 'styles/reset.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from 'components/layouts';
import {
  MypageCarts,
  MypageInfo,
  MypageOrders,
  Signup,
  SignupSuccess,
  Login,
  Main,
  StoreSearch,
  StoreDetail,
} from 'src/pages';
import CakeOptionPage from 'pages/stores/cake/option';

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
                element: <SignupSuccess />,
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
      {
        path: '/stores',
        children: [
          {
            path: '',
            element: <StoreSearch />,
          },
          {
            path: ':id',
            children: [
              {
                path: '',
                element: <StoreDetail />,
              },
              {
                path: 'cakes/:cakeId',
                element: <CakeOptionPage />,
              },
            ],
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

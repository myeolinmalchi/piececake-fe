import { Outlet } from 'react-router-dom';
import Header from './Header';
import { useLayoutEffect } from 'react';
import { useAuthStore } from 'stores/user/auth';

const Layout = () => {
  const { setAccessToken } = useAuthStore();

  useLayoutEffect(() => {
    const at = localStorage.getItem('ACCESS_TOKEN');
    if (at) {
      setAccessToken(at);
    }
  }, []);

  return (
    <div
      className={`
        w-full min-h-[100vh] pt-[72px] bg-top
        bg-[url('/images/background-long.png')]
        flex flex-col items-center justify-start
        font-['NanumSquareNeo'] font-[400]
      `}
    >
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;

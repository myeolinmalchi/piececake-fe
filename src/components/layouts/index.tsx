import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout = () => {
  return (
    <div
      className={`
        w-full min-h-[100vh] pt-[72px] pb-[80px]
        bg-cover bg-center
        bg-[url('/images/background.png')]
        flex flex-col items-center justify-start
        font-['NanumSquare_Neo'] font-[400]
      `}
    >
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;

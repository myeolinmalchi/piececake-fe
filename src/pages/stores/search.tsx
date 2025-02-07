import { MapContainer } from 'components/pages/stores/search';
import { useAuthStore } from 'stores/user/auth';
import { Navigate } from 'react-router-dom';

const StoreSearch = () => {
  const { accessToken } = useAuthStore();

  if (!accessToken) return <Navigate to='/accounts/login' />;
  return (
    <div
      className='
        w-full flex flex-col items-center justify-start
        h-[calc(100vh-72px)] bg-white px-[80px] py-[48px] z-10
      '
    >
      <MapContainer />
    </div>
  );
};

export default StoreSearch;

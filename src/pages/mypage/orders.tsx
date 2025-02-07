import { TabContainer, OrderItem } from 'src/components';
import logo from 'assets/images/logo.png';
import useOrders from 'src/hooks/accounts/useOrders';
import { useAuthStore } from 'stores/user/auth';
import { Navigate } from 'react-router-dom';

const MypageOrders = () => {
  const { items } = useOrders();
  const { accessToken, userId } = useAuthStore();
  if (!accessToken || !userId) return <Navigate to='/accounts/login' />;

  return (
    <div
      className='
        w-[862px] mt-[10px] mb-[120px]
        flex flex-col items-center justify-start
      '
    >
      <TabContainer />
      <div className='flex flex-col items-center justify-center mt-[60px]'>
        <img src={logo} className='w-[139px] mb-[12px]' alt='' />
        <span
          className={`
            font-['CHAB'] text-[48px] text-[#23717D] font-[400]
            leading-[48px] mb-[48px]
          `}
        >
          주문내역
        </span>
      </div>
      <div className='flex flex-col gap-[10px] items-center justify-center w-full'>
        {items.map((item) => (
          <OrderItem {...item} />
        ))}
      </div>
    </div>
  );
};

export default MypageOrders;

import Tab from './Tab';

const tabs = [
  {
    path: '/mypage/info',
    label: '나의 정보',
  },
  {
    path: '/mypage/carts',
    label: '장바구니',
  },
  {
    path: '/mypage/orders',
    label: '주문내역',
  },
];

const TabContainer = () => {
  return (
    <div
      className='
        mt-[10px] w-[500px] rounded-[40px] h-[50px]
        bg-[#FFF] shadow-[0px_2px_4px_0px_#FAC8B7_inset]
        flex justify-between items-center
        px-[28px] py-[0px]
      '
    >
      {tabs.map((props) => (
        <Tab {...props} />
      ))}
    </div>
  );
};

export default TabContainer;
import MypageTab from './MypageTab';
import { twMerge } from 'tailwind-merge';

interface TabContainerProps {
  className?: string;
}

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

const TabContainer = ({ className }: TabContainerProps) => {
  return (
    <div
      className={twMerge(
        `w-[500px] rounded-[40px] h-[50px]
        bg-[#FFF] shadow-[0px_2px_4px_0px_#FAC8B7_inset]
        flex justify-between items-center
        px-[28px] py-[0px]`,
        className
      )}
    >
      {tabs.map((props) => (
        <MypageTab {...props} />
      ))}
    </div>
  );
};

export default TabContainer;

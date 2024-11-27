import { Link, useLocation } from 'react-router-dom';

const NavLink = ({
  label,
  to,
  activated,
}: {
  label: string;
  to: string;
  activated?: boolean;
}) => {
  return (
    <Link
      to={to}
      className='
        flex-1 text-center relative
        h-full flex items-center justify-center
      '
    >
      {label}
      {activated && (
        <div
          className='
            absolute overflow-hidden
            w-[100px] bottom-0
            left-1/2 translate-x-[-50%]
            border-b-[#FFF] border-b-[2px]
          '
        ></div>
      )}
    </Link>
  );
};

const CenterNav = () => {
  const { pathname } = useLocation();
  return (
    <div
      className={`
        w-[416px] h-[36px] rounded-[6px] bg-[#23717D]
        absolute top-[18px] left-[50%] translate-x-[-50%]
        flex justify-between items-center
        font-['NanumSquare_Neo'] text-[14px] font-[400] text-white
      `}
    >
      <NavLink to='/' label='홈' activated={pathname === '/'} />
      <div className='border-l-[1px] border-l-white h-[16px]'></div>
      <NavLink
        to='/stores'
        label='주문하기'
        activated={pathname.startsWith('/stores')}
      />
      <div className='border-l-[1px] border-l-white h-[16px] relative'></div>
      <NavLink
        to='/mypage/carts'
        label='장바구니'
        activated={pathname === '/mypage/carts'}
      />
    </div>
  );
};

export default CenterNav;

import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const MypageNav = () => {
  const { pathname } = useLocation();

  return (
    <Link to={'/accounts/login'}>
      <button
        className={`
          relative
          w-[148px] h-[36px] rounded-[48px]
          bg-[#FF8E7A] shadow-mypageButton
          font-['NanumSquare_Neo'] text-[14px] font-[400] text-white
        `}
      >
        마이페이지
        {(pathname === '/mypage' || pathname.startsWith('/accounts')) && (
          <div
            className='
            absolute overflow-hidden
            w-[calc(100%-36px)] bottom-0
            left-1/2 translate-x-[-50%]
            border-b-[#FFF] border-b-[2px]
          '
          ></div>
        )}
      </button>
    </Link>
  );
};

export default MypageNav;

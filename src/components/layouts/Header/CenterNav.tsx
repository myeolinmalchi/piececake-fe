import { Link } from 'react-router-dom';

const CenterNav = () => {
  return (
    <div
      className={`
        w-[416px] h-[36px] rounded-[6px] bg-[#23717D]
        absolute top-[18px] left-[50%] translate-x-[-50%]
        flex justify-between items-center
        font-['NanumSquare_Neo'] text-[14px] font-[400] text-white
      `}
    >
      <Link to='/' className='flex-1 text-center'>
        홈
      </Link>
      <div className='border-l-[1px] border-l-white h-[16px]'></div>
      <Link to='/' className='flex-1 text-center'>
        주문하기
      </Link>
      <div className='border-l-[1px] border-l-white h-[16px]'></div>
      <Link to='/mypage/carts' className='flex-1 text-center'>
        장바구니
      </Link>
    </div>
  );
};

export default CenterNav;

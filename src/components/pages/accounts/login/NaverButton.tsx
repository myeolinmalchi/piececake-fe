import naver from '../../../../assets/images/naver.png';

const NaverButton = () => {
  return (
    <button
      className='
      px-[26px] py-[13px] w-[300px]
      rounded-[9px] bg-[#00C73C]
      text-[16px] text-[#FFF]
      flex items-center justify-between
    '
    >
      <img className='w-[28px] h-[28px]' src={naver} alt='' />
      <span className='flex-1 text-center'>Sign in with Naver</span>
    </button>
  );
};

export default NaverButton;

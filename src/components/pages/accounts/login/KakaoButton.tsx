import kakao from '../../../../assets/images/kakao.png';

const KakaoButton = () => {
  return (
    <button
      className='
      px-[26px] py-[13px] flex-1
      rounded-[9px] bg-[#FAE300]
      text-[16px] text-[#FFF]
      flex items-center justify-center
    '
    >
      <img className='w-[28px] h-[28px]' src={kakao} alt='' />
    </button>
  );
};

export default KakaoButton;

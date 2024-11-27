import { MapContainer } from 'components/pages/stores/search';

const StoreSearch = () => {
  return (
    <div
      className='
        w-full flex flex-col items-center justify-start
        h-[calc(100vh-72px)] bg-white px-[80px] py-[48px] z-10
      '
    >
      <div className='w-full max-w-[1260px] flex flex-row items center justify-start gap-[28px]'>
        <span
          className={`
            font-['CHAB'] text-[48px] text-[#23717D] font-[400] leading-[48px]
          `}
        >
          가게 찾기
        </span>
        <span className='text-[16px] leading-[24px] text-[#A6C1C5]'>
          나만의 레터링 케이크, 쉽고 간편하게!
          <br />내 주위 가게들을 둘러보아요!
        </span>
      </div>
      <MapContainer />
    </div>
  );
};

export default StoreSearch;

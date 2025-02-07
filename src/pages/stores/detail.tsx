import {
  StoreMainSection,
  StoreIntroSection,
  StoreProductsSection,
} from 'components/pages/stores/detail';
import { useEffect } from 'react';
import { useStoreDetailStore } from 'stores/stores/detail';
import { useParams } from 'react-router-dom';

const StoreDetail = () => {
  const { detail, load } = useStoreDetailStore();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      load(Number.parseInt(id));
    }
  }, []);

  if (!detail) {
    return <></>;
  }

  return (
    <div
      className='
        w-full flex flex-col items-center justify-start
        min-h-[calc(100vh-72px)] bg-white px-0 py-[48px] z-10
      '
    >
      <div className='max-w-[1440px] w-full flex flex-row items center justify-start gap-[28px] px-[80px]'>
        <span
          className={`
            font-['CHAB'] text-[48px] text-[#23717D] font-[400] leading-[48px]
          `}
        >
          가게 페이지
        </span>
        <span className='text-[16px] leading-[24px] text-[#A6C1C5]'>
          나만의 레터링 케이크, 쉽고 간편하게!
          <br />내 주위 가게들을 둘러보아요!
        </span>
      </div>
      <StoreMainSection name={detail.store.name} />
      <StoreIntroSection
        name={detail.store.name}
        intro={detail.store.etcStoreInfo}
      />
      <StoreProductsSection cakes={detail.cakes} />
    </div>
  );
};

export default StoreDetail;

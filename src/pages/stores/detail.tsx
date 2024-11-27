import {
  StoreMainSection,
  StoreIntroSection,
  StoreProductsSection,
  StoreReviewsSection,
} from 'components/pages/stores/detail';
import { useState } from 'react';
import { StoreProductBase } from 'types/store/product';
import { ReviewBase } from 'types/store/review';

const StoreDetail = () => {
  const [products] = useState<StoreProductBase[]>(
    [...Array(6)].map((_, idx) => ({
      id: idx,
      name: `Cake ${idx + 1}`,
      description:
        'Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit tortor eu.',
      price: 40000,
    }))
  );

  const [reviews] = useState<ReviewBase[]>(
    [...Array(4)].map((_, idx) => ({
      nickname: `User ${idx + 1}`,
      content: `우와 너무 예쁘고 맛있어요! 우리 아이 술안주로 정말 제격인 것 같아요! 우와 너무 예쁘고 맛있어요! 우리 아이 술안주로 정말 제격인 것 같아요! 우와 너무 예쁘고 맛있어요! 우리 아이 술안주로 정말 제격인 것 같아요!`,
    }))
  );

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
      <StoreMainSection name={'부산대 톤쇼우'} />
      <StoreIntroSection
        name={'부산대 톤쇼우'}
        intro={
          <>
            부산 최고의 베이커리. 50년 전통의 페이스트리!
            <br />
            최고의 케이크, 맞춤 주문제작 레터링 케이크!
            <br />
            <br />
            부산 연제구 교대로24번길
            <br />
            영업시간
            <br />
            휴일
            <br />
            전화번호
          </>
        }
      />
      <StoreProductsSection products={products} />
      <StoreReviewsSection reviews={reviews} />
    </div>
  );
};

export default StoreDetail;

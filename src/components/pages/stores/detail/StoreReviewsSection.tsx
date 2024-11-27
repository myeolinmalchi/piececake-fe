import { ReviewBase } from 'types/store/review';
import ReviewCard from './ReviewCard';

interface StoreReviewSectionProps {
  reviews: ReviewBase[];
}

const StoreProductsSection = ({ reviews }: StoreReviewSectionProps) => {
  return (
    <div className='w-full flex flex-col items-center justify-start py-[80px] relative'>
      <span
        className={`
          font-['CHAB'] text-[48px] text-[#23717D] font-[400] leading-[48px]
        `}
      >
        Customer Reviews
      </span>
      <span className='text-center text-[14px] font-[800] text-[#23717D] w-[calc(100%-360px)] border-b-[1px] border-[#23717D] leading-[14px] mt-[72px] py-[12px] max-w-[1260px]'>
        총 {reviews.length}개의 리뷰
      </span>
      <div
        className='
          w-full max-w-[1440px] px-[180px]
          flex flex-wrap items-center justify-center
          gap-x-[20px] mt-[40px]
        '
      >
        {reviews.map((review) => (
          <ReviewCard review={review} />
        ))}
      </div>
    </div>
  );
};

export default StoreProductsSection;

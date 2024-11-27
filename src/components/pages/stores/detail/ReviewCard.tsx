import { ReviewBase } from 'types/store/review';

interface ReviewCardProps {
  review: ReviewBase;
}

const ReviewCard = ({ review }: ReviewCardProps) => {
  const { content, nickname } = review;
  return (
    <div
      className='
      w-[calc(25%-16px)] h-[360px] px-[24px] py-[40px] rounded-[8px]
      bg-[linear-gradient(0deg,rgba(250,200,183,0.18)_0%,#FF8E7A_100%)]
      text-[12px] leading-[18px] text-white
    '
    >
      "{content}" - {nickname}
    </div>
  );
};

export default ReviewCard;

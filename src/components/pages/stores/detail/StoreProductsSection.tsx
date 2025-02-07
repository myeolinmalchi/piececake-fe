import ProductCard from './ProductCard';
import { CakeBase } from 'types/store/cake';

interface StoreProductsSectionProps {
  cakes: CakeBase[];
}

const StoreProductsSection = ({ cakes }: StoreProductsSectionProps) => {
  return (
    <div className='w-full flex flex-col items-center justify-start py-[80px] relative'>
      <span
        className={`
          font-['CHAB'] text-[48px] text-[#23717D] font-[400] leading-[48px]
        `}
      >
        판매중인 상품들
      </span>
      <span className='text-[16px] text-center text-[#23717D] leading-[20px] mt-[24px]'>
        케이크 디자인 선택하기!
        <br />
        선택 후 옵션 선택하여 나만의 케이크 주문하자
      </span>
      <div
        className='
          w-full max-w-[1440px] px-[180px]
          flex flex-wrap items-center justify-center
          gap-x-[24px] gap-y-[40px] mt-[48px]
        '
      >
        {cakes.map((cake) => (
          <ProductCard cake={cake} />
        ))}
      </div>
    </div>
  );
};

export default StoreProductsSection;

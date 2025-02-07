import plus from 'assets/images/plus.png';
import { Link } from 'react-router-dom';
import { CakeBase } from 'types/store/cake';

interface ProductCardProps {
  cake: CakeBase;
}

const ProductCard = ({ cake }: ProductCardProps) => {
  const { name, description, price, cakeImage } = cake;

  return (
    <div
      className='
      w-[calc(33.33%-18px)] rounded-[8px] pb-[24px]
      border-[1px] border-[#FF8E7A] gap-[24px] overflow-hidden
      flex items-center justify-start flex-wrap
    '
    >
      <img
        className='w-full aspect-[16/10] bg-[#F1F3F7] object-cover'
        src={cakeImage}
        alt=''
      />
      <span
        className='
          w-full px-[24px] text-start
          text-[#23717D] text-[18px] font-[800] leading-[24px]
        '
      >
        {name}
      </span>
      <span
        className='
          w-full px-[24px] text-start
          text-[#23717D] text-[16px] leading-[20px]
        '
      >
        {description}
      </span>
      <span
        className='
          pl-[24px] text-start flex-1
          text-[#23717D] text-[18px] font-[800] leading-[24px]
        '
      >
        {price}원
      </span>
      <Link
        to={`cakes/${cake.cakeId}`}
        className='mr-[24px] w-[34px] h-[34px] bg-[#23717D] rounded-[6px] flex items-center justify-center'
      >
        <img className='w-[12px] h-[12px]' src={plus} alt='' />
      </Link>
    </div>
  );
};

export default ProductCard;

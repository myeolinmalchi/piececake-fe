import { useState } from 'react';

interface OrderItemProps {
  name: string;
  store: string;
  date: string;
  quantity: number;
  basePrice: number;
  options: {
    name: string;
    price: number;
  }[];
}

const OrderItem = ({
  name,
  store,
  date,
  quantity,
  basePrice,
  options,
}: OrderItemProps) => {
  const [opened, setOpened] = useState(false);
  const totalPrice =
    `${basePrice + options.reduce((acc, e) => acc + e.price, 0)}`.replace(
      /\B(?=(\d{3})+(?!\d))/g,
      ','
    );

  return (
    <div
      className='
        w-full bg-white rounded-[16px]
        flex flex-col gap-0 items-center justify-center
      '
    >
      <div
        className={`
          w-[862px] h-[100px] pl-[20px] pr-[28px]
          flex flex-row items-center justify-between
          rounded-[16px] bg-white
          border-[1px] ${opened ? 'border-[#FF642F]' : 'border-[#FFF]'}
        `}
      >
        <img
          className='w-[84px] h-[84px] rounded-[84px] bg-gray-50'
          src=''
          alt=''
        />
        <div className='flex align-start flex-col gap-[4px]'>
          <span className='text-[#000] text-[16px] font-[800]'>{name}</span>
          <span className='text-[#000] text-[12px]'>{store}</span>
        </div>
        <span className='text-[16px] text-black'>{date}</span>
        <span className='text-[16px] text-black'>{quantity}</span>
        <span className='text-[16px] text-black'>₩{totalPrice}</span>

        <button
          onClick={() => setOpened((opened) => !opened)}
          className='w-[108px] h-[40px] bg-[#23717D] rounded-[40px] text-[12px] text-white'
        >
          상세내역
        </button>
      </div>
      {opened && (
        <>
          <div className='flex justify-between gap-[16px] items-start px-[24px] py-[20px] pb-[16px] w-full'>
            <img src='' alt='' className='w-[178px] h-[178px] rounded-[8px]' />
            <div className='flex flex-col justify-start items-center gap-[6px]'>
              {options.map(({ name, price }) => (
                <div
                  className='
                h-[40px] px-[20px] flex items-center justify-between w-[320px]
                rounded-[6px] bg-[#FF8E7A] shadow-[0px_1px_4px_0px_rgba(25,33,61,0.08)]
                text-[16px] text-white font-[600]
              '
                >
                  <span>{name}</span>
                  <span className={`after:content-['원']`}>
                    {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  </span>
                </div>
              ))}
            </div>
            <div className='flex-1 h-[180px] rounded-[6px] border-[1px] border-[#d8d8d8] bg-[#f9f9f9]'></div>
          </div>
          <div className='flex justify-end items-center gap-[16px] px-[20px] pb-[20px] w-full'>
            <span className='text-[rgba(173,173,173,0.87)] text-[12px]'>
              픽업 후 하루가 지나야 리뷰를 작성할 수 있습니다.
            </span>
            <button
              className='
                px-[32px] flex items-center justify-center
                h-[40px] rounded-[40px] bg-[#FF8E7A]
                text-white text-[12px]
              '
            >
              리뷰하기
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default OrderItem;

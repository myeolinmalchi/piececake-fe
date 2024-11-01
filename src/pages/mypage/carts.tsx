import { useState } from 'react';
import { CartItem, SubmitButton, TabContainer } from 'src/components';
import logo from 'assets/images/logo.png';

const MypageCarts = () => {
  const [items] = useState([
    {
      name: 'Designed Cake',
      store: '앱티브 케이크 하우스',
      basePrice: 20000,
      quantity: 1,
      options: [
        {
          name: 'option1',
          price: 1000,
        },
        {
          name: 'option2',
          price: 2000,
        },
      ],
    },
    {
      name: 'Designed Cake',
      store: '앱티브 케이크 하우스',
      basePrice: 20000,
      quantity: 1,
      options: [
        {
          name: 'option1',
          price: 1000,
        },
        {
          name: 'option2',
          price: 2000,
        },
      ],
    },
    {
      name: 'Designed Cake',
      store: '앱티브 케이크 하우스',
      basePrice: 20000,
      quantity: 3,
      options: [
        {
          name: 'option1',
          price: 1000,
        },
        {
          name: 'option2',
          price: 2000,
        },
      ],
    },
  ]);

  const totalPrice = items
    .reduce((acc, e) => {
      return (
        acc +
        (e.basePrice + e.options.reduce((acc, e) => acc + e.price, 0)) *
          e.quantity
      );
    }, 0)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return (
    <div
      className='
        w-[862px] mt-[10px]
        flex flex-col items-center justify-start
      '
    >
      <TabContainer />
      <div className='flex flex-col items-center justify-center mt-[60px]'>
        <img src={logo} className='w-[139px] mb-[12px]' alt='' />
        <span
          className={`
            font-['CHAB'] text-[48px] text-[#23717D] font-[400]
            leading-[48px] mb-[48px]
          `}
        >
          장바구니
        </span>
      </div>
      <div className='flex flex-col gap-[10px] items-center justify-center w-full'>
        {items.map((item) => (
          <CartItem {...item} />
        ))}
      </div>
      <div
        className='
          flex justify-end items-center 
          w-full h-[70px] rounded-[70px] 
          bg-white gap-[12px] mt-[40px] px-[64px]
        '
      >
        <span className='text-[16px] text-black'>
          총 {items.reduce((acc, e) => acc + e.quantity, 0)} 개의 상품 금액
        </span>
        <span className='text-[20px] text-black'>{totalPrice}원</span>
      </div>
      <SubmitButton className='self-end w-[340px] mt-[24px]'>
        결제하기
      </SubmitButton>
    </div>
  );
};

export default MypageCarts;

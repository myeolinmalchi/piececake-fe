import TabContainer from '../../components/pages/mypage/TabContainer';
import logo from '../../assets/images/logo.png';
import { useState } from 'react';
import CartItem from '../../components/pages/mypage/carts/CartItem';

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
  ]);

  const totalPrice = items
    .reduce((acc, e) => {
      return acc + e.basePrice + e.options.reduce((acc, e) => acc + e.price, 0);
    }, 0)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return (
    <>
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
      <div className='flex flex-col gap-[10px] items-center justify-center w-[862px]'>
        {items.map((item) => (
          <CartItem {...item} />
        ))}
      </div>
      <div className='flex justify-end items-center w-[862px] h-[70px] rounded-[70px] bg-white gap-[12px] mt-[40px] px-[64px]'>
        <span className='text-[16px] text-black'>
          총 {items.length} 개의 상품 금액
        </span>
        <span className='text-[20px] text-black'>{totalPrice}원</span>
      </div>
    </>
  );
};

export default MypageCarts;

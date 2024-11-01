import { TabContainer, OrderItem } from 'src/components';
import logo from 'assets/images/logo.png';
import { useState } from 'react';

const MypageOrders = () => {
  const [items] = useState([
    {
      name: 'Designed Cake',
      store: '앱티브 케이크 하우스',
      basePrice: 20000,
      quantity: 1,
      date: '2024.10.30',
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
      date: '2024.10.30',
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
      date: '2024.10.30',
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
          주문내역
        </span>
      </div>
      <div className='flex flex-col gap-[10px] items-center justify-center w-full'>
        {items.map((item) => (
          <OrderItem {...item} />
        ))}
      </div>
    </div>
  );
};

export default MypageOrders;

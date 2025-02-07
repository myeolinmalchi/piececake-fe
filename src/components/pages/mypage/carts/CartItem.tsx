import { useEffect, useState } from 'react';
import { useAuthStore } from 'stores/user/auth';
import { CartDetail } from 'types/user/cart';

interface CartItemProps {
  orderId: number;
  cakeName: string;
  cakeImage: string;
  storeName: string;
  quantity: number;
  total: number;
  handleDelete: () => Promise<void>;
}

const CartItem = ({
  orderId,
  cakeImage,
  cakeName,
  storeName,
  quantity,
  total,
  handleDelete,
}: CartItemProps) => {
  const [opened, setOpened] = useState(false);
  const [detail, setDetail] = useState<CartDetail | null>(null);
  const { accessToken } = useAuthStore();

  useEffect(() => {
    const run = async () => {
      const res = await fetch(
        `http://52.78.143.39:8080/order/detail/${orderId}`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (res.ok) {
        const data = await res.json();
        setDetail(data);
      } else {
        alert('장바구니 상세 정보를 불러오지 못했습니다.');
      }
    };
    if (opened && detail === null) {
      run();
    }
  }, [opened, detail]);

  return (
    <div
      className='
        w-full bg-white rounded-[16px]
        flex flex-col gap-0 items-center justify-center
      '
    >
      <div
        className={`
          w-[862px] h-[100px] px-[20px]
          flex flex-row items-center justify-between
          rounded-[16px] bg-white
          border-[1px] ${opened ? 'border-[#FF642F]' : 'border-[#FFF]'}
        `}
      >
        <img
          className='w-[84px] h-[84px] rounded-[84px] bg-gray-50'
          src={cakeImage}
          alt=''
        />
        <div className='flex align-start flex-col gap-[4px]'>
          <span className='text-[#000] text-[16px] font-[800]'>{cakeName}</span>
          <span className='text-[#000] text-[12px]'>{storeName}</span>
        </div>
        <button
          onClick={() => setOpened((opened) => !opened)}
          className='w-[108px] h-[40px] bg-[#23717D] rounded-[40px] text-[12px] text-white'
        >
          상세 옵션
        </button>
        <span className='text-[16px] text-black'>{quantity}</span>
        <span>₩ {total}</span>
        <button
          onClick={handleDelete}
          className='w-[92px] h-[40px] bg-[#FF5D5D] rounded-[40px] text-[16px] text-white'
        >
          제거
        </button>
      </div>
      {opened && detail && (
        <div className='flex justify-between gap-[16px] items-start px-[24px] py-[20px] w-full'>
          <img
            src={cakeImage}
            alt=''
            className='w-[178px] h-[178px] rounded-[8px] object-cover'
          />
          <div className='flex flex-col justify-start items-center gap-[6px]'>
            {detail.optionDtos.map(({ value, price }) => (
              <div
                className='
                h-[40px] px-[20px] flex items-center justify-between w-[320px]
                rounded-[6px] bg-[#FF8E7A] shadow-[0px_1px_4px_0px_rgba(25,33,61,0.08)]
                text-[16px] text-white font-[600]
              '
              >
                <span>{value}</span>
                <span className={`after:content-['원']`}>
                  {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </span>
              </div>
            ))}
          </div>
          <div className='p-4 text-gray-700 flex-1 h-[180px] rounded-[6px] border-[1px] border-[#d8d8d8] bg-[#f9f9f9]'>
            {detail.memo}
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItem;

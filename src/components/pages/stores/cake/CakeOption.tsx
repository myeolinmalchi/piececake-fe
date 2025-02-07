import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useAuthStore } from 'stores/user/auth';

type OptionType = {
  type: 'SIZE' | 'TASTE' | 'CREAM' | 'COLOR';
  value: string;
  price: number;
  seq?: number;
};

const OptionContainer = ({
  label,
  options,
  selected,
  setSelected,
}: {
  label: string;
  options: OptionType[];
  selected: number | null;
  setSelected: (seq: number) => void;
}) => {
  if (options.length === 0) {
    return <></>;
  }

  return (
    <>
      <span className='text-[#FF8E7A] text-[16px] font-[400] mt-[40px] mb-[16px]'>
        {label}
      </span>
      <div
        className='
        flex flex-col gap-[4px] items-center justify-start w-[100%]
      '
      >
        {options.map((o) => (
          <button
            onClick={() => setSelected(o?.seq ?? 0)}
            className={twMerge(
              'shadow-[0px_1px_4px_0px_rgba(25,33,61,0.08)] flex justify-between items-center text-[16px] font-[600] w-[100%] rounded-[6px] px-6 py-2',
              o.seq === selected && 'bg-[#FF8E7A] text-white',
              o.seq !== selected && ' text-gray-500'
            )}
          >
            <span>{o.value}</span>
            <span>
              {o.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
            </span>
          </button>
        ))}
      </div>
    </>
  );
};

type CakeOptionProps = {
  name: string;
  storeName?: string;
  storeId: string;
  cakeId?: number;
  description: string;
  price: number;
  options: OptionType[];
};

const CakeOption = ({
  name,
  storeName,
  storeId,
  cakeId,
  description,
  price,
  options,
}: CakeOptionProps) => {
  const optionsWithSeq = options.map((o, idx) => ({ ...o, seq: idx }));

  const sizeOptions = optionsWithSeq.filter((o) => o.type === 'SIZE');
  const tasteOptions = optionsWithSeq.filter((o) => o.type === 'TASTE');
  const creamOptions = optionsWithSeq.filter((o) => o.type === 'CREAM');
  const colorOptions = optionsWithSeq.filter((o) => o.type === 'COLOR');

  const [selected, setSelected] = useState({
    SIZE: null,
    TASTE: null,
    CREAM: null,
    COLOR: null,
  });

  const handleSelected =
    (type: 'SIZE' | 'TASTE' | 'CREAM' | 'COLOR') => (seq: number) => {
      setSelected({ ...selected, [type]: seq });
    };

  const sizeOption =
    selected.SIZE !== null
      ? optionsWithSeq.filter((o) => o.seq == selected.SIZE)[0]
      : null;
  const tasteOption =
    selected.TASTE !== null
      ? optionsWithSeq.filter((o) => o.seq == selected.TASTE)[0]
      : null;
  const creamOption =
    selected.CREAM !== null
      ? optionsWithSeq.filter((o) => o.seq == selected.CREAM)[0]
      : null;
  const colorOption =
    selected.COLOR !== null
      ? optionsWithSeq.filter((o) => o.seq == selected.COLOR)[0]
      : null;

  const totalOption: OptionType[] = [];
  let totalPrice: number = price;

  if (sizeOption) totalOption.push(sizeOption);
  if (tasteOption) totalOption.push(tasteOption);
  if (creamOption) totalOption.push(creamOption);
  if (colorOption) totalOption.push(colorOption);

  if (sizeOption) totalPrice += sizeOption.price;
  if (tasteOption) totalPrice += tasteOption.price;
  if (creamOption) totalPrice += creamOption.price;
  if (colorOption) totalPrice += colorOption.price;

  const [date, setDate] = useState<Date | null>(new Date());
  const [memo, setMemo] = useState('');

  const { accessToken, userId } = useAuthStore();

  const handleSubmit = (orderType: 'cart' | 'purchase') => async () => {
    const test =
      (sizeOptions.length === 0 || (sizeOptions.length > 0 && sizeOption)) &&
      (tasteOptions.length === 0 || (tasteOptions.length > 0 && tasteOption)) &&
      (creamOptions.length === 0 || (creamOptions.length > 0 && creamOption)) &&
      (colorOptions.length === 0 || (colorOptions.length > 0 && colorOption));

    if (!test) {
      alert('모든 옵션을 선택해주세요.');
      return;
    }

    const body = {
      cakeId,
      storeId,
      memberId: userId,
      options: totalOption,
      memo,
      total: totalPrice,
      pickUpTime: date,
      paymentStatus: orderType,
    };

    const res = await fetch(`http://52.78.143.39:8080/order/${cakeId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(body),
    });

    if (res.ok) {
      alert('주문 처리 되었습니다.');
    } else {
      alert('일시적인 오류가 발생했습니다.');
    }
  };

  return (
    <div className='w-[100%] flex flex-col justify-start items-start'>
      {storeName && (
        <span className='text-[#23717D] text-[14px] font-[600] leading-[20px]'>
          {storeName}
        </span>
      )}
      <span className='text-[#23717D] text-[24px] font-[900] mt-[12px]'>
        {name}
      </span>
      <span className='text-[#23717D] text-[18px] font-[800] mt-[16px]'>
        {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}₩
      </span>
      <span className='text-[#23717D] text-[16px] font-[400] mt-[12px]'>
        {description}
      </span>
      <OptionContainer
        options={sizeOptions}
        label='크기'
        selected={selected.SIZE}
        setSelected={handleSelected('SIZE')}
      />
      <OptionContainer
        options={tasteOptions}
        label='맛 종류'
        selected={selected.TASTE}
        setSelected={handleSelected('TASTE')}
      />
      <OptionContainer
        options={creamOptions}
        label='크림 종류'
        selected={selected.CREAM}
        setSelected={handleSelected('CREAM')}
      />
      <OptionContainer
        options={colorOptions}
        label='색상'
        selected={selected.COLOR}
        setSelected={handleSelected('COLOR')}
      />
      <span className='text-[#FF8E7A] text-[16px] font-[400] mt-[40px] mb-[16px]'>
        memo
      </span>
      <textarea
        value={memo}
        onChange={(e) => setMemo(e.target.value)}
        placeholder='메모를 추가하세요.'
        className='
          w-[100%] rounded-[6px] border-[1px] border-[#D8D8D8] bg-[#F9F9F9]
          resize-none h-[150px] outline-none focus:outline-none px-5 py-4
          text-[14px] font-[400] text-gray-800
        '
      ></textarea>

      <span className='text-[#FF8E7A] text-[16px] font-[400] mt-[40px] mb-[16px]'>
        픽업 날짜
      </span>
      <div className='w-[100%] cursor-pointer shadow-[0px_1px_4px_0px_rgba(25,33,61,0.08)] px-[20px] py-[16px]'>
        <DatePicker
          locale='kr'
          minDate={new Date()}
          dateFormat='M월 d일 H시 m분'
          onChange={(date) => setDate(date)}
          showTimeSelect
          selected={date}
        />
      </div>

      <div className='w-[100%] h-[40px] flex justify-between items-center bg-white shadow-[0px_1px_4px_0px_rgba(25,33,61,0.08)] px-[32px] mt-[32px] rounded-[46px]'>
        <span>총 가격</span>
        <span>
          {totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
        </span>
      </div>

      <div className='w-[100%] flex justify-between mt-[48px]'>
        <button className='flex-1' onClick={handleSubmit('cart')}>
          장바구니 추가
        </button>
        <button className='flex-1' onClick={handleSubmit('purchase')}>
          주문하기
        </button>
      </div>
    </div>
  );
};

export default CakeOption;

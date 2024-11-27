const StoreSearchField = () => {
  return (
    <div
      className='
        rounded-[6px] border-[1px] border-[#F1F3F7]
        w-full h-[40px] px-[12px] flex items-center
        shadow-[0px_1px_4px_0px_rgba(25,33,61,0.08)]
      '
    >
      <input
        type='text'
        className='
          text-black text-[12px] leading-[12px]
          w-full flex-1
          placeholder:text-9
        '
        placeholder='지역명, 상호명 입력하기'
      />
    </div>
  );
};

export default StoreSearchField;

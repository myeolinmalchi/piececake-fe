interface MainSectionProps {
  background?: string;
  logo?: string;
  name: string;
}

const StoreMainSection = ({ name }: MainSectionProps) => {
  return (
    <div className='w-full h-[388px] bg-none mt-[60px] relative'>
      <div className='w-full h-[320px] absolute z-0 bottom-0 left-0 bg-[#A6C1C5]'></div>
      <div
        className='
          w-[calc(100%-360px)] max-w-[1080px] mx-auto h-full
          border-[6px] border-white border-b-0 
          shadow-[0px_4px_35px_0px_rgba(0,0,0,0.08)]
          flex items-end justify-start gap-[24px] rounded-t-[40px]
          px-[36px] pb-[12px] z-50 relative bg-3
        '
      >
        <img
          className='w-[150px] h-[150px] rounded-[28px] bg-9'
          src=''
          alt=''
        />
        <span className='text-[64px] text-[#404040] font-[900]'>{name}</span>
      </div>
    </div>
  );
};

export default StoreMainSection;

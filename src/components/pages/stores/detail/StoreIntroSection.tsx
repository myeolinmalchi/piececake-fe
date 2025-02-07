import { ReactNode } from 'react';
import instagram from 'assets/images/instagram.png';
import icon from 'assets/images/store_detail_link.png';

interface StoreIntroSectionProps {
  name: string;
  intro: string | ReactNode;
  instagram?: string;
}

const StoreIntroSection = ({ intro, name }: StoreIntroSectionProps) => {
  return (
    <div className='w-full flex flex-col items-center justify-start py-[80px] relative'>
      <span
        className={`
          font-['CHAB'] text-[48px] text-[#23717D] font-[400] leading-[48px]
        `}
      >
        가게 소개글
      </span>
      <span className='text-[16px] text-center text-[#23717D] leading-[20px] mt-[24px]'>
        {intro}
      </span>
      <div
        className='
          w-[calc(100%-360px)] max-w-[1080px]
          px-[100px] py-[32px] flex justify-between items-center
          border-y-[1px] border-[#FAC8B7] mt-[32px] gap-[12px]
        '
      >
        <img src={icon} className='w-[40px] h-[40px]' alt='' />
        <span className='text-start flex-1 text-[18px] font-[600] text-[#23717D]'>
          {name}
        </span>
        <button className='w-[132px] h-[48px] bg-[#23717D] rounded-[8px] cursor-pointer text-[16px] text-white font-[600] flex items-center justify-center gap-[4px]'>
          <img className='w-[14px] h-[14px]' src={instagram} alt='' />
          <span>follow us</span>
        </button>
      </div>
    </div>
  );
};

export default StoreIntroSection;

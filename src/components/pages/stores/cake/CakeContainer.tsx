import { ReactNode } from 'react';

type CakeContainerProps = {
  label?: string;
  leftSection: ReactNode;
  rightSection: ReactNode;
};

const CakeContainer = ({
  label,
  leftSection,
  rightSection,
}: CakeContainerProps) => {
  return (
    <div className='flex flex-col items-center mt-[48px]'>
      {label && (
        <span
          className={`font-['CHAB'] text-[48px] text-[#23717D] font-[400] leading-[48px]`}
        >
          {label}
        </span>
      )}
      <div
        className='
        mt-[96px]
        max-w-[1080px] w-[100%] p-11 pr-[90px] rounded-[8px] border-[1px] border-[#E1E4ED]
        shadow-[0px_1px_4px_0px_rgba(25,33,61,0.08)] bg-white
        flex gap-[56px] mb-[120px]
      '
      >
        <div className='w-[520px]'>{leftSection}</div>
        <div className='w-[calc(100%-520px-56px)]'>{rightSection}</div>
      </div>
    </div>
  );
};

export default CakeContainer;

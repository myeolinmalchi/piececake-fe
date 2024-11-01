import { ReactNode } from 'react';

interface AccountContainerProps {
  children?: ReactNode;
  title: string;
  subtitle?: string | ReactNode;
}

const AccountContainer = ({
  children,
  title,
  subtitle,
}: AccountContainerProps) => {
  return (
    <div
      className='
        w-[540px] py-[41px] px-[44px] box-border rounded-[40px]
        lg-white shadow-[0px_4px_35px_0px_rgba(0,0,0,0.08)] bg-white
        flex flex-col justify-start items-center mt-[64px]
      '
    >
      <span
        className={`
          font-['CHAB'] text-[48px] text-[#23717D] font-[400]
          leading-normal
        `}
      >
        {title}
      </span>
      {subtitle && (
        <span
          className={`
            text-[12px] text-[#23717D] mt-[8px] text-center
          `}
        >
          {subtitle}
        </span>
      )}
      {children}
    </div>
  );
};

export default AccountContainer;

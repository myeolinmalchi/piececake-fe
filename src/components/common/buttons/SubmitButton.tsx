import { twMerge } from 'tailwind-merge';

interface SubmitButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const SubmitButton = ({ children, className, onClick }: SubmitButtonProps) => {
  return (
    <button
      className={twMerge(
        `w-full px-[24px] py-[18px] rounded-[10px] text-[16px] text-[#FFF]
        bg-[#FF8E7A] shadow-[0px_4px_19px_0px_rgba(119,147,65,0.30)]`,
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default SubmitButton;

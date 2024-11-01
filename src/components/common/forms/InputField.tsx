interface InputFieldProps {
  label?: string;
  placeholder?: string;
  className?: string;
  type?: 'text' | 'password' | 'email' | 'tel';
  status?: 'default' | 'disabled' | 'done';
  name?: string;
  buttonLabel?: string;
  buttonOnClick?: () => void;
}

const InputField = ({
  label,
  placeholder,
  className,
  type = 'text',
  status = 'default',
  name,
  buttonLabel,
  buttonOnClick,
}: InputFieldProps) => {
  return (
    <>
      <label className={`w-full ${className}`}>
        {label && (
          <p className='text-[16px] text-[#23717D] mb-[12px]'>{label}</p>
        )}
        <div
          className={`
            w-full pl-[24px] pr-[18px] py-0 rounded-[9px] h-[52px]
            border-[#FF8E7A] border-[1px] bg-white
            box-border flex items-center
          `}
        >
          <input
            className={`
              text-[12px] text-[#000]
              placeholder:text-[#808080] w-full flex-1
            `}
            disabled={status === 'disabled'}
            {...{
              type,
              name,
              placeholder,
            }}
          />
          {buttonLabel && (
            <button
              className='
              px-[12px] bg-[#23717D] rounded-[4px] h-[32px]
              shadow-[0px_1px_4px_0px_rgba(25,33,61,0.08)]
              text-white text-[12px] min-w-[64px]
            '
              onClick={buttonOnClick}
            >
              {buttonLabel}
            </button>
          )}
        </div>
      </label>
    </>
  );
};

export default InputField;

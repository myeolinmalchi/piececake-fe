import { ChangeEvent, ReactNode } from 'react';

interface InputFieldProps {
  label?: string;
  placeholder?: string;
  className?: string;
  type?: 'text' | 'password' | 'email' | 'tel';
  status?: 'default' | 'disabled' | 'done';
  name?: string;
  buttonLabel?: string;
  buttonOnClick?: () => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  readonly?: boolean;
  tabindex?: number;
  children?: ReactNode;
  value?: string | number;
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
  onChange,
  readonly,
  tabindex,
  children,
  value,
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
            border-[1px] bg-white relative
            box-border flex items-center
            focus-within:border-[#FF8E7A]
          `}
        >
          {children}
          <input
            value={value}
            readOnly={readonly}
            tabIndex={tabindex}
            onChange={onChange}
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

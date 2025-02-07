import { StoreBase } from 'types/store/store';
import { twMerge } from 'tailwind-merge';

interface StoreItemProps {
  store: StoreBase;
  onClick?: () => void;
  selected: boolean;
}

const StoreItem = ({ store, selected, onClick }: StoreItemProps) => {
  const { name, distance } = store;
  return (
    <div
      className={twMerge(
        `w-full p-[8px] h-[60px] rounded-[6px]
        flex items-center justify-between
        bg-white gap-[12px]
        shadow-[0px_1px_4px_0px_rgba(25,33,61,0.08)]
        cursor-pointer border-[1px]`,
        selected ? 'border-[#FF642F]' : 'border-white'
      )}
      onClick={onClick}
    >
      <img src='' alt='' className='w-[44px] h-[44px] rounded-[6px] bg-9' />
      <div
        className='
          flex-1 flex flex-wrap
          justify-between items-center
        '
      >
        <span className='text-[16px] text-black w-full text-start'>{name}</span>
        <span className='text-[10px] text-[#FF8E7A]'>
          {distance.toFixed(2)}km
        </span>
      </div>
    </div>
  );
};

export default StoreItem;

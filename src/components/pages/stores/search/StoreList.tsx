import { useStoreSearchStore } from 'stores/stores/list';
import StoreItem from './StoreItem';

const StoreList = () => {
  const { stores, currentIdx, setCurrentIdx } = useStoreSearchStore();

  return (
    <div
      className='
        w-full flex flex-col gap-[12px] overflow-y-auto
        items-center justify-start mt-[20px] flex-1
      '
    >
      {stores.map((store, idx) => (
        <StoreItem
          store={store}
          selected={idx === currentIdx}
          onClick={() => setCurrentIdx(idx)}
        />
      ))}
    </div>
  );
};

export default StoreList;

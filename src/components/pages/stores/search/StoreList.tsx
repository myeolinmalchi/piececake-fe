import StoreItem from './StoreItem';
import { useStoreSearchStore } from 'stores/store';

const StoreList = () => {
  const {
    stores,
    currentIdx,
    actions: { setCurrentIdx },
  } = useStoreSearchStore();

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

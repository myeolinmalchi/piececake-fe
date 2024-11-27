import StoreList from './StoreList';
import StoreSearchField from './StoreSearchField';

const StoreSearchContainer = () => {
  return (
    <div
      className='
        w-[320px] h-[calc(100%+20px)] rounded-[40px]
        bg-white shadow-[0px_4px_35px_0px_rgba(0,0,0,0.08)]
        flex flex-col items-center justify-start
        top-[-10px] left-[-10px] absolute
        px-[32px] py-[36px] z-[100]
      '
    >
      <StoreSearchField />
      <StoreList />
    </div>
  );
};

export default StoreSearchContainer;

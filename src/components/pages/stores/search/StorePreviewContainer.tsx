import { Link } from 'react-router-dom';
import { useStoreSearchStore } from 'stores/stores/list';

const StorePreviewContainer = () => {
  const { stores, currentIdx: idx } = useStoreSearchStore();
  const currentStore = idx != null && idx < stores.length ? stores[idx] : null;

  if (currentStore == null) return <></>;

  return (
    <div
      className='
        w-[calc(100%-310px-20px)]
        absolute bottom-[10px] right-[10px] rounded-[40px]
        bg-white shadow-[0px_4px_35px_0px_rgba(0,0,0,0.08)]
        border-[1px] border-[#FF642F] z-50
        flex items-end justify-between flex-wrap
        px-[44px] pb-[32px] pt-[24px] gap-y-[20px]
      '
    >
      <img
        className='w-[95px] h-[95px] rounded-[28px] bg-9 mr-[20px]'
        src=''
        alt=''
      />
      <span className='text-[#404040] text-[32px] font-[900] w-[calc(100%-112px-115px)]'>
        {currentStore.name}
      </span>
      <Link
        to={`/stores/${idx}`}
        className='
          rounded-full w-[112px] h-[36px]
          bg-[#23717D] text-white text-[12px]
          flex items-center justify-center
        '
      >
        가게 페이지로
      </Link>
      <div className='w-[25%] aspect-square bg-4'></div>
      <div className='w-[25%] aspect-square bg-3'></div>
      <div className='w-[25%] aspect-square bg-4'></div>
      <div className='w-[25%] aspect-square bg-3'></div>
    </div>
  );
};

export default StorePreviewContainer;

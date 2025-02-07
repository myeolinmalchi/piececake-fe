import { Map, MapMarker } from 'react-kakao-maps-sdk';
import pin from 'assets/images/pin.png';
import StoreList from './StoreList';
import StoreSearchField from './StoreSearchField';
import StorePreviewContainer from './StorePreviewContainer';
import { useStoreSearchStore } from 'stores/stores/list';
import usePosition from 'src/hooks/stores/usePosition';

const MapContainer = () => {
  const { stores, currentIdx, setCurrentIdx } = useStoreSearchStore();
  const { pos } = usePosition();

  const currentStore = currentIdx ? stores[currentIdx] : null;
  const centerPos = currentStore
    ? {
        lat: currentStore.latitude - 0.001,
        lng: currentStore.longitude,
      }
    : (pos ?? {
        lat: 37.54699,
        lng: 127.09598,
      });

  return (
    <div
      className='
        max-w-[1260px] w-[calc(100vw-160px)] flex-1 h-[calc(100vh-186px-120px)]
        rounded-[40px] bg-white shadow-[0px_4px_35px_0px_rgba(0,0,0,0.08)]
        border-[10px] border-white box-border relative mt-[32px]
      '
    >
      <Map
        center={centerPos}
        isPanto={true}
        className='w-[calc(100%-310px+30px)] h-full rounded-r-[40px] absolute right-0'
        level={3}
      >
        {stores.map(({ latitude, longitude }, idx) => (
          <MapMarker
            position={{
              lat: latitude,
              lng: longitude,
            }}
            image={{
              src: pin,
              size:
                currentIdx === idx
                  ? { width: 30.8 * 1.2, height: 35.7 * 1.2 }
                  : { width: 30.8, height: 35.7 },
            }}
            onClick={() => setCurrentIdx(idx)}
          />
        ))}
      </Map>
      <StorePreviewContainer />
      <div
        className='
          w-[320px] h-[calc(100%+20px)] rounded-[40px]
          bg-white shadow-[0px_4px_35px_0px_rgba(0,0,0,0.08)]
          flex flex-col items-center justify-start
          top-[-10px] left-[-10px] absolute
          px-[32px] py-[36px] z-[100]
        '
      >
        <span
          className={`
            font-['CHAB'] text-[48px] text-[#23717D] font-[400] leading-[48px] mb-[24px]
          `}
        >
          가게 찾기
        </span>
        <StoreSearchField />
        <StoreList />
      </div>
    </div>
  );
};

export default MapContainer;

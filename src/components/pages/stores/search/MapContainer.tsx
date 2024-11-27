import { Map, MapMarker } from 'react-kakao-maps-sdk';
import pin from 'assets/images/pin.png';
import StoreList from './StoreList';
import StoreSearchField from './StoreSearchField';
import { useStoreSearchStore } from 'stores/store';
import StorePreviewContainer from './StorePreviewContainer';

const MapContainer = () => {
  const {
    stores,
    actions: { setCurrentIdx },
  } = useStoreSearchStore();
  return (
    <div
      className='
        max-w-[1260px] w-[calc(100vw-160px)] flex-1 h-[calc(100vh-186px-120px)]
        rounded-[40px] bg-white shadow-[0px_4px_35px_0px_rgba(0,0,0,0.08)]
        border-[10px] border-white box-border relative mt-[32px]
      '
    >
      <Map
        center={{
          lat: 37.54699,
          lng: 127.09598,
        }}
        className='w-[calc(100%-310px+30px)] h-full rounded-r-[40px] absolute right-0'
        level={3}
      >
        {stores.map(({ position }, idx) => (
          <MapMarker
            position={position}
            image={{ src: pin, size: { width: 30.8, height: 35.7 } }}
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
        <StoreSearchField />
        <StoreList />
      </div>
    </div>
  );
};

export default MapContainer;

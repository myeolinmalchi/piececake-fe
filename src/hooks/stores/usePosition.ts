import { useLayoutEffect } from 'react';
//import { usePositionStore } from 'stores/user/position';
import { useStoreSearchStore } from 'stores/stores/list';
import { useAuthStore } from 'stores/user/auth';

const usePosition = () => {
  //const { pos, setPos } = usePositionStore();
  const { search } = useStoreSearchStore();
  const { accessToken, latitude, longitude } = useAuthStore();

  useLayoutEffect(() => {
    /**
    if (!accessToken) {
      return;
    }

    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((pos) => {
        setPos(pos.coords.latitude, pos.coords.longitude);
      });
    }

    const unsubscribe = usePositionStore.subscribe((newState) => {
      if (newState.pos) {
        const {
          pos: { lat, lng },
        } = newState;
        search(lat, lng);
      }
    });

    return () => unsubscribe();
    */

    if (latitude && longitude) {
      search(latitude, longitude);
    }
  }, [latitude, accessToken, longitude]);

  if (latitude && longitude) {
    return {
      pos: {
        lat: latitude,
        lng: longitude,
      },
    };
  }

  return {
    pos: null,
  };
};

export default usePosition;

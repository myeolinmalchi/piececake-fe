import { useAuthStore } from 'stores/user/auth';
import { StoreBase } from 'types/store/store';
import { create } from 'zustand';

interface StoreSearchState {
  stores: StoreBase[];
  currentIdx: number | null;
  setCurrentIdx: (idx: number) => void;
  search: (latitude: number, longitude: number) => Promise<void>;

  resetStores: () => void;
  resetIdx: () => void;
}

export const useStoreSearchStore = create<StoreSearchState>((set) => ({
  stores: [],
  currentIdx: null,
  setCurrentIdx: (idx: number) => set((prev) => ({ ...prev, currentIdx: idx })),
  search: async (latitude: number, longitude: number) => {
    const url = new URL('http://52.78.143.39:8080/public/stores/location');
    url.searchParams.set('latitude', latitude.toString());
    url.searchParams.set('longitude', longitude.toString());

    const { accessToken, logout } = useAuthStore.getState();

    if (!accessToken) {
      return;
    }

    const res = await fetch(url.toString(), {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (res.status === 200) {
      const data: StoreBase[] = await res.json();
      set((prev) => ({ ...prev, stores: data }));
    } else if (res.status === 401) {
      alert('로그인 후 이용하세요.');
      logout();
    } else if (res.status === 404) {
      alert('가게를 찾을 수 없습니다.');
    } else {
      alert('일시적인 오류가 발생했습니다. 잠시 후 다시 시도하세요.');
    }
  },
  resetStores: () => set((prev) => ({ ...prev, stores: [], currentIdx: null })),
  resetIdx: () => set((prev) => ({ ...prev, currentIdx: null })),
}));

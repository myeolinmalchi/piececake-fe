import { StoreBase } from 'types/store/store';
import { create } from 'zustand';

interface StoreSearchState {
  stores: StoreBase[];
  currentIdx: number | null;
}

interface StoreSearchAction {
  actions: {
    setCurrentIdx: (idx: number) => void;
  };
}

const initialState = {
  stores: [...Array(10)].map((_, idx) => ({
    name: `local cake store ${idx}`,
    rating: 4.8,
    distance: 0.8,
    position: {
      lat: 37.54699,
      lng: 127.09598,
    },
    id: idx,
  })),
  currentIdx: null,
};

export const useStoreSearchStore = create<StoreSearchState & StoreSearchAction>(
  (set) => {
    return {
      ...initialState,
      actions: {
        setCurrentIdx: (idx: number) =>
          set(({ stores, currentIdx }) => ({
            currentIdx: idx >= stores.length ? currentIdx : idx,
            stores,
          })),
      },
    };
  }
);

export const useSearchedStores = () =>
  useStoreSearchStore(({ stores }) => stores);
export const useCurrentStore = () =>
  useStoreSearchStore(({ stores, currentIdx }) => ({
    currentStore: currentIdx ? stores[currentIdx] : null,
    currentIdx,
  }));
export const useStoreSearchActions = () =>
  useStoreSearchStore(({ actions }) => actions);

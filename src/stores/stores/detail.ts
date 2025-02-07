import { StoreDetail } from 'types/store/store';
import { useAuthStore } from 'stores/user/auth';
import { create } from 'zustand';
import { CakeBase, CakeDetail } from 'types/store/cake';

interface StoreDetailState {
  detail: {
    store: StoreDetail;
    cakes: CakeBase[];
  } | null;
  load: (storeId: number) => Promise<void>;
}

export const useStoreDetailStore = create<StoreDetailState>((set) => ({
  detail: null,
  load: async (storeId: number) => {
    const { accessToken } = useAuthStore.getState();

    if (!accessToken) {
      return;
    }

    const storePromise = fetch(
      `http://52.78.143.39:8080/public/stores/${storeId}/info`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    const cakeListPromise = fetch(
      `http://52.78.143.39:8080/public/cakes/${storeId}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    const [storeRes, cakeListRes] = await Promise.all([
      storePromise,
      cakeListPromise,
    ]);

    if (storeRes.status === 401 || cakeListRes.status === 401) {
      alert('로그인 후 이용하세요.');
      return;
    }

    if (storeRes.status === 404) {
      alert('가게를 찾을 수 없습니다.');
      return;
    }

    if (storeRes.status !== 200 || cakeListRes.status !== 200) {
      alert('일시적인 오류가 발생했습니다. 잠시 후 다시 시도하세요.');
      return;
    }

    const store: StoreDetail = await storeRes.json();
    const cakes: CakeBase[] = await cakeListRes.json();

    const cakePricePromise = cakes.map(async (c) => {
      const res = await fetch(
        `http://52.78.143.39:8080/public/cakes/detail/${c.cakeId}`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      const result: CakeDetail = await res.json();
      return result.price;
    });

    const priceRes = await Promise.all(cakePricePromise);

    const finalCakes = cakes.map((c, idx) => ({
      ...c,
      price: priceRes[idx],
    }));

    const detail = {
      store,
      cakes: finalCakes,
    };

    set((prev) => ({ ...prev, detail }));
  },
}));

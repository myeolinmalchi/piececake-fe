import { useAuthStore } from 'stores/user/auth';
import type { CartItem, CartResponse } from 'types/user/cart';
import { create } from 'zustand';

interface OrderState {
  items: CartItem[];
  page: number | null;
  setPage: (page: number) => void;
  loadOrder: () => Promise<void>;
  resetOrder: () => void;
  resetPage: () => void;
}

export const useOrderStore = create<OrderState>((set) => ({
  items: [],
  page: null,
  setPage: (page: number) => set((prev) => ({ ...prev, page: page })),
  loadOrder: async () => {
    const { accessToken, userId, logout } = useAuthStore.getState();
    console.log(accessToken);
    if (!accessToken) return;

    const res = await fetch(
      `http://52.78.143.39:8080/order/${userId}?payment=purchase`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (res.status === 200) {
      const data: CartResponse = await res.json();
      set((prev) => ({ ...prev, items: data.content }));
    } else if (res.status === 401) {
      alert('로그인 후 이용하세요.');
      logout();
    } else if (res.status === 404) {
      alert('가게를 찾을 수 없습니다.');
    } else {
      alert('일시적인 오류가 발생했습니다. 잠시 후 다시 시도하세요.');
    }
  },
  resetOrder: () => set((prev) => ({ ...prev, items: [], page: null })),
  resetPage: () => set((prev) => ({ ...prev, page: null })),
}));

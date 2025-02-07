import { useAuthStore } from 'stores/user/auth';
import type { CartItem, CartResponse } from 'types/user/cart';
import { create } from 'zustand';

interface CartState {
  items: CartItem[];
  page: number | null;
  setPage: (page: number) => void;
  deleteCart: (orderId: number) => Promise<void>;
  loadCart: () => Promise<void>;
  resetCart: () => void;
  resetPage: () => void;
}

export const useCartStore = create<CartState>((set) => ({
  items: [],
  page: null,
  setPage: (page: number) => set((prev) => ({ ...prev, page: page })),
  deleteCart: async (orderId: number) => {
    const { accessToken, userId, logout } = useAuthStore.getState();
    if (!accessToken) return;
    const res = await fetch(
      `http://52.78.143.39:8080/order/${userId}/${orderId}?payment=cart`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (res.status === 200) {
      set((prev) => {
        const items = prev.items.filter((item) => item.orderId !== orderId);
        return {
          ...prev,
          items,
        };
      });
    } else if (res.status === 401) {
      alert('로그인 후 이용하세요.');
      logout();
    } else if (res.status === 404) {
      alert('존재하지 않는 주문번호입니다.');
    } else {
      alert('일시적인 오류가 발생했습니다. 잠시 후 다시 시도하세요.');
    }
  },
  loadCart: async () => {
    const { accessToken, userId, logout } = useAuthStore.getState();
    console.log(accessToken);
    if (!accessToken) return;

    const res = await fetch(
      `http://52.78.143.39:8080/order/${userId}?payment=cart`,
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
  resetCart: () => set((prev) => ({ ...prev, items: [], page: null })),
  resetPage: () => set((prev) => ({ ...prev, page: null })),
}));

import { create } from 'zustand';

interface AuthState {
  accessToken: string | null;
  userId: number | null;
  longitude: number | null;
  latitude: number | null;
  setAccessToken: (at: string) => void;
  logout: () => void;
  login: (id: string, pw: string) => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  accessToken: localStorage.getItem('ACCESS_TOKEN') ?? null,
  userId: Number.parseInt(localStorage.getItem('USER_ID') ?? '-1'),
  longitude: Number.parseFloat(localStorage.getItem('longitude') ?? '-1'),
  latitude: Number.parseFloat(localStorage.getItem('latitude') ?? '-1'),
  setAccessToken: (at: string) => set((prev) => ({ ...prev, accessToken: at })),
  logout: () =>
    set((prev) => {
      localStorage.removeItem('ACCESS_TOKEN');
      return { ...prev, accessToken: null };
    }),
  login: async (id: string, pw: string) => {
    const res = await fetch('http://52.78.143.39:8080/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        loginId: id,
        loginPwd: pw,
      }),
    });

    if (res.status === 200) {
      const body = await res.json();
      const at: string = body['accessToken'];
      const userId: number = body['userId'];
      const latitude: number = body['latitude'];
      const longitude: number = body['longitude'];
      console.log(body);
      set((prev) => {
        localStorage.setItem('ACCESS_TOKEN', at);
        localStorage.setItem('USER_ID', `${userId}`);
        localStorage.setItem('latitude', `${latitude}`);
        localStorage.setItem('longitude', `${longitude}`);
        return { ...prev, accessToken: at, userId, latitude, longitude };
      });
    } else if (res.status === 400) {
      alert('아이디(이메일)을 확인해주세요.');
    } else if (res.status === 404) {
      alert('회원을 찾을 수 없습니다.');
    }
  },
}));

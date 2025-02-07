type CartItem = {
  orderId: number;
  storeName: string;
  cakeName: string;
  cakeImage: string;
  quantity: number;
  pickUpTime: Date;
  total: number;
  date?: string;
};

type CartDetail = {
  orderId: number;
  memo: string;
  optionDtos: {
    type: 'SIZE' | 'TASTE' | 'CREAM' | 'COLOR' | 'ETC';
    value: string;
    price: number;
  }[];
};

type CartResponse = {
  content: CartItem[];
};

export type { CartResponse, CartItem, CartDetail };

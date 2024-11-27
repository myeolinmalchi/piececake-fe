interface StoreProductBase {
  id: number;
  thumbnail?: string;
  name: string;
  description: string;
  price: number;
}

interface StoreProductDetail extends Omit<StoreProductBase, 'thumbnail'> {
  storeName: string;
  options: {
    category: string;
    item: {
      name: string;
      price: string;
    }[];
  }[];
}

export type { StoreProductBase, StoreProductDetail };

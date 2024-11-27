import { StoreProductBase } from './product.ts';

interface StoreBase {
  logo?: string;
  name: string;
  rating: number;
  distance: number;
  position: {
    lat: number;
    lng: number;
  };
  images?: string[];
  id: number;
}

interface StoreDetail extends StoreBase {
  backgroundImage?: string;
  description?: string;
  items: StoreProductBase[];
}

export type { StoreBase, StoreDetail };

interface StoreBase {
  storeId: number;
  name: string;

  longitude: number;
  latitude: number;

  distance: number;
  cakeImages: string[];
}

interface StoreDetail {
  storeId: number;
  name: string;

  address: string;
  contact: string;
  etcStoreInfo: string;
  snsLink: string;
  bannerImage: string;
  logoImage?: string;
}

export type { StoreBase, StoreDetail };

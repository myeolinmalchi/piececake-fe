type CakeBase = {
  cakeId: number;
  cakeName?: string;
  name?: string;
  description: string;
  cakeImage: string;
  price: number;
};

type CakeDetail = CakeBase & {
  optionDtos: {
    type: 'SIZE' | 'TASTE' | 'CREAM' | 'COLOR';
    value: string;
    price: number;
  }[];
};

export type { CakeDetail, CakeBase };

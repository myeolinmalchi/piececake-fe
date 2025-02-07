import { useLayoutEffect } from 'react';
import { useOrderStore } from 'stores/stores/orders';

const useOrders = () => {
  const { items, loadOrder } = useOrderStore();

  useLayoutEffect(() => {
    loadOrder();
  }, []);

  return {
    items,
  };
};

export default useOrders;

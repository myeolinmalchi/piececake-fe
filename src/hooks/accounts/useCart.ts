import { useLayoutEffect } from 'react';
import { useCartStore } from 'stores/stores/carts';

const useCart = () => {
  const { items, loadCart, deleteCart } = useCartStore();
  const handleDelete = (orderId: number) => () => deleteCart(orderId);

  useLayoutEffect(() => {
    loadCart();
  }, []);

  return {
    items,
    handleDelete,
  };
};

export default useCart;

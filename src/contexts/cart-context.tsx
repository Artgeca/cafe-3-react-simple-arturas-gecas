import * as React from 'react';
import { useState, useMemo } from 'react';

interface Props {
  children: React.ReactNode
}

interface CartItemInterface {
  id: number,
  count: number
}

interface CartContextValueInterface {
  cartItems: CartItemInterface[],
  cartItemsCount: number,
  getCartItemCount: (id: number) => void,
  addCartItem: (item: CartItemInterface) => void,
  changeCartItemCount: (item: CartItemInterface) => void,
  deleteCartItem: (id: number) => void
}

const CartContext = React.createContext({});

export const CartProvider: React.FC<Props> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItemInterface[]>([]);

  const cartContextValue = useMemo<CartContextValueInterface>(() => ({
    cartItems,

    cartItemsCount: cartItems.reduce((sum, { count }) => sum + count, 0),

    getCartItemCount: (id) => cartItems.find((item) => item.id === id)?.count ?? 0,

    addCartItem: ({ id, count }) => setCartItems([...cartItems, { id, count }]),

    changeCartItemCount: ({ id, count }) => setCartItems(
      cartItems.map((x) => (x.id === id ? { id, count } : x)),
    ),

    deleteCartItem: (id) => setCartItems(cartItems.filter((x) => x.id !== id)),
  }), [cartItems, setCartItems]);

  return (
    <CartContext.Provider value={cartContextValue}>{children}</CartContext.Provider>
  );
};

export default CartContext;

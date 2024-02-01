import { ReactNode, createContext, useState } from "react";
import { Coffee } from "../pages/Home/components/CoffeCard";

export interface CartItem extends Coffee {
  quantity: number;
}

interface CartContentType {
  cartItems: CartItem[];
}

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContentType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [ cartItems, setCartItems ] = useState<CartItem[]>([]);
  return (
    <CartContext.Provider value={{ cartItems }}>
      {children}
    </CartContext.Provider>
  )
}
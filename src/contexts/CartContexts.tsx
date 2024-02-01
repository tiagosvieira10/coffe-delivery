import { ReactNode, createContext, useState } from "react";
import { Coffee } from "../pages/Home/components/CoffeCard";
import { produce } from 'immer'

export interface CartItem extends Coffee {
  quantity: number;
}

interface CartContentType {
  cartItems: CartItem[];
  cartQuantity: number;
  addCoffeeToCart: (coffee: CartItem) => void;
}

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContentType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [ cartItems, setCartItems ] = useState<CartItem[]>([]);

  const cartQuantity = cartItems.length;

  function addCoffeeToCart(coffee: CartItem) {
    const coffeeAlReadyExistInCart = cartItems.findIndex(
      (cartItem) => cartItem.id === coffee.id
    );

    const newCart = produce(cartItems, (draft) => {
      if(coffeeAlReadyExistInCart < 0) {
        draft.push(coffee);
      } else {
        draft[coffeeAlReadyExistInCart]. quantity += coffee.quantity
      }
    });

    setCartItems(newCart)
  }

  return (
    <CartContext.Provider value={{ cartItems, cartQuantity, addCoffeeToCart }}>
      {children}
    </CartContext.Provider>
  )
}
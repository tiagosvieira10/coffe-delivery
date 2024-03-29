import { ShoppingCart } from "@phosphor-icons/react";
import { ButtonCount } from "../ButtonQuantidade";
import { Coffe, CoffeItens, CoffePrice } from "./styles";
import { formatMoney } from "../../../../utils/formatMoney";
import { useCart } from "../../../../hooks/useCarts";
import { useState } from "react";

export interface Coffee {
  id: number;
  tags: string[];
  name: string;
  description: string;
  photo: string;
  price: number;
  data: string;
}

interface CoffeeProps {
  coffee: Coffee
}

export function CoffeCard({ coffee }: CoffeeProps) {
  const [quantity, setQuantity] = useState(1);

  function handleIncrease() {
    setQuantity(state => state + 1)
  }

  function handleDecrease() {
    setQuantity(state => state - 1)
  }

  const { addCoffeeToCart } = useCart()

  function handleAddToCart() {
    const coffeeToAdd = {
      ...coffee,
      quantity,
    }

    addCoffeeToCart(coffeeToAdd)
  }
  const formattedPrice = formatMoney(coffee.price);

  return(
    <Coffe>
    <img src={`/coffees/${coffee.photo}`} alt="" />
    <CoffeItens>
      <button className="itensPreparo">
        {coffee.tags.map((tag) => (
          <p key={`${coffee.id}${tag}`}>{tag}</p>
        ))}
      </button>
    </CoffeItens>
    <h4>{coffee.name}</h4>
    <span>{coffee.description}</span>

    <CoffePrice>
      <h5><strong>R$</strong>{formattedPrice}</h5>
      <ButtonCount
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
        quantity={quantity}
      />
      <button onClick={handleAddToCart}>
        <ShoppingCart weight="fill" size={22}/>
      </button>
    </CoffePrice>
    <p className="data">{coffee.data}</p>
    </Coffe>
  )
}


import { ShoppingCart } from "@phosphor-icons/react";
import { ButtonCount } from "../ButtonQuantidade";
import { Coffe, CoffeItens, CoffePrice } from "./styles";
import { formatMoney } from "../../../../utils/formatMoney";

export interface Coffee {
  id: number;
  tags: string[];
  name: string;
  description: string;
  photo: string;
  price: number;
}

interface CoffeeProps {
  coffee: Coffee
}

export function CoffeCard({ coffee }: CoffeeProps) {
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
      <ButtonCount/>
      <button>
        <ShoppingCart weight="fill" size={22}/>
      </button>
    </CoffePrice>
    </Coffe>
  )
}


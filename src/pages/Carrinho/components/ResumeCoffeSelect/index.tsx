import { Trash } from "@phosphor-icons/react"
// import { ButtonCount } from "../../../Home/components/ButtonQuantidade"
import { ResumoCoffeSelect, CoffeSelectContainer, DescriptionCoffeSelected, ActionForCoffeSelected } from "./styles"
import { CartItem } from "../../../../contexts/CartContexts"
import { formatMoney } from "../../../../utils/formatMoney"
import { ButtonCount } from "../../../Home/components/ButtonQuantidade"

interface CoffeeCartCardProps {
  coffee: CartItem
}

export function ResumeCoffeSelect({ coffee }: CoffeeCartCardProps) {
  const coffeeTotal = coffee.price * coffee.quantity;
  const formattedPrice = formatMoney(coffeeTotal);
  return(
    <ResumoCoffeSelect>
      <CoffeSelectContainer>
        <img src={`/coffees/${coffee.photo}`} alt="" />
        <DescriptionCoffeSelected>
          <span>{coffee.name}</span>

          <ActionForCoffeSelected>
            <ButtonCount quantity={coffee.quantity}/>
            <button className="remover">
              <Trash color="#F67828" size={17}/>
              REMOVER
            </button>
          </ActionForCoffeSelected>
        </DescriptionCoffeSelected>
      </CoffeSelectContainer>
      <h5>R$ {formattedPrice}</h5>
    </ResumoCoffeSelect>
  )
}
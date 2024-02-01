import { Trash } from "@phosphor-icons/react"
// import { ButtonCount } from "../../../Home/components/ButtonQuantidade"
import { ResumoCoffeSelect, CoffeSelectContainer, DescriptionCoffeSelected, ActionForCoffeSelected } from "./styles"
import { CartItem } from "../../../../contexts/CartContexts"
import { formatMoney } from "../../../../utils/formatMoney"
import { ButtonCount } from "../../../Home/components/ButtonQuantidade"
import { useCart } from "../../../../hooks/useCarts"

interface CoffeeCartCardProps {
  coffee: CartItem
}

export function ResumeCoffeSelect({ coffee }: CoffeeCartCardProps) {
  const {changeCartItemQuantity, removeCartItem} = useCart();

  function handleIncrease(){
    changeCartItemQuantity(coffee.id, "increase")
  }

  function handleDecrease(){
    changeCartItemQuantity(coffee.id, "decrease")
  }

  function handleRemove(){
    removeCartItem(coffee.id);
  }

  const coffeeTotal = coffee.price * coffee.quantity;
  const formattedPrice = formatMoney(coffeeTotal);
  return(
    <ResumoCoffeSelect>
      <CoffeSelectContainer>
        <img src={`/coffees/${coffee.photo}`} alt="" />
        <DescriptionCoffeSelected>
          <span>{coffee.name}</span>

          <ActionForCoffeSelected>
            <ButtonCount onIncrease={handleIncrease} onDecrease={handleDecrease} quantity={coffee.quantity}/>
            <button className="remover" onClick={handleRemove}>
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
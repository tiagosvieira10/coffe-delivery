import { Link } from "react-router-dom";
import { CoffeSelect, ResumoPedido } from "./styles";
import { ResumeCoffeSelect } from "../ResumeCoffeSelect";
import { ResumeValue } from "../ResumeValue";
import { useCart } from "../../../../hooks/useCarts";

export function CoffeesSelected() {
  const { cartItems, cartQuantity, cleanCart } = useCart();
  return(
    <CoffeSelect>
          <h4>Cafés selecionados</h4>

           <ResumoPedido>
            {cartItems.map(item => (
              <ResumeCoffeSelect key={item.id} coffee={item}/>
            ))}
           <ResumeValue/>
            <Link to='/confirmation' className="confirmarPedido">
              <button disabled= {cartQuantity <= 0} onClick={cleanCart}>CONFIRMAR PEDIDO</button>
            </Link>
          </ResumoPedido>
        </CoffeSelect>
  )
}
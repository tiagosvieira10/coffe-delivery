import { Link } from "react-router-dom";
import { CoffeSelect, ResumoPedido } from "./styles";
import { ResumeCoffeSelect } from "../ResumeCoffeSelect";
import { ResumeValue } from "../ResumeValue";
import { useCart } from "../../../../hooks/useCarts";

export function CoffeesSelected() {
  const { cartItems } = useCart();
  return(
    <CoffeSelect>
          <h4>Cafés selecionados</h4>

           <ResumoPedido>
            {cartItems.map(item => (
              <ResumeCoffeSelect key={item.id} coffee={item}/>
            ))}
           <ResumeValue/>
            <Link to='/confirmation' className="confirmarPedido">
              <button>CONFIRMAR PEDIDO</button>
            </Link>
          </ResumoPedido>
        </CoffeSelect>
  )
}
import { useCart } from "../../../../hooks/useCarts";
import { formatMoney } from "../../../../utils/formatMoney";
import { ResumoValueSelect } from "./styles";

const DELIVERY_PRICE = 5.0

export function ResumeValue() {
  const { cartItemsTotal } = useCart();
  const cartTotal = DELIVERY_PRICE + cartItemsTotal;

  const formattedItemsTotal = formatMoney(cartItemsTotal);
  const formattedCartTotal = formatMoney(cartTotal)
  const formattedDeliveryPrice = formatMoney(DELIVERY_PRICE) 

  return(
    <ResumoValueSelect>
      <div className="itens">
        <p>Total de itens</p>
        <p>R$ {formattedItemsTotal}</p>
      </div>
      <div className="entrega">
        <p>Entrega</p>
        <p>R$ {formattedDeliveryPrice}</p>
      </div>
      <div className="total">
        <h4>Total</h4>
        <h4>R$ {formattedCartTotal}</h4>
      </div>
    </ResumoValueSelect>
  )
}
import { ResumoValueSelect } from "./styles";

export function ResumeValue() {
  return(
    <ResumoValueSelect>
      <div className="itens">
        <p>Total de itens</p>
        <p>R$ 19,80</p>
      </div>
      <div className="entrega">
        <p>Entrega</p>
        <p>R$ 5,00</p>
      </div>
      <div className="total">
        <h4>Total</h4>
        <h4>R$ 24,80</h4>
      </div>
    </ResumoValueSelect>
  )
}
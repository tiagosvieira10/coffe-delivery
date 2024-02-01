import { Trash } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { ButtonCount } from "../../../Home/components/ButtonQuantidade";
import { CoffeSelect, ResumoPedido, ResumoCoffeSelect, CoffeSelectContainer, DescriptionCoffeSelected, ActionForCoffeSelected, ResumoValueSelect } from "./styles";

export function CoffeesSelected() {
  return(
    <CoffeSelect>
          <h4>Cafés selecionados</h4>

          <ResumoPedido>
            <ResumoCoffeSelect>
              <CoffeSelectContainer>
                {/* <img src={expresso} alt="" /> */}
                <DescriptionCoffeSelected>
                  <span>Expresso Tradicional</span>

                  <ActionForCoffeSelected>
                    <ButtonCount/>
                    <button className="remover">
                      <Trash color="#F67828" size={17}/>
                      REMOVER
                    </button>
                  </ActionForCoffeSelected>
                </DescriptionCoffeSelected>
              </CoffeSelectContainer>
              <h5>R$ 9,90</h5>
            </ResumoCoffeSelect>

            <ResumoCoffeSelect>
              <CoffeSelectContainer>
                {/* <img src={latte} alt="" /> */}
                <DescriptionCoffeSelected>
                  <span>Latte</span>

                  <ActionForCoffeSelected>
                    <ButtonCount/>
                    <button className="remover">
                      <Trash color="#F67828" size={17}/>
                      REMOVER
                    </button>
                  </ActionForCoffeSelected>
                </DescriptionCoffeSelected>
              </CoffeSelectContainer>
              <h5>R$ 9,90</h5>
            </ResumoCoffeSelect>

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
            <Link to='/confirmation' className="confirmarPedido">
              <button>CONFIRMAR PEDIDO</button>
            </Link>
          </ResumoPedido>
        </CoffeSelect>
  )
}
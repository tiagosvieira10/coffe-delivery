import { Header } from "../../components/Header"
import imgEntrega from '../../assets/Illustration.svg'
import { ConfimationMain, ConfirmationContainer, ContainerEntrega, DescriptionConfirmation, ImgdeEntrega, PedidoDescriptionConfirmation } from "./styles"
import { localizacaoEntrega, pagamentoEntrega, previsaoEntrega } from "../../assets/infoConfimation"

export function ConfirmationPage() {
  return (
    <ConfirmationContainer>
      <Header/>
      <ConfimationMain>
        <DescriptionConfirmation>
          <h2>Uhu! Pedido confirmado</h2>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        
          <ContainerEntrega>
            <PedidoDescriptionConfirmation>
              <img src={localizacaoEntrega} alt="" />
              <div className="PedidoDescription">
                <span>Entrega em <strong>Rua dos Alfeneiros, 7</strong></span>
                <span>Centro - Ouricuri, PE</span>
              </div>
            </PedidoDescriptionConfirmation>

            <PedidoDescriptionConfirmation>
              <img src={previsaoEntrega} alt="" />
              <div className="PedidoDescription">
                <span>Previsão de entrega</span>
                <strong>20 min - 30 min</strong>
              </div>
            </PedidoDescriptionConfirmation>

            <PedidoDescriptionConfirmation>
              <img src={pagamentoEntrega} alt="" />
              <div className="PedidoDescription">
                <span>Pagamento na entrega</span>
                <strong>Cartão de Crédito</strong>
              </div>
            </PedidoDescriptionConfirmation>
          </ContainerEntrega>
        </DescriptionConfirmation>

        <ImgdeEntrega>
          <img src={imgEntrega} alt="" />
        </ImgdeEntrega>
      </ConfimationMain>
    </ConfirmationContainer>
  )
}
import { Header } from "../../components/Header"
import imgEntrega from '../../assets/confirmationImg.svg'
import { ConfimationMain, ConfirmationContainer, ContainerEntrega, DescriptionConfirmation, ImgdeEntrega, PedidoDescriptionConfirmation } from "./styles"
import { previsaoEntrega } from "../../assets/infoConfimation"


export function ConfirmationPage() {  
  return (
    <ConfirmationContainer>
      <Header/>
      <ConfimationMain>
        <DescriptionConfirmation>
          <h2>Obah! Pedido confirmado</h2>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        
          <ContainerEntrega>
            <PedidoDescriptionConfirmation>
              <img src={previsaoEntrega} alt="" loading="lazy"/>
              <div className="PedidoDescription">
                <span>Previsão de entrega</span>
                <strong>20 min - 30 min</strong>
              </div>
            </PedidoDescriptionConfirmation>
          </ContainerEntrega>
        </DescriptionConfirmation>

        <ImgdeEntrega>
          <img src={imgEntrega} alt="" loading="eager" />
        </ImgdeEntrega>
      </ConfimationMain>
    </ConfirmationContainer>
  )
}
import { Header } from "../../components/Header";
import imgCoffeDelivery from '../../assets/coffedelivery.svg'
import { ApresentationApp, BenefitPoints, BonusCoffe, Coffe, CoffeImg, CoffeMenu, HomeApresentation, HomeContainer } from "./styles";
import { cafe, carrinho, embalagem, time } from "../../assets/benefitPoints";

export function Home() {
  return (
    <HomeContainer>
      <Header/>
      <HomeApresentation>
        <ApresentationApp>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <span>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</span>
          <BonusCoffe>
            <BenefitPoints>
              <img src={carrinho} alt="" />
              <span>Compra simples e segura</span>
            </BenefitPoints>

            <BenefitPoints>
              <img src={embalagem} alt="" />
              <span>Embalagem mantém o café intacto</span>
            </BenefitPoints>

            <BenefitPoints>
              <img src={time} alt="" />
              <span>Entrega rápida e rastreada</span>
            </BenefitPoints>

            <BenefitPoints>
              <img src={cafe} alt="" />
              <span>O café chega fresquinho até você</span>
            </BenefitPoints>
          </BonusCoffe>
        </ApresentationApp>

        <CoffeImg>
          <img src={imgCoffeDelivery} alt="" />
        </CoffeImg>
      </HomeApresentation>

      <CoffeMenu>
        <Coffe>
          
        </Coffe>
      </CoffeMenu>
    </HomeContainer>
  )
}
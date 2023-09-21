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
              <h3>Compra simples e segura</h3>
            </BenefitPoints>

            <BenefitPoints>
              <img src={embalagem} alt="" />
              <h3>Embalagem mantém o café intacto</h3>
            </BenefitPoints>

            <BenefitPoints>
              <img src={time} alt="" />
              <h3>Entrega rápida e rastreada</h3>
            </BenefitPoints>

            <BenefitPoints>
              <img src={cafe} alt="" />
              <h3>O café chega fresquinho até você</h3>
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
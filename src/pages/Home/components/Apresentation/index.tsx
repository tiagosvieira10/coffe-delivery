import { carrinho, embalagem, time, cafe } from "../../../../assets/benefitPoints";
import { HomeApresentation, ApresentationApp, BonusCoffe, BenefitPoints, CoffeImg } from "./styles";
import imgCoffeDelivery from '../../../../assets/coffedelivery.svg'

export function ApresentationHome() {
  return(
    <HomeApresentation>
        <ApresentationApp>
          <h1>Um cafézinho no ponto para qualquer hora do dia</h1>
          <span>Com o Café no ponto você recebe seu café onde estiver, a qualquer hora</span>
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
  )
}

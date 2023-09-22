import { Header } from "../../components/Header";
import imgCoffeDelivery from '../../assets/coffedelivery.svg'
import { expresso } from "../../assets/coffes";
import { ApresentationApp, BenefitPoints, BonusCoffe, Coffe, CoffeCards, CoffeImg, CoffeMenu, CoffePrice, HomeApresentation, HomeContainer } from "./styles";
import { cafe, carrinho, embalagem, time } from "../../assets/benefitPoints";
import { ShoppingCart } from "@phosphor-icons/react";

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
        <h2>Nossos cafés</h2>

        <CoffeCards>
          <Coffe>
            <img src={expresso} alt="" />
            <button>TRADICIONAL</button>
            <h4>Expresso Tradicional</h4>
            <span>Expresso Tradicional</span>

            <CoffePrice>
              <h5><strong>R$</strong>9,90</h5>
              <div>
                <button>-</button>
                <p>1</p>
                <button>+</button>
              </div>
              <button>
                <ShoppingCart color="white" weight="fill" size={22}/>
              </button>
            </CoffePrice>
          </Coffe>

          <Coffe>
            <img src="" alt="" />
            <button>TRADICIONAL</button>
            <h4>Expresso Tradicional</h4>
            <span>Expresso Tradicional</span>

            <CoffePrice>
              <h5><strong>R$</strong>9,90</h5>
              <div>
                <button>-</button>
                <p>1</p>
                <button>+</button>
              </div>
              <button>
                <ShoppingCart color="white" weight="fill" size={22}/>
              </button>
            </CoffePrice>
          </Coffe>

          <Coffe>
            <img src="" alt="" />
            <button>TRADICIONAL</button>
            <h4>Expresso Tradicional</h4>
            <span>Expresso Tradicional</span>

            <CoffePrice>
              <h5><strong>R$</strong>9,90</h5>
              <div>
                <button>-</button>
                <p>1</p>
                <button>+</button>
              </div>
              <button>
                <ShoppingCart color="white" weight="fill" size={22}/>
              </button>
            </CoffePrice>
          </Coffe>

          <Coffe>
            <img src="" alt="" />
            <button>TRADICIONAL</button>
            <h4>Expresso Tradicional</h4>
            <span>Expresso Tradicional</span>

            <CoffePrice>
              <h5><strong>R$</strong>9,90</h5>
              <div>
                <button>-</button>
                <p>1</p>
                <button>+</button>
              </div>
              <button>
                <ShoppingCart color="white" weight="fill" size={22}/>
              </button>
            </CoffePrice>
          </Coffe>

          <Coffe>
            <img src="" alt="" />
            <button>TRADICIONAL</button>
            <h4>Expresso Tradicional</h4>
            <span>Expresso Tradicional</span>

            <CoffePrice>
              <h5><strong>R$</strong>9,90</h5>
              <div>
                <button>-</button>
                <p>1</p>
                <button>+</button>
              </div>
              <button>
                <ShoppingCart color="white" weight="fill" size={22}/>
              </button>
            </CoffePrice>
          </Coffe>

          <Coffe>
            <img src="" alt="" />
            <button>TRADICIONAL</button>
            <h4>Expresso Tradicional</h4>
            <span>Expresso Tradicional</span>

            <CoffePrice>
              <h5><strong>R$</strong>9,90</h5>
              <div>
                <button>-</button>
                <p>1</p>
                <button>+</button>
              </div>
              <button>
                <ShoppingCart color="white" weight="fill" size={22}/>
              </button>
            </CoffePrice>
          </Coffe>
        </CoffeCards>
      </CoffeMenu>
    </HomeContainer>
  )
}
import { CoffeCards } from "./styles";
import { CoffeCard } from "../CoffeCard";
import { coffees } from "../../../../data/coffees";

export function OurCoffe(){
  return(
    <CoffeCards>
      {coffees.map((coffee) => (
        <CoffeCard key={coffee.id} coffee={coffee}/>
      ))}
      {/* <Coffe>
        <img src={expresso} alt="" />
        <CoffeItens>
          <button className="itensPreparo">TRADICIONAL</button>
        </CoffeItens>
        <h4>Expresso Tradicional</h4>
        <span>O tradicional café feito com água quente e grãos moídos</span>

        <CoffePrice>
          <h5><strong>R$</strong>9,90</h5>
          <ButtonCount/>
          <button>
            <ShoppingCart weight="fill" size={22}/>
          </button>
        </CoffePrice>
      </Coffe> */}

      {/* <Coffe>
        <img src={americano} alt="" />
        <CoffeItens>
          <button className="itensPreparo">TRADICIONAL</button>
        </CoffeItens>
        <h4>Expresso Americano</h4>
        <span>Expresso diluído, menos intenso que o tradicional</span>

        <CoffePrice>
          <h5><strong>R$</strong>9,90</h5>
          <ButtonCount/>
          <button className="car">
            <ShoppingCart weight="fill" size={22}/>
          </button>
        </CoffePrice>
      </Coffe>

      <Coffe>
        <img src={caramelo} alt="" />
        <CoffeItens>
          <button className="itensPreparo">TRADICIONAL</button>
        </CoffeItens>
        <h4>Expresso Cremoso</h4>
        <span>Café expresso tradicional com espuma cremosa</span>

        <CoffePrice>
          <h5><strong>R$</strong>9,90</h5>
          <ButtonCount/>
          <button>
            <ShoppingCart weight="fill" size={22}/>
          </button>
        </CoffePrice>
      </Coffe>

      <Coffe>
        <img src={gelado} alt="" />
        <CoffeItens>
          <button className="itensPreparo">TRADICIONAL</button>
          <button className="itensPreparo">GELADO</button>
        </CoffeItens>
        <h4>Expresso Gelado</h4>
        <span>Bebida preparada com café expresso e cubos de gelo</span>

        <CoffePrice>
          <h5><strong>R$</strong>9,90</h5>
          <ButtonCount/>
          <button>
            <ShoppingCart weight="fill" size={22}/>
          </button>
        </CoffePrice>
      </Coffe>

      <Coffe>
        <img src={coffeLeite} alt="" />
        <CoffeItens>
          <button className="itensPreparo">TRADICIONAL</button>
          <button className="itensPreparo">COM LEITE</button>
        </CoffeItens>
        <h4>Café com Leite</h4>
        <span>Meio a meio de expresso tradicional com leite vaporizado</span>

        <CoffePrice>
          <h5><strong>R$</strong>9,90</h5>
          <ButtonCount/>
          <button>
            <ShoppingCart weight="fill" size={22}/>
          </button>
        </CoffePrice>
      </Coffe>

      <Coffe>
        <img src={latte} alt="" />
        <CoffeItens>
          <button className="itensPreparo">TRADICIONAL</button>
          <button className="itensPreparo">COM LEITE</button>
        </CoffeItens>
        <h4>Latte</h4>
        <span>Uma dose de café expresso com o dobro de leite e espuma cremosa</span>

        <CoffePrice>
          <h5><strong>R$</strong>9,90</h5>
          <ButtonCount/>
          <button>
            <ShoppingCart weight="fill" size={22}/>
          </button>
        </CoffePrice>
      </Coffe>

      <Coffe>
        <img src={capuccino} alt="" />
        <CoffeItens>
          <button className="itensPreparo">TRADICIONAL</button>
          <button className="itensPreparo">COM LEITE</button>
        </CoffeItens>
        <h4>Capuccino</h4>
        <span>Bebida com canela feita de doses iguais de café, leite e espuma</span>

        <CoffePrice>
          <h5><strong>R$</strong>9,90</h5>
          <ButtonCount/>
          <button>
            <ShoppingCart weight="fill" size={22}/>
          </button>
        </CoffePrice>
      </Coffe>

      <Coffe>
        <img src={macchiato} alt="" />
        <CoffeItens>
          <button className="itensPreparo">TRADICIONAL</button>
          <button className="itensPreparo">COM LEITE</button>
        </CoffeItens>
        <h4>Macchiato</h4>
        <span>Café expresso misturado com um pouco de leite quente e espuma</span>

        <CoffePrice>
          <h5><strong>R$</strong>9,90</h5>
          <ButtonCount/>
          <button>
            <ShoppingCart weight="fill" size={22}/>
          </button>
        </CoffePrice>
      </Coffe>

      <Coffe>
        <img src={mochaccino} alt="" />
        <CoffeItens>
          <button className="itensPreparo">TRADICIONAL</button>
          <button className="itensPreparo">COM LEITE</button>
        </CoffeItens>
        <h4>Mocaccino</h4>
        <span>Café expresso com calda de chocolate, pouco leite e espuma</span>

        <CoffePrice>
          <h5><strong>R$</strong>9,90</h5>
          <ButtonCount/>
          <button>
            <ShoppingCart weight="fill" size={22}/>
          </button>
        </CoffePrice>
      </Coffe>

      <Coffe>
        <img src={chocolatee} alt="" />
        <CoffeItens>
          <button className="itensPreparo">ESPECIAL</button>
          <button className="itensPreparo">COM LEITE</button>
        </CoffeItens>
        <h4>Chocolate Quente</h4>
        <span>Bebida feita com chocolate dissolvido no leite quente e café</span>

        <CoffePrice>
          <h5><strong>R$</strong>9,90</h5>
          <ButtonCount/>
          <button>
            <ShoppingCart weight="fill" size={22}/>
          </button>
        </CoffePrice>
      </Coffe>

      <Coffe>
        <img src={cubano} alt="" />
        <CoffeItens>
          <button className="itensPreparo">ESPECIAL</button>
          <button className="itensPreparo">ALCOÓLICO</button>
          <button className="itensPreparo">GELADO</button>
        </CoffeItens>
        <h4>Cubano</h4>
        <span>Drink gelado de café expresso com rum, creme de leite e hortelã</span>

        <CoffePrice>
          <h5><strong>R$</strong>9,90</h5>
          <ButtonCount/>
          <button>
            <ShoppingCart weight="fill" size={22}/>
          </button>
        </CoffePrice>
      </Coffe>

      <Coffe>
        <img src={havaiano} alt="" />
        <CoffeItens>
          <button className="itensPreparo">ESPECIAL</button>
        </CoffeItens>
        <h4>Havaiano</h4>
        <span>Bebida adocicada preparada com café e leite de coco</span>

        <CoffePrice>
          <h5><strong>R$</strong>9,90</h5>
          <ButtonCount/>
          <button>
            <ShoppingCart weight="fill" size={22}/>
          </button>
        </CoffePrice>
      </Coffe>

      <Coffe>
        <img src={arabe} alt="" />
        <CoffeItens>
          <button className="itensPreparo">ESPECIAL</button>
        </CoffeItens>
        <h4>Árabe</h4>
        <span>Uma versão do café fabricado em grãos de Coffea arabica</span>

        <CoffePrice>
          <h5><strong>R$</strong>9,90</h5>
          <ButtonCount/>
          <button>
            <ShoppingCart weight="fill" size={22}/>
          </button>
        </CoffePrice>
      </Coffe>

      <Coffe>
        <img src={irlandes} alt="" />
        <CoffeItens>
          <button className="itensPreparo">ESPECIAL</button>
          <button className="itensPreparo">ALCOÓLICO</button>
        </CoffeItens>
        <h4>Irlandês</h4>
        <span>Bebida a base de café, uísque irlandês, açúcar e chantilly</span>

        <CoffePrice>
          <h5><strong>R$</strong>9,90</h5>
          <ButtonCount/>
          <button>
            <ShoppingCart weight="fill" size={22}/>
          </button>
        </CoffePrice> 
       </Coffe> */}
   </CoffeCards>
  )
}
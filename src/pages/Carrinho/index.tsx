import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money, Trash } from "@phosphor-icons/react";
import { Header } from "../../components/Header";
import { expresso, latte } from "../../assets/coffes";
import { ActionForCoffeSelected, CarrinhoContainer, CarrinhoMain, CoffeSelect, CoffeSelectContainer, CompletePedido, DescriptionCoffeSelected, EnderecoContainer, HeaderContainerCards, MetodoPagamento, PagamentoContainer, ResumoCoffeSelect, ResumoPedido, ResumoValueSelect, TextareaEndereco } from "./styles";
import  { ButtonCount }  from "../Home/components/ButtonQuantidade";
import { Link } from "react-router-dom";


export function CarrinhoPage() {
  return (
    <CarrinhoContainer>
      <Header/>

      <CarrinhoMain>
        <CompletePedido>
          <h4>Complete seu pedido</h4>
          <EnderecoContainer>

            <HeaderContainerCards>
              <MapPinLine color="#C47F17" size={22}/>
            <div>
              <p>Endereço de Entrega</p>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
            </HeaderContainerCards>

            <TextareaEndereco>
              <div className="colum">
                <textarea placeholder="CEP" className="cep"></textarea>
                <textarea placeholder="Rua" className="rua"></textarea>
              </div>

              <div className="flex2">
                <textarea placeholder="Número" className="number"></textarea>
                <textarea placeholder="Complemento" className="complemento"></textarea>
              </div>

              <div className="flex3">
                <textarea placeholder="Bairro" className="bairro"></textarea>
                <textarea placeholder="Cidade" className="city"></textarea>
                <textarea placeholder="UF" className="uf"></textarea>
              </div>
            </TextareaEndereco>

          </EnderecoContainer>

          <PagamentoContainer>
            <HeaderContainerCards>
              <CurrencyDollar size={22} color="#8047F8"/>
              <div>
                <p>Pagamento</p>
                <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
              </div>
            </HeaderContainerCards>

            <MetodoPagamento>
              <button>
                <CreditCard color="#8047F8" size={15}/>
                CARTÃO DE CRÉDITO
              </button>
              <button>
                <Bank color="#8047F8" size={15}/>
                CARTÃO DE DÉBITO
              </button>
              <button>
                <Money color="#8047F8" size={15}/>
                DINHEIRO
              </button>
            </MetodoPagamento>

          </PagamentoContainer>
        </CompletePedido>

        <CoffeSelect>
          <h4>Cafés selecionados</h4>

          <ResumoPedido>
            <ResumoCoffeSelect>
              <CoffeSelectContainer>
                <img src={expresso} alt="" />
                <DescriptionCoffeSelected>
                  <span>Expresso Tradicional</span>

                  <ActionForCoffeSelected>
                    <ButtonCount/>
                    <button className="remover">
                      <Trash color="#8047F8" size={17}/>
                      REMOVER
                    </button>
                  </ActionForCoffeSelected>
                </DescriptionCoffeSelected>
              </CoffeSelectContainer>
              <h5>R$ 9,90</h5>
            </ResumoCoffeSelect>

            <ResumoCoffeSelect>
              <CoffeSelectContainer>
                <img src={latte} alt="" />
                <DescriptionCoffeSelected>
                  <span>Latte</span>

                  <ActionForCoffeSelected>
                    <ButtonCount/>
                    <button className="remover">
                      <Trash color="#8047F8" size={17}/>
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
      </CarrinhoMain>
      
    </CarrinhoContainer>
  )

}
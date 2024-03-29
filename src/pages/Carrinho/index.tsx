import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "@phosphor-icons/react";
import { Header } from "../../components/Header";
import { CarrinhoContainer, CarrinhoMain, CompletePedido, EnderecoContainer, HeaderContainerCards, MetodoPagamento, PagamentoContainer, TextareaEndereco } from "./styles";
import { CoffeesSelected } from "./components/CoffeesSelected";


export function CarrinhoPage() {
  return (
    <CarrinhoContainer>
      <Header/>

      <CarrinhoMain>
        <CompletePedido>
          <h4>Complete seu pedido</h4>
          <EnderecoContainer>

            <HeaderContainerCards>
              <MapPinLine color="#F67828" size={22}/>
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
              <CurrencyDollar size={22} color="#F67828"/>
              <div>
                <p>Pagamento</p>
                <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
              </div>
            </HeaderContainerCards>

            <MetodoPagamento>
              <button>
                <CreditCard color="#F67828" size={15}/>
                CARTÃO DE CRÉDITO
              </button>
              <button>
                <Bank color="#F67828" size={15}/>
                CARTÃO DE DÉBITO
              </button>
              <button>
                <Money color="#F67828" size={15}/>
                DINHEIRO
              </button>
            </MetodoPagamento>

          </PagamentoContainer>
        </CompletePedido>
        <CoffeesSelected/>
      </CarrinhoMain>
      
    </CarrinhoContainer>
  )

}
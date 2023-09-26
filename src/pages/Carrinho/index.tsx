import { CurrencyDollar, MapPinLine } from "@phosphor-icons/react";
import { Header } from "../../components/Header";
import { CarrinhoContainer, CarrinhoMain, CoffeSelect, CompletePedido, EnderecoContainer, HeaderContainerCards, PagamentoContainer, ResumoPedido, TextareaEndereco } from "./styles";

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

          </PagamentoContainer>
        </CompletePedido>

        <CoffeSelect>
          <h4>Cafés selecionados</h4>
          <ResumoPedido>
            <button>CONFIRMAR PEDIDO</button>
          </ResumoPedido>
        </CoffeSelect>
      </CarrinhoMain>
      
    </CarrinhoContainer>
  )

}
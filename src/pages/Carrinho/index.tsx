import { MapPinLine } from "@phosphor-icons/react";
import { Header } from "../../components/Header";
import { CarrinhoContainer, CarrinhoMain, CoffeSelect, CompletePedido, EnderecoContainer, HeaderContainerCards, PagamentoContainer } from "./styles";

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

          </EnderecoContainer>

          <PagamentoContainer>

          </PagamentoContainer>
        </CompletePedido>

        <CoffeSelect>
          <h4>Cafés selecionados</h4>
        </CoffeSelect>
      </CarrinhoMain>
      
    </CarrinhoContainer>
  )

}
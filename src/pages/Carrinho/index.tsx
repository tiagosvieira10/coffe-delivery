import { Header } from "../../components/Header";
import { CarrinhoContainer, CarrinhoMain, CoffeSelect, CompletePedido, EnderecoContainer, PagamentoContainer } from "./styles";

export function CarrinhoPage() {
  return (
    <CarrinhoContainer>
      <Header/>

      <CarrinhoMain>
        <CompletePedido>
          <EnderecoContainer>

          </EnderecoContainer>
          <PagamentoContainer>

          </PagamentoContainer>
        </CompletePedido>

        <CoffeSelect>
          
        </CoffeSelect>
      </CarrinhoMain>
      
    </CarrinhoContainer>
  )

}
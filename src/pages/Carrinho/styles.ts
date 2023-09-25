import styled from "styled-components";

export const CarrinhoContainer = styled.main`

`
export const CarrinhoMain = styled.div`
  margin: 4rem 8rem;
  display: flex;
  justify-content: space-between;
`
export const CompletePedido = styled.div`

`
export const EnderecoContainer = styled.div`
  margin-top: 1rem;

  padding: 2.5rem;
  width: 40rem;
  height: 23rem;

  border-radius: 6px;

  background-color: ${({theme}) => theme.colors["base-card"]};
  div {
    display: flex;
  }
`

export const HeaderContainerCards = styled.div`
  display: flex;
  gap: 0.5rem;
  div {
    flex-direction: column;
    gap: 0.3rem;

    p {
      color: ${({theme}) => theme.colors["base-subtitle"]};
      font-size: ${({theme}) => theme.textSizes["text-regular-m"]};
    }

    span {
      color: ${({theme}) => theme.colors["base-text"]};
      font-size: ${({theme}) => theme.textSizes["text-regular-s"]};
    }
  }
`

export const PagamentoContainer = styled.div`

`
export const CoffeSelect = styled.div`

`
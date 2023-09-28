import styled from "styled-components";

export const CarrinhoContainer = styled.main`
  margin: 2rem auto;
  max-width: 1100px;
`
export const CarrinhoMain = styled.div`
  margin: 4rem auto;
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;

  h4 {
    font-family:  ${({theme}) => theme.fonts.title};
    font-size: ${({theme}) => theme.textSizes["title-title-xs"]};
    color: ${({theme}) => theme.colors["base-subtitle"]};
  }
`
export const CompletePedido = styled.div`

`
export const EnderecoContainer = styled.div`
  margin-top: 1rem;

  padding: 2.5rem;
  width: 40rem;
  /* height: 24rem; */

  border-radius: 6px;

  background-color: ${({theme}) => theme.colors["base-card"]};
  div {
    display: flex;
  }
`
export const TextareaEndereco = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  textarea {
    border-color: ${({theme}) => theme.colors["base-button"]};
    border-radius: 4px;
    background-color: ${({theme}) => theme.colors["base-input"]}; 
    padding: 0.75rem;
    resize: none;
  }
  div.colum {
    flex-direction: column;
  }

  div.flex2 {
    gap: 0.75rem;
  }

  div.flex3 {
    gap: 0.75rem;
  }
  .cep {
    width: 12.5rem;
    height: 3rem;
  }
  .rua {
    margin-top: 1rem;
    margin-bottom: 1rem;
    width: 35rem;
    height: 3rem;
  }

  .number {
    height: 3rem;
    margin-bottom: 1rem;
  }

  .complemento {
    height: 3rem;
    flex: 1;
  }

  .bairro {
    height: 3rem;
    width: 12.5rem;
  }

  .city {
    height: 3rem;
    flex: 1;
  }

  .uf {
    width: 3.75rem;
    height: 3rem;
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
  width: 40rem;
  /* height: 13rem; */
  margin-top: 0.75rem;
  padding: 2.5rem;
  border-radius: 6px;

  background-color: ${({theme}) => theme.colors["base-card"]};
`
export const MetodoPagamento = styled.div`
  display: flex;

  margin-top: 2rem;
  gap: 0.75rem;

  button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex: 1;
    padding: 1rem;
    border: none;
    border-radius: 6px;

    font-size: ${({theme}) => theme.textSizes["components-button-s"]};
    color: ${({theme}) => theme.colors["base-text"]};

    background-color: ${({theme}) => theme.colors["base-button"]};
  }
`
export const CoffeSelect = styled.div`

`
export const ResumoPedido = styled.div`
  width: 28rem;
  margin-top: 1rem;
  padding: 2.5rem;

  background-color: ${({theme}) => theme.colors["base-card"]};
  border-radius: 6px 44px 6px 44px;

  .confirmarPedido {
    button {
      border: none;
      margin-top: 1rem;
      background-color: ${({theme}) => theme.colors["brand-yellow"]};
      color: ${({theme}) => theme.colors["base-white"]};
      font-size: ${({theme}) => theme.textSizes["components-button-g"]};

      padding: 0.5rem 0.75rem;
      border-radius: 6px;

      height: 2.8rem;
      width: 23rem;
      
      &:hover {
        cursor: pointer;
      }
    }
  }

`

export const ResumoCoffeSelect = styled.div`
  display: flex;

  justify-content: space-between;
  border-bottom: 1px solid ${({theme}) => theme.colors["base-button"]};
  margin-bottom: 2rem;
  padding-top: 0.5rem;
  
  

  
  img {
    width: 4rem;
    height: 4rem;
  }

  h5 {
    font-size: ${({theme}) => theme.textSizes["text-bold-m"]};
    color: ${({theme}) => theme.colors["base-text"]};
  }
`
export const CoffeSelectContainer = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
`
export const DescriptionCoffeSelected = styled.div`
  flex-direction: column;
  margin-left: 1rem;
  
  span {
    font-size: ${({theme}) => theme.textSizes["text-regular-m"]};
    color: ${({theme}) => theme.colors["base-subtitle"]};
  }
`
export const ActionForCoffeSelected = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-top: 0.5rem;

  button {
    padding: 0.5rem;
    gap: 0.25rem;
    display: flex;
    align-items: center;
    border: none;
    border-radius: 6px;
    background-color: ${({theme}) => theme.colors["base-button"]};

    font-size: ${({theme}) => theme.textSizes["components-button-s"]};
    color: ${({theme}) => theme.colors["base-text"]};
  }
`
export const ResumoValueSelect = styled.div`

  p {
    font-size: ${({theme}) => theme.textSizes["text-regular-s"]};
    color: ${({theme}) => theme.colors["base-text"]};
  }

  h4 {
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${({theme}) => theme.textSizes["text-bold-l"]};
    color: ${({theme}) => theme.colors["base-subtitle"]};
  }
  
  div {
    display: flex;
    justify-content: space-between ;

    margin: 1rem 0;
  }
`
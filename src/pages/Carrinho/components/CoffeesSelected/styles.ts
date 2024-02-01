import styled from "styled-components"

export const CoffeSelect = styled.div`

`
export const ResumoPedido = styled.div`
  width: 28rem;
  margin-top: 1rem;
  padding: 2.5rem;

  background-color: ${({theme}) => theme.colors["base-card"]};
  border-radius: 44px;

  .confirmarPedido {
    button {
      border: none;
      margin-top: 1rem;
      background-color: ${({theme}) => theme.colors["brand-orange"]};
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
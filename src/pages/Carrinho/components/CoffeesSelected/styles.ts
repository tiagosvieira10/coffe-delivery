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
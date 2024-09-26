import styled from "styled-components";

export const CoffeSelect = styled.div``;

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

  @media (max-width: 768px) {
    width: 22rem;
    padding: 1.5rem;

    .confirmarPedido {
      button {
        width: 100%;
        font-size: ${({theme}) => theme.textSizes["text-regular-m"]};
        padding: 0.5rem;
      }
    }
  }

  @media (max-width: 480px) {
    width: 18rem;
    padding: 1rem;

    .confirmarPedido {
      button {
        width: 100%;
        font-size: ${({theme}) => theme.textSizes["text-regular-s"]};
        padding: 0.4rem;
      }
    }
  }
`;

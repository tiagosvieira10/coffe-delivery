import styled from "styled-components";

export const Coffe = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  background-color: ${({theme}) => theme.colors["base-card"]};
  width: 14.5rem;
  height: 19rem;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border-radius: 30px; 

  img {
    align-items: center;
    justify-content: center;
    margin-top: -3rem;
  }

  button {
    border: none;
  } 

  .itensPreparo {
    border-radius: 100px;
    background-color: ${({theme}) => theme.colors["brand-orange-light"]};
    color: ${({theme}) => theme.colors["base-white"]};
    padding: 0.25rem 0.5rem;
    font-size: ${({theme}) => theme.textSizes["components-tag"]};
    font-family: ${({theme}) => theme.fonts.title};
  }

  h4 {
    font-size: ${({theme}) => theme.textSizes["title-title-s"]};
  }

  span {
    font-size: ${({theme}) => theme.textSizes["text-regular-s"]};
    color: ${({theme}) => theme.colors["base-label"]};
    text-align: center;
    padding: 0 0.5rem;
  }

  p.data {
    font-size: 0.7rem;
    color: ${({theme}) => theme.colors["base-label"]};
    opacity: 0.5;
  }

  @media (max-width: 768px) {
    width: 12rem;
    height: auto;
    padding: 1rem;

    img {
      width: 100px;
      height: auto;
      margin-top: -2rem;
    }

    .itensPreparo {
      font-size: ${({theme}) => theme.textSizes["text-regular-s"]};
      display: none;
      padding: 0.2rem 0.4rem;
    }

    h4 {
      font-size: ${({theme}) => theme.textSizes["text-regular-l"]};
    }

    span {
      font-size: ${({theme}) => theme.textSizes["text-regular-s"]};
      padding: 0 0.3rem;
    }
  }

  @media (max-width: 480px) {
    width: 12rem;
    gap: 0.3rem;

    h4 {
      font-size: ${({theme}) => theme.textSizes["text-regular-m"]};
    }

    span {
      font-size: ${({theme}) => theme.textSizes["text-regular-s"]};
    }
  }
`;

export const CoffeItens = styled.div`
  display: flex;
  gap: 0.25rem;

  button {
    gap: 0.5rem;
    display: flex;
  }

  @media (max-width: 768px) {
    gap: 0.1rem;

    button {
      padding: 0.3rem;
      font-size: ${({theme}) => theme.textSizes["text-regular-s"]};
    }
  }
`;

export const CoffePrice = styled.div`
  display: flex;
  margin-top: 1rem;

  h5 {
    font-family: ${({theme}) => theme.fonts.title};
    font-size: ${({theme}) => theme.textSizes["title-title-m"]};
    margin-right: 1rem;

    strong {
      margin-right: 0.1rem;
      font-family: ${({theme}) => theme.fonts.regular};
      color: ${({theme}) => theme.colors["base-text"]};
      font-size: ${({theme}) => theme.textSizes["text-regular-s"]};
    }
  }

  button {
    margin-left: 0.25rem;
    background-color: ${({theme}) => theme.colors["base-button"]};
    padding: 0.5rem;
    border-radius: 6px;
    color: ${({theme}) => theme.colors["brand-orange"]};

    &:hover {
      cursor: pointer;
    }
  }
  
  div {
    background-color: ${({theme}) => theme.colors["base-button"]};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;

    button {
      display: flex;
      color: ${({theme}) => theme.colors["brand-orange"]};
      font-size: 1rem;
      margin: 0;
      padding: 0.5rem;
      background-color: ${({theme}) => theme.colors["base-button"]};
      align-items: center;
      justify-content: center;
    }
  }

  @media (max-width: 768px) {
    h5 {
      font-size: ${({theme}) => theme.textSizes["title-title-s"]};
    }

    button {
      padding: 0.3rem;
      font-size: ${({theme}) => theme.textSizes["text-regular-s"]};
    }

    div {
      button {
        font-size: ${({theme}) => theme.textSizes["text-regular-s"]};
        padding: 0.3rem;
      }
    }
  }
`;

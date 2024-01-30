import styled from "styled-components";

export const HomeContainer = styled.main`
  margin: 2rem auto;
  max-width: 1100px;
`

export const HomeApresentation = styled.div`
  margin: 4rem auto;
  display: flex;

  img {
    max-width: 27rem;
    max-height: 20rem;
  }
`
export const ApresentationApp = styled.div`
 h1 {
    font-family: ${({theme}) => theme.fonts.title};
    font-size: ${({theme}) => theme.textSizes["title-title-xl"] };

    color: ${({theme}) => theme.colors["base-title"] };
  }

  span {
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${({theme}) => theme.textSizes["text-regular-l"]};
  }
`

export const BonusCoffe = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-wrap: wrap;
  justify-content:space-between;
  align-items: center;
   
  div {
    flex-basis: calc(50% - 0.4rem); 
    margin-bottom: 1rem;
  }
  
`

export const BenefitPoints = styled.div`
  display: flex;
  gap: 0.6rem;
  align-items: center;

  span {
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${({theme}) => theme.textSizes["text-regular-m"]};
    color: ${({theme}) => theme.colors["base-text"] };
  }
`

export const CoffeImg = styled.div`
 display: flex;
 align-items: flex-end;
 justify-content: flex-end;
 margin: 0 auto;
`


export const CoffeMenu = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin: 4rem auto;
  
  h2 {
    font-family: ${({theme}) => theme.fonts.title};
    font-size: ${({theme}) => theme.textSizes["title-title-l"] };
    color: ${({theme}) => theme.colors["base-title"] };
  }

  input.buscarCafe {
    border: 1px solid ${({theme}) => theme.colors["brand-orange-light"]} ;
    border-radius: 50px;
    padding: 0.5rem 2rem;
  }

  div.searchContainer {
    display: flex;
    align-items: center;

    gap: 0.2rem;

    button {
      border: none;
      background: none;
    };

    button:hover {
      cursor: pointer;
    }
  }
`

export const CoffeCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 2rem auto;
  
  /* margin-top: 2rem; */
  gap: 3rem;

`

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
    background-color: ${({theme}) => theme.colors["brand-orange-light"] };
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

    /* margin-bottom: 0.5rem; */
  }

`

export const CoffeItens = styled.div`
  display: flex;
  gap: 0.25rem;
`

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


`
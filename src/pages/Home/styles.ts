import styled from "styled-components";

export const HomeContainer = styled.main`
 
`

export const HomeApresentation = styled.div`
  margin: 4rem 8rem;
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

`


export const CoffeMenu = styled.div`
  margin: 4rem 8rem;
  
  h2 {
    font-family: ${({theme}) => theme.fonts.title};
    font-size: ${({theme}) => theme.textSizes["title-title-l"] };
    color: ${({theme}) => theme.colors["base-title"] };
  }
`

export const CoffeCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  
  margin-top: 2rem;
  gap: 1.5rem;

`

export const Coffe = styled.div`
  background-color: ${({theme}) => theme.colors["base-card"]};
  width: 14.5rem;
  height: 19rem;
`

export const CoffePrice = styled.div`

`
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
`

export const BonusCoffe = styled.div`

`

export const BenefitPoints = styled.div`

`

export const CoffeImg = styled.div`

`


export const CoffeMenu = styled.div`

`

export const Coffe = styled.div`

`
import styled from "styled-components";

export const HomeApresentation = styled.div`
  margin: 4rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    max-width: 27rem;
    max-height: 20rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin: 2rem;
    img {
      max-width: 20rem;
      margin-bottom: 1rem;
    }
  }
`

export const ApresentationApp = styled.div`
  h1 {
    font-family: ${({theme}) => theme.fonts.title};
    font-size: ${({theme}) => theme.textSizes["title-title-xl"]};
    color: ${({theme}) => theme.colors["base-title"]};
  }

  span {
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${({theme}) => theme.textSizes["text-regular-l"]};
  }

  @media (max-width: 768px) {
    h1 {
      font-size: ${({theme}) => theme.textSizes["title-title-l"]};
      text-align: center;
    }
    span {
      font-size: ${({theme}) => theme.textSizes["text-regular-m"]};
      text-align: center;
    }
  }
`

export const BonusCoffe = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
   
  div {
    flex-basis: calc(50% - 0.4rem); 
    margin-bottom: 1rem;
  }
  
  @media (max-width: 768px) {
    margin-top: 2rem;
    div {
      flex-basis: 100%;
      text-align: center;
    }
  }
`

export const BenefitPoints = styled.div`
  display: flex;
  gap: 0.6rem;
  align-items: center;

  span {
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${({theme}) => theme.textSizes["text-regular-m"]};
    color: ${({theme}) => theme.colors["base-text"]};
  }

  @media (max-width: 768px) {
    align-items: flex-start; 
    gap: 0.3rem;
  }
`

export const CoffeImg = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  margin: 0 auto;

  @media (max-width: 768px) {
    justify-content: center;
  }
`

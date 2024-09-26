import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 6.5rem;

  background: ${({theme}) => theme.colors["base-background"]};

  position: sticky;
  top: 0;
  left: 0;
  z-index: 5;


  @media (max-width: 768px) {
    height: 5rem; 
    padding: 0 1rem; 
  }
`

export const HeaderCarrinho = styled.div`
  display: flex;
  gap: 1rem;

  button.carrinho {
    border: none;
  }

  /* Responsividade */
  @media (max-width: 768px) {
    gap: 0.5rem; /* Reduzindo o espaço entre os elementos */
  }

  @media (max-width: 480px) {
    flex-direction: column; /* Mudando para coluna em telas muito pequenas */
    gap: 0.2rem;
  }
`

export const HeaderButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  
  a {
    display: flex;
    align-items: center;
    text-decoration: none;

    gap: 0.2rem;

    p {
      color: white;
    }
  }  

  background-color: ${({theme}) => theme.colors["brand-orange"]};
  
  gap: 0.2rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 50px;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;

    margin-top: -2.5rem;
    margin-left: 1.2rem;

    background-color: ${({theme}) => theme.colors["brand-orange"]};
    color: white;

    border-radius: 50%;
    width: 1.25rem;
    height: 1.25rem;

    font-size: ${({theme}) => theme.textSizes["text-bold-s"]};
  }

  .hidden {
    display: none;
  }

  /* Responsividade */
  @media (max-width: 768px) {
    padding: 0.4rem 0.8rem; /* Ajustando o padding para telas menores */
    font-size: ${({theme}) => theme.textSizes["text-regular-s"]}; /* Ajustando o tamanho do texto */
  }

  @media (max-width: 480px) {
    padding: 0.3rem 0.6rem; /* Ajustando mais o padding */
    span {
      width: 1rem; /* Ajustando o tamanho do indicador */
      height: 1rem;
      margin-top: -2rem;
      margin-left: 1rem;
    }
  }
`

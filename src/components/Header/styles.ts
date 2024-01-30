import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* margin: 2rem auto;
  max-width: 1100px; */
`

export const HeaderCarrinho = styled.div`
  display: flex;
  gap: 1rem;

  button.carrinho {
    border: none;
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

  div.count {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;

    margin-top: -2.7rem;
    margin-left: 1rem;
    

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
`
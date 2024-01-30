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

  input.buscarCafe {
    border: 1px solid ${({theme}) => theme.colors["brand-orange-light"]} ;
    border-radius: 50px;
    padding: 0.5rem 2rem;
  }

  div.searchContainer {
    display: flex;
    align-items: center;
    justify-content: center;

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

export const HeaderButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.colors["brand-orange"]};
  
  gap: 0.2rem;
  padding: 0.5rem;
  border: none;
  border-radius: 6px;

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
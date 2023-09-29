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
  
  gap: 0.2rem;
  padding: 0.5rem;
  background-color: ${({theme, variant}) => {
  if(variant === 'yellow') {
    return theme.colors["brand-yellow-light"]
  } else {
    return theme.colors["brand-purple-light"]
  }
  }};
  border: none;
  border-radius: 6px;
  color: ${({theme}) => theme.colors["brand-purple-dark"]};

  div.count {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;

    margin-top: -2.7rem;
    margin-left: 1rem;
    

    background-color: ${({theme}) => theme.colors["brand-yellow-dark"]};
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
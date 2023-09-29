import styled from "styled-components"

export const ButtonCountContainer = styled.div`
  background-color: ${({theme}) => theme.colors["base-button"]};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;

<<<<<<< HEAD
  button.count {
=======
  

  button {
>>>>>>> alteracoes
    display: flex;
    border: none;
    border-radius: 6px;
    color: ${({theme}) => theme.colors["brand-purple"]};
    font-size: 1rem;
    margin: 0;
    padding: 0.5rem;
    background-color: ${({theme}) => theme.colors["base-button"]};
    align-items: center;
    justify-content: center;

    &:hover {
      cursor: pointer;
    }
  }
`

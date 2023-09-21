import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 8rem;
`

export const HeaderCarrinho = styled.div`
  display: flex;
  gap: 1rem;
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
`
import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 2rem;
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

  border: none;
  color: ${({theme}) => theme.colors["brand-purple-dark"]};
`
import styled from "styled-components";

export const ConfirmationContainer = styled.div`

` 
export const ConfimationMain = styled.div`
  margin: 7rem 8rem;
  display: flex;
  justify-content: space-between;
`
export const ContainerEntrega = styled.div`
  border: 1px solid;
  border-radius: 6px 36px 6px 36px;
  /* border-image: linear-gradient(to right, #DBAC2C, #8047F8);
  border-image-slice: 1; */
  padding: 2.5rem;  
`

export const DescriptionConfirmation = styled.div`
  h2 {
    font-family: ${({theme}) => theme.fonts.title};
    font-size: ${({theme}) => theme.textSizes["title-title-l"]};
    color: ${({theme}) => theme.colors["brand-yellow-dark"]};
    /* margin-bottom: 0.5rem; */
  }
  p {
    font-size: ${({theme}) => theme.textSizes["text-regular-l"]};
    color: ${({theme}) => theme.colors["base-subtitle"]};
    margin-bottom: 2rem;
  }
` 
export const PedidoDescriptionConfirmation = styled.div`
  display: flex;
  gap: 0.75rem;
  line-height: 1.5;

  &:nth-child(1),
  &:nth-child(2) {
    margin-bottom: 2rem;
  }

  div.PedidoDescription {
    display: flex;
    flex-direction: column;
  }
` 
export const ImgdeEntrega = styled.div`
  margin-top: 7rem;
` 

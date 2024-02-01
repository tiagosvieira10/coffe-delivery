import styled from "styled-components";

export const ResumoValueSelect = styled.div`
  p {
    font-size: ${({theme}) => theme.textSizes["text-regular-s"]};
    color: ${({theme}) => theme.colors["base-text"]};
  }
  h4 {
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${({theme}) => theme.textSizes["text-bold-l"]};
    color: ${({theme}) => theme.colors["base-subtitle"]};
  }
  
  div {
    display: flex;
    justify-content: space-between ;

    margin: 1rem 0;
  }
`
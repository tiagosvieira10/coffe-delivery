import styled from "styled-components";

export const ConfirmationContainer = styled.div`
  margin: 2rem auto;
  max-width: 1100px;
  padding: 0 1rem; /* Adiciona padding para garantir que o conteúdo não fique muito próximo das bordas em telas menores */
`;

export const ConfimationMain = styled.div`
  margin: 7rem auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column; /* Altera a direção para coluna em telas menores */
    align-items: flex-start; /* Alinha os itens à esquerda */
  }
`;

export const ContainerEntrega = styled.div`
  border: 1px solid;
  border-radius: 36px;
  padding: 2.5rem;  
  width: 100%; /* Faz com que o container ocupe 100% da largura disponível */
  max-width: 600px; /* Limita a largura máxima em telas grandes */

  @media (max-width: 768px) {
    margin-bottom: 2rem; /* Adiciona margem inferior para espaçamento em dispositivos móveis */
  }
`;

export const DescriptionConfirmation = styled.div`
  h2 {
    font-family: ${({ theme }) => theme.fonts.title};
    font-size: ${({ theme }) => theme.textSizes["title-title-l"]};
    color: ${({ theme }) => theme.colors["brand-orange"]};
  }

  p {
    font-size: ${({ theme }) => theme.textSizes["text-regular-l"]};
    color: ${({ theme }) => theme.colors["base-subtitle"]};
    margin-bottom: 2rem;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: ${({ theme }) => theme.textSizes["title-title-m"]}; /* Reduz o tamanho da fonte para h2 em telas menores */
    }
    p {
      font-size: ${({ theme }) => theme.textSizes["text-regular-m"]}; /* Reduz o tamanho da fonte para p em telas menores */
    }
  }
`;

export const PedidoDescriptionConfirmation = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  div.PedidoDescription {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 768px) {
    flex-direction: column; /* Altera a direção para coluna em telas menores */
    align-items: flex-start; /* Alinha os itens à esquerda */
  }
`;

export const ImgdeEntrega = styled.div`
  img {
    height: 30rem;
    width: 30rem;

    @media (max-width: 768px) {
      height: 20rem; /* Reduz a altura da imagem em telas menores */
      width: 20rem; /* Reduz a largura da imagem em telas menores */
    }
  }
`;


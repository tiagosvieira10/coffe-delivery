import styled from "styled-components";

export const ResumoCoffeSelect = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${({theme}) => theme.colors["base-button"]};
  margin-bottom: 2rem;
  padding-top: 0.5rem;

  img {
    width: 4rem;
    height: 4rem;
  }

  h5 {
    font-size: ${({theme}) => theme.textSizes["text-bold-m"]};
    color: ${({theme}) => theme.colors["base-text"]};
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;

    img {
      width: 3rem;
      height: 3rem;
    }

    h5 {
      font-size: ${({theme}) => theme.textSizes["text-bold-s"]};
    }
  }

  @media (max-width: 480px) {
    img {
      width: 2.5rem;
      height: 2.5rem;
    }

    h5 {
      font-size: ${({theme}) => theme.textSizes["text-regular-s"]};
    }
  }
`;

export const CoffeSelectContainer = styled.div`
  display: flex;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const DescriptionCoffeSelected = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;

  span {
    font-size: ${({theme}) => theme.textSizes["text-regular-m"]};
    color: ${({theme}) => theme.colors["base-subtitle"]};
  }

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 0.5rem;

    span {
      font-size: ${({theme}) => theme.textSizes["text-regular-s"]};
    }
  }
`;

export const ActionForCoffeSelected = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-top: 0.5rem;

  button {
    padding: 0.5rem;
    gap: 0.25rem;
    display: flex;
    align-items: center;
    border: none;
    border-radius: 6px;
    background-color: ${({theme}) => theme.colors["base-button"]};
    font-size: ${({theme}) => theme.textSizes["components-button-s"]};
    color: ${({theme}) => theme.colors["base-text"]};

    &:hover {
      cursor: pointer;
    }
  }

  @media (max-width: 768px) {
    button {
      font-size: ${({theme}) => theme.textSizes["text-regular-s"]};
      padding: 0.3rem;
    }
  }

  @media (max-width: 480px) {
    button {
      font-size: ${({theme}) => theme.textSizes["text-regular-s"]};
      padding: 0.25rem;
    }
  }
`;

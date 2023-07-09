import { styled } from "styled-components";

export const DivContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 12px;
  margin-top: 30px;
`;

export const DivContainerObs = styled.div`
  height: 150px;
  overflow: auto;
  /* Estilos del scroll */
  &::-webkit-scrollbar {
    width: 8px; /* Ancho del scroll */
  }

  /* Fondo del scroll */
  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
  }

  /* Barra del scroll */
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 4px;
  }

  /* Al pasar el mouse por encima del scroll */
  &::-webkit-scrollbar-thumb:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

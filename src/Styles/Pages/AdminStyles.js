import { styled } from "styled-components";
import { Cards } from "./DashboardStyles";
import { colorFondo, colorLetra } from "../GeneralStyles";

export const DivContainerUsers = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
`;

export const CardsAdmin = styled(Cards)`
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  color: ${colorFondo};
  &:hover {
    transform: scale(1.1);
    background-color: ${colorFondo};
    color: ${colorLetra};
  }
`;

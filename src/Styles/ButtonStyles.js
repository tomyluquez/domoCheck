import { styled } from "styled-components";
import { colorLetra, colorLogo, colorFondo } from "./GeneralStyles";

export const ButtonCustom = styled.button`
  width: ${(props) => props.width || "250px"};
  height: ${(props) => props.hidden || "50px"};
  background-color: ${(props) => props.fondo || colorLetra};
  border: 1px solid ${(props) => props.borde || colorLogo};
  border-radius: 5px;
  color: ${(props) => props.color || colorFondo};
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: ${(props) => props.hfondo || colorLogo};
    color: ${(props) => props.hcolor || colorLetra};
    border: 1px solid ${(props) => props.hborde || colorFondo};
  }
  ${(props) =>
    props.disabled &&
    `
    /* Estilos cuando el botón está deshabilitado */
    pointer-events: none;
    opacity: 0.6;
    /* Otros estilos adicionales que desees aplicar */
  `}
`;

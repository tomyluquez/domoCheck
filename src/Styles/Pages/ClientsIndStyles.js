import { Box } from "@mui/material";
import { styled } from "styled-components";
import {
  colorLetra,
  colorLogo,
  colorFondo,
  colorLabel,
} from "../GeneralStyles";
import ControlPointOutlinedIcon from "@mui/icons-material/ControlPointOutlined";

export const BoxFicha = styled(Box)`
  width: 100%;
  background-color: ${colorLetra};
  box-shadow: 0px 8px 14px -3px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0px 8px 14px -3px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 8px 14px -3px rgba(0, 0, 0, 0.2);
  // height: 450px;
  // overflow: auto;

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

export const DivDatosContacto = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 20px 0;
  max-height: 450px;
  overflow: auto;
  background-color: ${colorLetra};
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0px 8px 14px -3px rgba(0, 0, 0, 0.2);
`;

export const DivTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  padding: 0 20px;
`;

export const SpanTitle = styled.span`
  font-size: 40px;
  font-weight: bold;
  color: ${colorFondo};
`;

export const SpanIcon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IconAdd = styled(ControlPointOutlinedIcon)`
  cursor: pointer;
  font-size: 20px !important;
  color: ${colorFondo};
  transition: all 0.3s ease-in-out !important;
  &:hover {
    color: ${colorLogo};
  }
`;

export const SpanLabel = styled.span`
  font-size: 15px;
  color: ${colorFondo};
`;

export const SpanValue = styled.span`
  font-size: 15px;
  color: ${colorLabel};
`;

export const DivContactos = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 55px;
  flex-wrap: wrap;
`;

export const DivContactoInd = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  align-items: start;
  gap: 10px;
`;

export const Telefono = styled.a`
  color: blue;
  font-size: 12px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease-in-out !important;
  &:hover {
    text-decoration: underline;
  }
`;

export const DivSolicitud = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 5px;
`;

export const DivUsers = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: start;
  gap: 20px;
`;

export const DivUserAPi = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;

  h4 {
    color: ${colorFondo};
  }
`;

export const DivUsersGrid = styled.div`
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 30px;

  h4 {
    width: 100%;
    text-align: center;
    color: ${colorFondo};
  }
`;

export const DivContainerDatosDespachados = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: center;
  align-items: center;
  width: 20%;
`;

export const DivFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

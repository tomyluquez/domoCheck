import { Table, TableRow } from "@mui/material";
import { styled } from "styled-components";
import { colorLetra, filasHover } from "./GeneralStyles";
import { hoverColors, stateColors } from "../data/colors";

export const TableStyles = styled(TableRow)`
  background-color: ${(props) => stateColors[props.fondo] || colorLetra};
  cursor: pointer;
  transiton: all 0.3s ease-in-out;
  box-shadow: 0px 8px 14px -3px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0px 8px 14px -3px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 8px 14px -3px rgba(0, 0, 0, 0.2);
  border: 2px solid ${(props) => stateColors[props.border] || "unset"};

    &:hover {
      background-color: ${(props) => hoverColors[props.estado] || filasHover};
    }
  }
`;

export const TableCellStyle = styled(Table)`
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.35);
  -webkit-box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.35);
  -moz-box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.35);
`;

export const SpanTabla = styled.span`
  width: 100px;
  display: inline-block;
  text-align: center;
  padding: 5px;
  border-radius: 5px;
`;

export const DivContainerState = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 5px;
`;

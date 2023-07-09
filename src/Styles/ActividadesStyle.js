import { TableCell } from "@mui/material";
import { styled } from "styled-components";

export const DivContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: start;
  gap: 60px;
  margin-bottom: 20px;
`;

export const ModalActividades = styled.div`
  width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  @media screen and (max-width: 700px) {
    width: 220px;
  }
`;

export const TableCellVencidas = styled(TableCell)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

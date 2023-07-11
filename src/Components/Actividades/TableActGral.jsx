import { Box, Divider, TableBody, TableCell, TableHead } from "@mui/material";
import { TableCellStyle, TableStyles } from "../../Styles/TableStyles";
import { useDispatch } from "react-redux";
import { openModal } from "../../redux/slices/modal";

import { useNavigate } from "react-router-dom";
import { changeValue } from "../../redux/slices/value";
import FilaActInd from "./FilaActInd";

const TableActGral = ({ actividadesPendientes }) => {
  console.log(actividadesPendientes);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCellClick = (act) => {
    if (act.actividad.estadoAct !== "Cumplida") {
      let tipo = act.actividad.dato;
      if (act.actividad.dato.includes("Seguimiento")) {
        tipo = act.actividad.dato.split("Seguimiento ")[1];
      }
      dispatch(
        openModal({
          type: tipo,
          referencia: "estado",
          id: act.cliente._id,
          idAct: act.actividad._id,
        })
      );
    }
  };

  const handleIconClick = (event, cliente) => {
    event.stopPropagation();
    dispatch(changeValue("4"));
    navigate(`/clientes/${cliente._id}`);
  };

  const handleNameCLick = (event, cliente) => {
    event.stopPropagation();
    navigate(`/clientes/${cliente._id}`);
  };

  return (
    <>
      <Divider />
      <Box sx={{ margin: 1, marginTop: "40px" }}>
        <TableCellStyle size="small" aria-label="purchases">
          <TableHead>
            <TableStyles>
              <TableCell>Estado Actividad</TableCell>
              <TableCell>Nombre Local</TableCell>
              <TableCell>Nombre Cliente</TableCell>
              <TableCell>Telefono Contacto</TableCell>
              <TableCell>Fecha Vencimiento</TableCell>
              <TableCell>Actividad</TableCell>
              <TableCell>Comentario</TableCell>
              <TableCell></TableCell>
            </TableStyles>
          </TableHead>
          <TableBody>
            {actividadesPendientes.map((act) => (
              <FilaActInd
                key={act.actividad._id}
                act={act}
                handleCellClick={handleCellClick}
                handleNameCLick={handleNameCLick}
                handleIconClick={handleIconClick}
              />
            ))}
          </TableBody>
        </TableCellStyle>
      </Box>
    </>
  );
};

export default TableActGral;

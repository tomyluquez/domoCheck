import { useEffect, useState } from "react";
import { SpanTabla, TableStyles } from "../../Styles/TableStyles";
import { Avatar, TableCell, Tooltip } from "@mui/material";
import actVencidas from "../../services/actVencidas";
import { stateColors } from "../../data/colors";
import formatDate from "../../services/formatDate";
import findOthersAct from "../../services/findOtherAct";

const FilaActInd = ({
  act,
  tipoActividad,
  handleCellClick,
  handleNameCLick,
  handleIconClick,
}) => {
  const [vencimiento, setVencimiento] = useState();
  const [diasVencida, setDiasVencidas] = useState();
  useEffect(() => {
    const { estadoActividad, diasTranscurridos } = actVencidas(
      act.actividad.proximoContacto,
      act.actividad.estadoAct
    );
    setDiasVencidas(diasTranscurridos);
    setVencimiento(estadoActividad);
  }, [act.actividad.proximoContacto, act.actividad.estadoAct]);
  const isVencida = vencimiento === "Vencida" || vencimiento === "Peligro";
  return (
    <TableStyles
      fondo={vencimiento}
      key={act._id}
      onClick={() => handleCellClick(act)}
    >
      <TableCell className="icon" component="th" scope="row">
        <SpanTabla
          style={{
            backgroundColor: stateColors[act.actividad.estadoAct],
          }}
        >
          {act.actividad.estadoAct}
        </SpanTabla>
      </TableCell>
      <TableCell
        className="icon"
        onClick={(event) => handleNameCLick(event, act.cliente)}
      >
        {act.cliente.nombreLocal}
      </TableCell>
      <TableCell className="icon">{act.cliente.nombreCrm}</TableCell>
      <TableCell className="icon">{act.cliente.telContacto}</TableCell>
      <TableCell className="icon">
        {tipoActividad === "Pendientes"
          ? formatDate(act.actividad.proximoContacto)
          : formatDate(act.actividad.fechaCumplimiento)}
      </TableCell>
      <TableCell className="icon">{act.actividad.dato}</TableCell>
      <TableCell className="icon">{act.actividad.actividad}</TableCell>
      <TableCell style={{ display: "flex" }} className="icon">
        {findOthersAct(act.cliente) > 1 && (
          <Tooltip
            title={`El cliente tiene ${findOthersAct(
              act.cliente
            )} actividades pendientes`}
            onClick={(event) => handleIconClick(event, act.cliente)}
          >
            <Avatar sx={{ width: 25, height: 25, bgcolor: "primary" }}>
              {findOthersAct(act.cliente)}
            </Avatar>
          </Tooltip>
        )}
        {isVencida && (
          <Tooltip
            title={`La actividad lleva ${vencimiento}  ${diasVencida} dias`}
          >
            <Avatar sx={{ width: 25, height: 25, bgcolor: "red" }}>
              {diasVencida}
            </Avatar>
          </Tooltip>
        )}
      </TableCell>
    </TableStyles>
  );
};
export default FilaActInd;

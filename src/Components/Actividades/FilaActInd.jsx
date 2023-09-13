import { useEffect, useState } from "react";
import { SpanTabla, TableStyles } from "../../Styles/TableStyles";
import { Avatar, TableCell, Tooltip } from "@mui/material";
import actVencidas from "../../services/actVencidas";
import findOthersAct from "../../services/findOtherAct";
import formatDateHours from "../../services/formatDateHours";

const FilaActInd = ({
  act,
  tipoActividad,
  handleCellClick,
  handleNameCLick,
  handleIconClick,
}) => {
  const [vencimiento, setVencimiento] = useState();
  const [diasVencida, setDiasVencidas] = useState();
  console.log(vencimiento, diasVencida);
  useEffect(() => {
    const { estadoActividad, diasTranscurridos } = actVencidas(
      act.actividad.proximoContacto,
      act.actividad.estadoAct
    );
    setDiasVencidas(diasTranscurridos);
    setVencimiento(estadoActividad);
  }, [act.actividad.proximoContacto, act.actividad.estadoAct]);
  const isVencida =
    (vencimiento === "Vencida" || vencimiento === "Peligro") &&
    diasVencida >= 1;

  return (
    <TableStyles
      fondo={vencimiento}
      key={act._id}
      onClick={() => handleCellClick(act)}
      sx={{ bgcolor: "color.inputs" }}
    >
      <TableCell className="icon" component="th" scope="row">
        <SpanTabla>{vencimiento}</SpanTabla>
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
          ? formatDateHours(act.actividad.proximoContacto)
          : formatDateHours(act.actividad.fechaCumplimiento)}
      </TableCell>
      <TableCell className="icon">{act.actividad.dato}</TableCell>
      <TableCell className="icon">
        {tipoActividad === "Pendientes"
          ? act.actividad.actividad
          : act.actividad.resultado}
      </TableCell>
      <TableCell className="icon">
        {act.actividad.cumplidor || act.actividad.creador}
      </TableCell>
      <TableCell className="icon">
        {findOthersAct(act.cliente) > 1 &&
          act.actividad.estadoAct === "Pendiente" && (
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

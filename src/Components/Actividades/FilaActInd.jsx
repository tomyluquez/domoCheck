import { useEffect, useState } from "react";
import { SpanTabla, TableStyles } from "../../Styles/TableStyles";
import { IconButton, TableCell, Tooltip } from "@mui/material";
import actVencidas from "../../services/actVencidas";
import { stateColors } from "../../data/colors";
import formatDate from "../../services/formatDate";
import findOthersAct from "../../services/findOtherAct";
import ReportProblemOutlinedIcon from "@mui/icons-material/ReportProblemOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

const FilaActInd = ({
  act,
  handleCellClick,
  handleNameCLick,
  handleIconClick,
}) => {
  const [vencimiento, setVencimiento] = useState();
  useEffect(() => {
    const newFondo = actVencidas(
      act.actividad.proximoContacto,
      act.actividad.estadoAct
    );
    setVencimiento(newFondo);
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
        {formatDate(act.actividad.proximoContacto)}
      </TableCell>
      <TableCell className="icon">{act.actividad.dato}</TableCell>
      <TableCell className="icon">{act.actividad.actividad}</TableCell>
      <TableCell style={{ display: "flex" }} className="icon">
        {findOthersAct(act.cliente) && (
          <Tooltip
            title="El cliente tiene mas de una actividad pendiente"
            onClick={(event) => handleIconClick(event, act.cliente)}
          >
            <IconButton>
              <PersonOutlineOutlinedIcon style={{ color: "gray" }} />
            </IconButton>
          </Tooltip>
        )}
        {isVencida && (
          <Tooltip title={`La actividad está ${vencimiento}`}>
            <IconButton>
              <ReportProblemOutlinedIcon style={{ color: "red" }} />
            </IconButton>
          </Tooltip>
        )}
      </TableCell>
    </TableStyles>
  );
};
export default FilaActInd;

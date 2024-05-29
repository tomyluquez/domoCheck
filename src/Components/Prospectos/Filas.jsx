import { Collapse, IconButton, TableCell, TableRow } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useState } from "react";
import { TableStyles } from "../../Styles/TableStyles";
import ModalHistorial from "../Modales/ModalHistorial";
import formatDate from "./../../services/formatDate";
import Historial from "../ClienteInd/Historial";

function FilasProspectos(props) {
  const { prospecto } = props;
  const [open, setOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const ultimaActividad =
    prospecto.actividades[prospecto.actividades.length - 1];

  return (
    <>
      {showModal && (
        <ModalHistorial
          clientes={prospecto}
          idClient={showModal}
          open={showModal}
          setOpen={setShowModal}
        />
      )}
      <TableStyles
        sx={{
          "& > *": {
            borderBottom: "unset",
          },
          bgcolor: "color.inputs",
        }}
        estado={prospecto.estado}
        border={prospecto.estado}
      >
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {prospecto.estado}
        </TableCell>
        <TableCell onClick={() => setShowModal(prospecto._id)}>
          {prospecto.nombreLocal}
        </TableCell>
        <TableCell>{prospecto.nombreCrm}</TableCell>
        <TableCell>{prospecto.telContacto}</TableCell>
        <TableCell>{prospecto.interes}</TableCell>
        <TableCell align="center" style={{ color: "green" }}>
          {formatDate(ultimaActividad.fecha)}
        </TableCell>
      </TableStyles>
      <TableRow>
        <TableCell style={{ paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Historial cliente={prospecto} />
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}
export default FilasProspectos;

import { Box, Divider, TableBody, TableCell, TableHead } from "@mui/material";
import { TableCellStyle, TableStyles } from "../../Styles/TableStyles";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../redux/slices/modal";
import { useNavigate } from "react-router-dom";
import { changeValue } from "../../redux/slices/value";
import FilaActInd from "./FilaActInd";
import ModalHistorial from "../Modales/ModalHistorial";
import { useState } from "react";

const TableActGral = ({ tipoActividad, actividades }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const role = useSelector((state) => state.user.role);
  const prospects = useSelector((state) => state.clientes.prospects);
  const [showModal, setShowModal] = useState(false);

  const handleCellClick = (act) => {
    if (act.actividad.estadoAct !== "Cumplida") {
      if (role !== "comercial" && role !== "integrador") return;

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

  const handleProspect = (event, cliente) => {
    event.stopPropagation();
    setShowModal(cliente._id);
  };

  return (
    <>
      {showModal && (
        <ModalHistorial
          clientes={prospects}
          idClient={showModal}
          open={showModal}
          setOpen={setShowModal}
        />
      )}
      <Divider />
      <div>
        <Box sx={{ margin: 1, marginTop: "40px" }}>
          <TableCellStyle
            size="small"
            aria-label="purchases"
            sx={{ bgcolor: "color.inputs" }}
          >
            <TableHead>
              <TableStyles sx={{ bgcolor: "color.inputs" }}>
                <TableCell>Estado Actividad</TableCell>
                <TableCell>Nombre Local</TableCell>
                <TableCell>Nombre Cliente</TableCell>
                <TableCell>Telefono Contacto</TableCell>
                <TableCell>
                  Fecha{" "}
                  {tipoActividad === "Pendientes"
                    ? "Vencimiento"
                    : "Cumplimiento"}
                </TableCell>
                <TableCell>Actividad</TableCell>
                <TableCell>
                  {tipoActividad === "Pendientes" ? "Comentario" : "Resultado"}
                </TableCell>
                <TableCell>Usuario</TableCell>
                {tipoActividad === "Pendientes" && <TableCell>Hito</TableCell>}
              </TableStyles>
            </TableHead>
            <TableBody>
              {actividades.map((act) => (
                <FilaActInd
                  key={act.actividad._id}
                  act={act}
                  tipoActividad={tipoActividad}
                  handleCellClick={handleCellClick}
                  handleNameCLick={handleNameCLick}
                  handleIconClick={handleIconClick}
                  handleProspect={handleProspect}
                />
              ))}
            </TableBody>
          </TableCellStyle>
        </Box>
      </div>
    </>
  );
};

export default TableActGral;

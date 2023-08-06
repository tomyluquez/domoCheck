import { Box, Collapse, IconButton, TableCell, TableRow } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useState } from "react";
import { DivContainerState, TableStyles } from "../../Styles/TableStyles";
import formatDate from "../../services/formatDate";
import { useNavigate } from "react-router-dom";
import EstadoIntegracion from "../ClienteInd/EstadoIntegracion";
import { useDispatch, useSelector } from "react-redux";
import { changeValue } from "../../redux/slices/value";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import UsersClient from "../ClienteInd/UsersClient";
import { stateColors } from "../../data/colors";
import VentasClientes from "../ClienteInd/VentasClientes";

function Row(props) {
  const { cliente } = props;
  const user = useSelector((state) => state.user);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const datosEntregados =
    cliente.menu.estado === "Entregado" &&
    cliente.mapa.estado === "Entregado" &&
    cliente.imgStore.estado === "Entregado" &&
    cliente.imgProd.estado === "Entregado" &&
    cliente.datos.estado === "Entregado" &&
    cliente.estado === "Faltan datos";

  const handleNavigate = (id) => {
    if (user.role === "marketing") {
      dispatch(changeValue("8"));
    } else if (user.role === "masDelivery") {
      dispatch(changeValue("6"));
    } else dispatch(changeValue("1"));
    navigate(`/clientes/${id}`);
  };

  return (
    <>
      <TableStyles
        sx={{
          "& > *": {
            borderBottom: "unset",
          },
          bgcolor: "color.inputs",
        }}
        estado={cliente.estado}
        border={cliente.estado}
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
          <DivContainerState>
            <FiberManualRecordIcon
              style={{
                color:
                  stateColors[
                    datosEntregados ? "Pendiente de despachar" : cliente.estado
                  ],
              }}
            />
            <span>
              {datosEntregados ? "Pendiente de despachar" : cliente.estado}
            </span>
          </DivContainerState>
        </TableCell>
        <TableCell onClick={() => handleNavigate(cliente._id)}>
          {cliente.nombreLocal}
        </TableCell>
        <TableCell>{cliente.nombreCrm}</TableCell>
        <TableCell>{cliente.telContacto}</TableCell>
        <TableCell>
          {cliente.estado === "Integrado"
            ? formatDate(cliente.fechaIntegrado)
            : formatDate(cliente.fechaSolicitud)}
        </TableCell>
        <TableCell align="center" style={{ color: "green" }}>
          {formatDate(cliente.modificacion?.fechaModificacion) ||
            formatDate(cliente.fechaModificacion) ||
            formatDate(cliente.fechaContacto) ||
            "Pendiente de Contactar"}
        </TableCell>
        <TableCell style={{ color: "green" }}>
          {cliente.modificacion?.user}
        </TableCell>
        <TableCell>{cliente.vendedor}</TableCell>
      </TableStyles>
      <TableRow>
        <TableCell style={{ paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            {(cliente.estado === "Pendiente" ||
              cliente.estado === "No lo quiere" ||
              cliente.estado === "No contesta") && (
              <Box
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                sx={{ bgcolor: "color.inputs" }}
              >
                {cliente.estado}
              </Box>
            )}
            {(cliente.estado === "Faltan datos" ||
              cliente.estado === "Testeo" ||
              cliente.estado === "Configuracion") && (
              <EstadoIntegracion cliente={cliente} />
            )}
            {cliente.estado === "Despachado" && (
              <UsersClient cliente={cliente} />
            )}
            {cliente.estado === "Integrado" && (
              <VentasClientes
                cliente={cliente}
                userName={user.name}
                role={user.role}
              />
            )}
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}
export default Row;

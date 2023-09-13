import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../redux/slices/modal";
import ModalDatosHistorial from "./ModalDatosHistorial";
import ModalActividad from "./ModalActividad";
import ModalAddContacto from "./ModalAddContacto";
import CancelIntergacion from "../CancelIntergacion";
import ModalStopIntegracion from "./ModalStopIntegracion";
import ModalReturnIntegracion from "./ModalReturnIntegracion";
import ModalSolicitud from "./ModalSolicitud";
import ModalCreateUser from "./ModalUser";
import useGetUsers from "../../Hooks/useGetUsers";
import ModalModCliente from "./ModalModCliente";
import ModalGenerarAct from "./ModalGenerarAct";
import ModalDatosMktInd from "./ModalDatosMktInd";
import ModalAddClient from "./ModalAddClient";
import ModalHistorial from "./ModalHistorial";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function Modal({ isOpen, reference, idClient, idAct }) {
  const dispatch = useDispatch();
  const clientes = useSelector((state) => state.clientes.clientes);
  const prospects = useSelector((state) => state.clientes.prospects);
  const users = useGetUsers();

  const datosHistorial =
    isOpen === "menu Historial" ||
    isOpen === "datos Historial" ||
    isOpen === "mapa Historial" ||
    isOpen === "imgProd Historial" ||
    isOpen === "imgStore Historial";
  const datoInd =
    isOpen === "menu" ||
    isOpen === "datos" ||
    isOpen === "mapa" ||
    isOpen === "imgProd" ||
    isOpen === "imgStore";
  const datosSolicitud =
    isOpen === "Solicitud menu" ||
    isOpen === "Solicitud datos" ||
    isOpen === "Solicitud mapa" ||
    isOpen === "Solicitud imgProd" ||
    isOpen === "Solicitud imgStore";
  const datosMkt =
    isOpen === "MP Conectado" ||
    isOpen === "Link IG" ||
    isOpen === "Link Whatsapp" ||
    isOpen === "Historias" ||
    isOpen === "Promos" ||
    isOpen === "Campañas email" ||
    isOpen === "Playstore";
  const datosMktInd =
    isOpen === "Ind MP Conectado" ||
    isOpen === "Ind Link IG" ||
    isOpen === "Ind Link Whatsapp" ||
    isOpen === "Ind Historias" ||
    isOpen === "Ind Promos" ||
    isOpen === "Ind Campañas email" ||
    isOpen === "Ind Playstore";
  const handleClose = () => {
    dispatch(closeModal());
  };

  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          {isOpen}
        </BootstrapDialogTitle>
        <DialogContent dividers>
          {datosHistorial && (
            <ModalDatosHistorial
              clientes={clientes}
              idClient={idClient}
              reference={reference}
            />
          )}
          {datoInd && (
            <ModalActividad
              clientes={clientes}
              idClient={idClient}
              idAct={idAct}
            />
          )}
          {datosMkt && (
            <ModalActividad
              clientes={clientes}
              idClient={idClient}
              idAct={idAct}
            />
          )}
          {isOpen === "Contactar" && (
            <ModalActividad
              clientes={clientes}
              idClient={idClient}
              idAct={idAct}
            />
          )}
          {isOpen === "Historial" && (
            <ModalHistorial
              clientes={reference === "Prospecto" ? prospects : clientes}
              idClient={idClient}
            />
          )}
          {isOpen === "Contactar prospecto" && (
            <ModalActividad
              clientes={prospects}
              idClient={idClient}
              idAct={idAct}
            />
          )}
          {isOpen === "Agregar cliente" && <ModalAddClient />}
          {(isOpen === "Agregar usuario" || isOpen === "Editar usuario") && (
            <ModalCreateUser user={reference} />
          )}
          {isOpen === "Agregar contacto" && (
            <ModalAddContacto idClient={idClient} />
          )}
          {isOpen === "Modificar cliente" && (
            <ModalModCliente clientes={clientes} idClient={idClient} />
          )}
          {isOpen === "Cancelar integracion" && (
            <CancelIntergacion
              clientes={clientes}
              idClient={idClient}
              users={users}
            />
          )}
          {isOpen === "Detener integracion" && (
            <ModalStopIntegracion
              clientes={clientes}
              idClient={idClient}
              users={users}
            />
          )}
          {isOpen === "Retomar integracion" && (
            <ModalReturnIntegracion
              clientes={clientes}
              idClient={idClient}
              users={users}
            />
          )}
          {isOpen === "Generar actividad" && (
            <ModalGenerarAct
              clientes={clientes}
              idClient={idClient}
              users={users}
              referencia={reference}
            />
          )}
          {datosSolicitud && (
            <ModalSolicitud
              clientes={clientes}
              idClient={idClient}
              referencia={reference}
            />
          )}
          {datosMktInd && (
            <ModalDatosMktInd
              clientes={clientes}
              idClient={idClient}
              dato={isOpen}
            />
          )}
        </DialogContent>
        <DialogActions>
          <Button style={{ color: "#bbd819" }} autoFocus onClick={handleClose}>
            Cerrar
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}

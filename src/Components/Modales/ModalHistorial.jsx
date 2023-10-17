import filterById from "../../services/filterById";
import { hitosInd } from "../../services/histosInd";
import TinmeLineClient from "../TimeLine";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector, useDispatch } from "react-redux";
import { ButtonCustom } from "../../Styles/ButtonStyles";
import { openModal } from "../../redux/slices/modal";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const ModalHistorial = ({ clientes, idClient, open, setOpen }) => {
  const cliente = filterById(clientes, idClient);
  const hitosIndividual = hitosInd(cliente);
  const role = useSelector((state) => state.user.role);
  const dispatch = useDispatch();

  const handleClose = () => {
    setOpen(false);
  };

  const handleModal = (motivo) => {
    dispatch(
      openModal({
        type: motivo,
        id: cliente._id,
      })
    );
  };

  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Historial
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <TinmeLineClient hitos={hitosIndividual} />
        </DialogContent>
        <DialogActions
          className="flex"
          style={{ justifyContent: "space-between" }}
        >
          {role === "vendedor" && cliente.estado === "StandBy" && (
            <ButtonCustom
              width="100px"
              onClick={() => handleModal("Retomar integracion")}
            >
              Retomar Integracion
            </ButtonCustom>
          )}
          <Button autoFocus onClick={handleClose}>
            Cerrar
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
};

export default ModalHistorial;

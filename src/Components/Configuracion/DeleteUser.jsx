import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { DeleteIcon } from "../../Styles/Pages/AdminStyles";
import useDeleteUser from "./../../Hooks/useDeleteUser";
import { ButtonCustom } from "../../Styles/ButtonStyles";
import { hoverColors, stateColors } from "../../data/colors";
const DeleteUser = ({ user }) => {
  const [open, setOpen] = React.useState(false);
  const deleteUserMutation = useDeleteUser();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handlerDeleteUser = () => {
    deleteUserMutation.mutate(user._id);
  };

  return (
    <>
      <DeleteIcon onClick={handleClickOpen} />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Eliminar usuario</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Deseas eliminar el usuario?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <ButtonCustom width="90px" onClick={handleClose}>
            Cancelar
          </ButtonCustom>
          <ButtonCustom
            width="90px"
            fondo={stateColors["No lo quiere"]}
            color="white"
            borde="red"
            hfondo={hoverColors["No lo quiere"]}
            onClick={handlerDeleteUser}
            autoFocus
          >
            Eliminiar
          </ButtonCustom>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DeleteUser;

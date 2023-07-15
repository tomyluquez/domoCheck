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
import { Tooltip } from "@mui/material";
import Loading from "../../Components/Loading";
const DeleteUser = ({ user }) => {
  const [open, setOpen] = React.useState(false);
  const deleteUserMutation = useDeleteUser();
  const { isLoading } = deleteUserMutation;

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
      <Tooltip title="Eliminar">
        <DeleteIcon onClick={handleClickOpen} />
      </Tooltip>
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
            {isLoading ? <Loading /> : "Eliminar"}
          </ButtonCustom>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DeleteUser;

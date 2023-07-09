import { Alert, Snackbar } from "@mui/material";
import { closeAlert } from "../redux/slices/Alert";
import { useDispatch } from "react-redux";

const AlertToast = ({ alertOpen, motivo, estado }) => {
  const dispatch = useDispatch();
  return (
    <Snackbar
      open={alertOpen}
      autoHideDuration={2000}
      onClose={() => dispatch(closeAlert(false))}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert
        onClose={() => dispatch(closeAlert(false))}
        severity={estado}
        sx={{ width: "100%" }}
      >
        {motivo}
      </Alert>
    </Snackbar>
  );
};

export default AlertToast;

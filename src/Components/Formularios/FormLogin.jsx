import { useState } from "react";
import { FormLoginStyles } from "../../Styles/Pages/LoginStyles";
import { TextField } from "@mui/material";
import { ButtonCustom } from "../../Styles/ButtonStyles";
import { useDispatch } from "react-redux";
import { openAlert } from "../../redux/slices/Alert";
import useLogin from "../../Hooks/useLogin";
import Loading from "../Loading";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
const FormLogin = () => {
  const [data, setData] = useState({
    name: "",
    password: "",
  });
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const loginmutation = useLogin();
  const { isLoading } = loginmutation;

  const handlerLogin = (e) => {
    e.preventDefault();
    if (data.name === "" || data.password === "") {
      dispatch(
        openAlert({
          motivo: "Todos los campos son obligatorios",
          estado: "error",
        })
      );
      return;
    }
    loginmutation.mutate(data);
  };

  return (
    <FormLoginStyles onSubmit={handlerLogin}>
      <img src="/logoCheck.png" alt="" />
      <TextField
        sx={{ minWidth: 180, width: "80%" }}
        value={data.name}
        id="outlined-basic"
        label="Usuario"
        variant="outlined"
        onChange={(e) => setData({ ...data, name: e.target.value })}
      />
      <div style={{ position: "relative", width: "100%" }} className="flex">
        <TextField
          sx={{ minWidth: 180, width: "80%", position: "relative" }}
          value={data.password}
          id="outlined-basic"
          label="Contraseña"
          type={visible ? "text" : "password"}
          variant="outlined"
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        {visible ? (
          <VisibilityOffOutlinedIcon
            className="pass"
            onClick={() => setVisible(!visible)}
          />
        ) : (
          <VisibilityOutlinedIcon
            className="pass"
            onClick={() => setVisible(!visible)}
          />
        )}
      </div>
      <ButtonCustom type="submit" style={{ marginBottom: 60 }} width="80%">
        {isLoading ? <Loading /> : "Iniciar Sesion"}
      </ButtonCustom>
    </FormLoginStyles>
  );
};

export default FormLogin;

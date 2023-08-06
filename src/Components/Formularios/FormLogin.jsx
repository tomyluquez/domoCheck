import { useState } from "react";
import { FormLoginStyles } from "../../Styles/Pages/LoginStyles";
import { TextField } from "@mui/material";
import { ButtonCustom } from "../../Styles/ButtonStyles";
import { useDispatch, useSelector } from "react-redux";
import { openAlert } from "../../redux/slices/Alert";
import useLogin from "../../Hooks/useLogin";
import Loading from "../Loading";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { colorLetra } from "../../Styles/GeneralStyles";
const FormLogin = () => {
  const darkMode = useSelector((state) => state.mode.darkMode);
  console.log(darkMode);
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
    <FormLoginStyles onSubmit={handlerLogin} modo={darkMode ? "dark" : ""}>
      <img src="/logoCheck.png" alt="" />
      <TextField
        sx={{ minWidth: 180, width: "80%", bgcolor: "color.inputs" }}
        value={data.name}
        id="outlined-basic"
        label="Usuario"
        variant="outlined"
        onChange={(e) => setData({ ...data, name: e.target.value })}
      />
      <div style={{ position: "relative", width: "100%" }} className="flex">
        <TextField
          sx={{
            minWidth: 180,
            width: "80%",
            position: "relative",
            bgcolor: "color.inputs",
          }}
          value={data.password}
          id="outlined-basic"
          label="Contraseña"
          type={visible ? "text" : "password"}
          variant="outlined"
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        {visible ? (
          <VisibilityOffOutlinedIcon
            style={{ color: darkMode ? colorLetra : "#404040" }}
            className="pass"
            onClick={() => setVisible(!visible)}
          />
        ) : (
          <VisibilityOutlinedIcon
            style={{ color: darkMode ? colorLetra : "#404040" }}
            className="pass"
            onClick={() => setVisible(!visible)}
          />
        )}
      </div>
      <ButtonCustom
        type="submit"
        style={{ marginBottom: 60 }}
        width="80%"
        fondo={darkMode ? "#404040" : colorLetra}
        color={darkMode ? colorLetra : "#404040"}
      >
        {isLoading ? <Loading /> : "Iniciar Sesion"}
      </ButtonCustom>
    </FormLoginStyles>
  );
};

export default FormLogin;

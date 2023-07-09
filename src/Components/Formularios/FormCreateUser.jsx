import { TextField } from "@mui/material";
import { useState } from "react";
import SelectCustom from "../SelectCustom";
import { roles } from "../../data/roels";
import { ButtonCustom } from "../../Styles/ButtonStyles";
import { useDispatch } from "react-redux";
import { openAlert } from "../../redux/slices/Alert";
import useCreateUser from "../../Hooks/useCreateUser";
import Loading from "../Loading";

const FormCreateUser = () => {
  const dispatch = useDispatch();
  const createUserMutation = useCreateUser();
  const { isLoading } = createUserMutation;
  const [data, setData] = useState({
    name: "",
    password: "",
    email: "",
    role: "",
  });
  const handleCreateUser = (e) => {
    console.log("hola");
    e.preventDefault();
    if (
      data.name === "" ||
      data.password === "" ||
      data.email === "" ||
      data.role === ""
    ) {
      dispatch(
        openAlert({
          motivo: "Todos los campos son obligatorios",
          estado: "error",
        })
      );
      return;
    }
    createUserMutation.mutate(data);
  };
  return (
    <form onSubmit={handleCreateUser}>
      <TextField
        sx={{ minWidth: 180, width: "15%", backgroundColor: "#fafafa" }}
        value={data.name}
        id="outlined-basic"
        label="Nombre Usuario"
        variant="outlined"
        onChange={(e) => setData({ ...data, name: e.target.value })}
      />
      <TextField
        sx={{ minWidth: 180, width: "15%", backgroundColor: "#fafafa" }}
        value={data.password}
        id="outlined-basic"
        label="Contraseña"
        type="password"
        variant="outlined"
        onChange={(e) => setData({ ...data, password: e.target.value })}
      />
      <TextField
        sx={{ minWidth: 180, width: "15%", backgroundColor: "#fafafa" }}
        value={data.email}
        id="outlined-basic"
        label="Email"
        type="email"
        variant="outlined"
        onChange={(e) => setData({ ...data, email: e.target.value })}
      />
      <SelectCustom
        w="15%"
        label="Rol"
        value={data.role}
        required={true}
        setValue={(newValue) => setData({ ...data, role: newValue })}
        opciones={roles}
      />
      <ButtonCustom type="submit">
        {isLoading ? <Loading /> : "Agregar usuario"}
      </ButtonCustom>
    </form>
  );
};

export default FormCreateUser;

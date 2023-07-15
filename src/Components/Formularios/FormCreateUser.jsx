import { TextField } from "@mui/material";
import { useState } from "react";
import SelectCustom from "../SelectCustom";
import { roles } from "../../data/roels";
import { ButtonCustom } from "../../Styles/ButtonStyles";
import { useDispatch } from "react-redux";
import { openAlert } from "../../redux/slices/Alert";
import useCreateUser from "../../Hooks/useCreateUser";
import Loading from "../Loading";
import { vendedores } from "./../../data/vendedores";
import { FormCreate } from "../../Styles/Pages/ConfiguracionStyles";
import useEditUser from "../../Hooks/useEditUser";

const FormCreateUser = ({ user }) => {
  const dispatch = useDispatch();
  const createUserMutation = useCreateUser();
  const editUserMutation = useEditUser();
  const loadingCreate = createUserMutation.isLoading;
  const loadingEdit = editUserMutation.isLoading;
  const [data, setData] = useState({
    name: user?.name || "",
    password: user?.password || "",
    email: user?.email || "",
    role: user?.role || "",
    vendedor: user?.vendedor || "",
    id: user?._id || "",
  });

  const handleCreateUser = (e) => {
    e.preventDefault();
    if (
      data.name === "" ||
      data.password === "" ||
      data.email === "" ||
      data.role === "" ||
      (data.role === "vendedor" && data.vendedor === "")
    ) {
      dispatch(
        openAlert({
          motivo: "Todos los campos son obligatorios",
          estado: "error",
        })
      );
      return;
    }
    if (user?.name) {
      editUserMutation.mutate(data);
    } else createUserMutation.mutate(data);
  };
  return (
    <FormCreate onSubmit={handleCreateUser}>
      <TextField
        sx={{ minWidth: 180, width: "100%", backgroundColor: "#fafafa" }}
        value={data.name}
        id="outlined-basic"
        label="Nombre Usuario"
        variant="outlined"
        onChange={(e) => setData({ ...data, name: e.target.value })}
      />
      <TextField
        sx={{ minWidth: 180, width: "100%", backgroundColor: "#fafafa" }}
        value={data.password}
        id="outlined-basic"
        label="Contraseña"
        type="password"
        variant="outlined"
        onChange={(e) => setData({ ...data, password: e.target.value })}
      />
      <TextField
        sx={{ minWidth: 180, width: "100%", backgroundColor: "#fafafa" }}
        value={data.email}
        id="outlined-basic"
        label="Email"
        type="email"
        variant="outlined"
        onChange={(e) => setData({ ...data, email: e.target.value })}
      />
      <SelectCustom
        w="100%"
        label="Rol"
        value={data.role}
        required={true}
        setValue={(newValue) => setData({ ...data, role: newValue })}
        opciones={roles}
      />
      {data.role === "vendedor" && (
        <SelectCustom
          w="100%"
          label="Vincular a un vendedor"
          value={data.vendedor}
          required={true}
          setValue={(newValue) => setData({ ...data, vendedor: newValue })}
          opciones={vendedores}
        />
      )}
      <ButtonCustom type="submit">
        {loadingCreate || loadingEdit ? (
          <Loading />
        ) : user?.name ? (
          "Editar usuario"
        ) : (
          "Crear usuario"
        )}
      </ButtonCustom>
    </FormCreate>
  );
};

export default FormCreateUser;

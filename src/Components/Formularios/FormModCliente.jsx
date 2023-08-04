import { TextField } from "@mui/material";
import { useState } from "react";
import { ButtonCustom } from "../../Styles/ButtonStyles";
import { useDispatch } from "react-redux";
import { FormCreate } from "../../Styles/Pages/ConfiguracionStyles";
import { openAlert } from "../../redux/slices/Alert";
import { objModCliente } from "../../data/objModCliente";
import useChangeName from "../../Hooks/useChangeName";
import Loading from "../Loading";

const FormModCliente = ({ cliente }) => {
  const dispatch = useDispatch();
  const changeNameMutation = useChangeName();
  const { isLoading } = changeNameMutation;
  const [data, setData] = useState({
    nombreLocal: cliente?.nombreLocal || "",
    instagram: cliente?.redes?.instagram || undefined,
    seguidores: cliente?.redes?.seguidores || undefined,
    logistica: cliente?.redes?.logistica || undefined,
  });

  const disabled =
    data.nombreLocal === cliente.nombreLocal &&
    data.instagram === cliente.redes?.instagram &&
    data.seguidores === cliente.redes?.seguidores &&
    data.logistica === cliente.redes?.logistica;

  const handlerModCliente = (e) => {
    e.preventDefault();
    if (
      data.logistica !== "si" &&
      data.logistica !== "no" &&
      data.logistica !== undefined
    ) {
      dispatch(
        openAlert({ motivo: "Solo podes ingresar Si o No", estado: "error" })
      );
      return;
    }
    const objDatacliente = objModCliente(cliente, data);
    changeNameMutation.mutate(objDatacliente);
  };
  return (
    <FormCreate onSubmit={handlerModCliente}>
      <TextField
        sx={{ minWidth: 180, width: "100%", backgroundColor: "#fafafa" }}
        value={data.name}
        id="outlined-basic"
        label="Nombre Local"
        variant="outlined"
        defaultValue={cliente.nombreLocal}
        onChange={(e) => setData({ ...data, nombreLocal: e.target.value })}
      />
      <TextField
        sx={{ minWidth: 180, width: "100%", backgroundColor: "#fafafa" }}
        value={data.email}
        id="outlined-basic"
        label="Instagram (solo nombre)"
        defaultValue={cliente.redes?.instagram}
        variant="outlined"
        onChange={(e) => setData({ ...data, instagram: e.target.value })}
      />
      <TextField
        sx={{ minWidth: 180, width: "100%", backgroundColor: "#fafafa" }}
        value={data.name}
        id="outlined-basic"
        label="Seguidores (solo numeros)"
        type="number"
        variant="outlined"
        defaultValue={cliente.redes?.seguidores}
        onChange={(e) => setData({ ...data, seguidores: e.target.value })}
      />
      <TextField
        sx={{ minWidth: 180, width: "100%", backgroundColor: "#fafafa" }}
        value={data.name}
        id="outlined-basic"
        label="Logistica Propia (Si o No)"
        variant="outlined"
        defaultValue={cliente.redes?.logistica}
        onChange={(e) =>
          setData({ ...data, logistica: e.target.value.toLowerCase() })
        }
      />
      <ButtonCustom type="submit" disabled={disabled}>
        {isLoading ? <Loading /> : "Modificar Cliente"}
      </ButtonCustom>
    </FormCreate>
  );
};

export default FormModCliente;

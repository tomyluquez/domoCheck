import { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
import { vendedores } from "../../data/vendedores";
import TexTarea from "../../Components/TexTarea";
import { ButtonCustom } from "../../Styles/ButtonStyles";
import useNewMutation from "./../../Hooks/useAddMutation";
import { FormAddCliente } from "../../Styles/FormStyles";
import SelectCustom from "../SelectCustom";
import { antiguedad } from "../../data/antiguedad";
import Loading from "../Loading";
import { useDispatch, useSelector } from "react-redux";
import { bodyNotification } from "../../services/getNotifi";
import useCreateNotifi from "../../Hooks/useCreateNotifi";
import useGetUsers from "../../Hooks/useGetUsers";
import { FormControlLabel, Switch } from "@mui/material";
import FormRedes from "./FormRedes";
import { openAlert } from "../../redux/slices/Alert";

const FormAddClient = () => {
  const { mutation, isLoading, setIsLoading } = useNewMutation();
  const dispatch = useDispatch();
  const notifiMutation = useCreateNotifi();
  const users = useGetUsers();
  const userName = useSelector((state) => state.user.name);
  const [data, setData] = useState({
    fechaSolicitud: "",
    nombreCrm: "",
    nombreLocal: "",
    telContacto: "",
    vendedor: "",
    antiguedad: "",
    obs: "",
    instagram: "",
    logistica: "",
    seguidores: "",
  });
  const [checked, setChecked] = useState(false);

  const disabled =
    data.fechaSolicitud === "" ||
    data.nombreCrm === "" ||
    data.nombreLocal === "" ||
    data.telContacto === "" ||
    data.vendedor === "" ||
    data.antiguedad === "";

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (disabled) return;
    if (
      data.logistica !== "si" &&
      data.logistica !== "no" &&
      data.logistica !== ""
    ) {
      dispatch(
        openAlert({ motivo: "Solo podes ingresar Si o No", estado: "error" })
      );
      return;
    }

    try {
      const newUser = {
        fechaSolicitud: data.fechaSolicitud,
        nombreCrm: data.nombreCrm,
        nombreLocal: data.nombreLocal,
        telContacto: +data.telContacto,
        vendedor: data.vendedor,
        antiguedad: data.antiguedad,
        observaciones: data.obs ? [data.obs] : [],
        userName,
        instagram: data.instagram,
        logistica: data.logistica,
        seguidores: data.seguidores,
      };
      setIsLoading(true);
      mutation.mutate(newUser);
      const bodyNotifi = bodyNotification(
        "Nuevo cliente",
        newUser,
        users.data,
        userName
      );
      notifiMutation.mutate(bodyNotifi);
      setData({
        fechaSolicitud: "",
        nombreCrm: "",
        nombreLocal: "",
        telContacto: "",
        vendedor: "",
        antiguedad: "",
        obs: "",
        instagram: false,
        seguidores: false,
        logistica: false,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FormAddCliente onSubmit={handlerSubmit}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          sx={{ minWidth: 180, width: "45%" }}
          label="Fecha de Solicitud"
          required={true}
          disableFuture
          onChange={(e) => setData({ ...data, fechaSolicitud: e.$d })}
        />
      </LocalizationProvider>
      <TextField
        sx={{ minWidth: 180, width: "45%" }}
        value={data.nombreCrm}
        id="outlined-basic"
        label="Nombre Cliente"
        variant="outlined"
        required={true}
        onChange={(e) => setData({ ...data, nombreCrm: e.target.value })}
      />
      <TextField
        sx={{ minWidth: 180, width: "45%" }}
        value={data.nombreLocal}
        id="outlined-basic"
        label="Nombre Local"
        variant="outlined"
        required={true}
        onChange={(e) => setData({ ...data, nombreLocal: e.target.value })}
      />
      <TextField
        sx={{ minWidth: 180, width: "45%" }}
        value={data.telContacto}
        id="outlined-basic"
        label="Telefono de Contacto"
        variant="outlined"
        type="number"
        required={true}
        onChange={(e) => setData({ ...data, telContacto: e.target.value })}
      />
      <SelectCustom
        w="45%"
        label="Vendedor"
        value={data.vendedor}
        required={true}
        setValue={(newValue) => setData({ ...data, vendedor: newValue })}
        opciones={vendedores}
      />
      <SelectCustom
        w="45%"
        label="Antiguedad"
        value={data.antiguedad}
        setValue={(newValue) => setData({ ...data, antiguedad: newValue })}
        opciones={antiguedad}
        required={true}
      />
      <FormControlLabel
        control={<Switch defaultChecked />}
        label="Tiene redes?"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        style={{ width: "100%" }}
      />
      {checked && (
        <div>
          <FormRedes data={data} setData={setData} />
        </div>
      )}
      <TexTarea
        obs={data.obs}
        setObs={(newValue) =>
          setData((prevState) => ({ ...prevState, obs: newValue }))
        }
      />
      <ButtonCustom width="20%" height="50px" disabled={disabled} type="submit">
        {isLoading ? <Loading /> : "Agregar Cliente"}
      </ButtonCustom>
    </FormAddCliente>
  );
};

export default FormAddClient;

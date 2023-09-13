import { TextField } from "@mui/material";
import { FormAddCliente } from "../../Styles/FormStyles";
import TexTarea from "../TexTarea";
import { useState } from "react";
import { ButtonCustom } from "../../Styles/ButtonStyles";
import Loading from "../Loading";
import useNewProspect from "../../Hooks/useAddProspect";

const FormAddProspect = () => {
  const { newProspect, isLoading, setIsLoading } = useNewProspect();
  const [data, setData] = useState({
    nombreCrm: "",
    nombreLocal: "",
    telContacto: "",
    obs: "",
  });
  const disabled =
    data.nombreCrm === "" || data.nombreLocal === "" || data.telContacto === "";

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (disabled) return;

    try {
      const newP = {
        nombreCrm: data.nombreCrm,
        nombreLocal: data.nombreLocal,
        telContacto: data.telContacto,
        observaciones: data.obs ? [data.obs] : [],
      };
      setIsLoading(true);
      newProspect.mutate(newP);
      setData({
        nombreCrm: "",
        nombreLocal: "",
        telContacto: "",
        obs: "",
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <FormAddCliente onSubmit={handlerSubmit}>
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
      <TexTarea
        obs={data.obs}
        setObs={(newValue) =>
          setData((prevState) => ({ ...prevState, obs: newValue }))
        }
      />
      <ButtonCustom width="20%" height="50px" disabled={disabled} type="submit">
        {isLoading ? <Loading /> : "Agregar Prospecto"}
      </ButtonCustom>
    </FormAddCliente>
  );
};

export default FormAddProspect;

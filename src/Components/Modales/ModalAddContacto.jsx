import { useState } from "react";
import { TextField } from "@mui/material";
import { ButtonCustom } from "../../Styles/ButtonStyles";
import { FormAddCliente } from "../../Styles/FormStyles";
import useAddContacto from "../../Hooks/useAddContacto";
import Loading from "../Loading";

const ModalAddContacto = ({ idClient }) => {
  const [data, setData] = useState({
    nombreNewContacto: "",
    telNewContacto: "",
  });
  const disabled = data.nombreNewContacto === "" && data.telNewContacto === "";
  const mutationNewContacto = useAddContacto();
  const { isLoading } = mutationNewContacto;

  const handlerAddConctacto = (e) => {
    e.preventDefault();
    const newContact = {
      idClient,
      nombreNewContacto: data.nombreNewContacto,
      telNewContacto: data.telNewContacto,
    };
    mutationNewContacto.mutate(newContact);
  };

  return (
    <FormAddCliente onSubmit={handlerAddConctacto}>
      <TextField
        sx={{ minWidth: 180, width: "50%" }}
        value={data.nombreNewContacto}
        id="outlined-basic"
        label="Nombre Nuevo Contacto"
        variant="outlined"
        required={true}
        onChange={(e) =>
          setData({ ...data, nombreNewContacto: e.target.value })
        }
      />
      <TextField
        sx={{ minWidth: 180, width: "50%" }}
        value={data.telNewContacto}
        id="outlined-basic"
        label="Telefono Nuevo Contacto"
        variant="outlined"
        required={true}
        type="number"
        onChange={(e) => setData({ ...data, telNewContacto: e.target.value })}
      />
      <ButtonCustom type="submit" disabled={disabled}>
        {isLoading ? <Loading /> : "Agregar Contacto"}
      </ButtonCustom>
    </FormAddCliente>
  );
};

export default ModalAddContacto;

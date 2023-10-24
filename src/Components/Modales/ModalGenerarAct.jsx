import { useState } from "react";
import { ButtonCustom } from "../../Styles/ButtonStyles";
import { datosMarketing } from "../../data/datosDespachados";
import { Checkbox, FormControlLabel } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { openAlert } from "../../redux/slices/Alert";
import filterById from "../../services/filterById";
import useMutationNewAct from "../../Hooks/useMutationNewAct";
import useCreateNotifi from "../../Hooks/useCreateNotifi";
import { v4 as uuidv4 } from "uuid";
import { bodyNotification } from "../../services/getNotifi";
import Loading from "../Loading";
import { optionsMtk } from "../../data/getOptionsMtk";
import { getUserEmail } from "../../services/getMailUser";
import { sendEmailMarketing } from "../../data/sendMail";

const ModalGenerarAct = ({ clientes, idClient, users }) => {
  const cliente = filterById(clientes, idClient);
  const mutationNewAct = useMutationNewAct();
  const notifiMutation = useCreateNotifi();
  const { isLoading } = mutationNewAct;
  const userEmail = getUserEmail(users.data.data, cliente.vendedor);
  const [data, setData] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const options = optionsMtk(cliente, datosMarketing);

  const handleCheckboxChange = (value) => {
    setData((prevData) => {
      // Verificar si el checkbox está seleccionado
      if (prevData.includes(value)) {
        // Si ya está seleccionado, eliminarlo del estado
        return prevData.filter((item) => item !== value);
      } else {
        // Si no está seleccionado, agregarlo al estado
        return [...prevData, value];
      }
    });
  };

  const handleSelectAllChange = () => {
    if (selectAll) {
      setData([]);
    } else {
      const allValues = datosMarketing.map((dato) => dato.value);
      setData(allValues);
    }
    setSelectAll((prevSelectAll) => !prevSelectAll);
  };

  const handlerNewAct = () => {
    if (data.length === 0) {
      return dispatch(
        openAlert({
          motivo: "Debes seleccionar al menos un campo",
          estado: "error",
        })
      );
    }
    data.forEach((tipoDato) => {
      const newActPen = {
        _id: uuidv4(),
        actividad: `Cliente no responde ante el pedido de ${tipoDato}`,
        fecha: new Date(),
        proximoContacto: new Date(),
        dato: tipoDato,
        estadoAct: "Pendiente",
        creador: cliente.vendedor,
      };
      mutationNewAct.mutateAsync({
        id: cliente._id,
        newActPen,
        userName: user.name,
      });
    });
    const bodyNotifi = bodyNotification(
      "No contesta - Marketing",
      cliente,
      users.data,
      user.name
    );
    notifiMutation.mutate(bodyNotifi);
    sendEmailMarketing(cliente.vendedor, user.name, cliente, userEmail);
  };

  return (
    <>
      <FormControlLabel
        control={
          <Checkbox
            checked={selectAll} // Checkbox de Seleccionar Todos
            onChange={handleSelectAllChange}
          />
        }
        label="Seleccionar Todos"
      />
      {options.map((dato, i) => (
        <div key={i}>
          <FormControlLabel
            control={
              <Checkbox
                checked={data.includes(dato.value)} // Verificar si el checkbox está seleccionado
                onChange={() => handleCheckboxChange(dato.value)} // Llamar a la función de cambio de checkbox
              />
            }
            label={dato.value}
          />
        </div>
      ))}
      <ButtonCustom onClick={handlerNewAct}>
        {isLoading ? <Loading /> : "Generar Actividad"}
      </ButtonCustom>
    </>
  );
};

export default ModalGenerarAct;

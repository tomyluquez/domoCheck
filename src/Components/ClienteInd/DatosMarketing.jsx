import { useState } from "react";
import SelectCustom from "../SelectCustom";
import { EstadosDatos, datosMarketing } from "../../data/datosDespachados";
import TexTarea from "../TexTarea";
import { ButtonCustom } from "../../Styles/ButtonStyles";
import {
  DivContainerDatosDespachados,
  DivFlex,
} from "../../Styles/Pages/ClientsIndStyles";
import useUpdateDatosDesp from "../../Hooks/useUpdateDatosDesp";
import Loading from "./../Loading";
import { useSelector } from "react-redux";

const DatosMarketing = ({ cliente }) => {
  const role = useSelector((state) => state.user.role);

  const [data, setData] = useState({
    "MP Conectado": {
      estado: cliente["MP Conectado"].estado || "",
      comentario: cliente["MP Conectado"].comentario || "-",
    },
    Marketing: {
      estado: cliente["Marketing"].estado || "",
      comentario: cliente["Marketing"].comentario || "-",
    },
  });

  const mutationDatos = useUpdateDatosDesp();
  const { isLoading } = mutationDatos;
  const handlerUpdate = (value) => {
    const datos = {
      idClient: cliente._id,
      tipoDato: value,
      estadoDato: data[value].estado,
      comentarioDato: data[value].comentario,
    };
    mutationDatos.mutate(datos);
  };

  return (
    <DivFlex>
      {datosMarketing.map((dato, index) => (
        <DivContainerDatosDespachados key={index}>
          <span>
            {dato.value}: {data[dato.value].estado}
          </span>
          <span>Comentario: {data[dato.value].comentario}</span>
          {role === "marketing" && (
            <>
              <SelectCustom
                w="15%"
                label="Estado"
                value={data[dato.value].estado} // Obtener el estado actual de "JPG a soporte"
                required={true}
                setValue={(newValue) =>
                  setData((prevState) => ({
                    ...prevState,
                    [dato.value]: {
                      ...prevState[dato.value],
                      estado: newValue, // Actualizar el valor del estado
                    },
                  }))
                }
                opciones={EstadosDatos}
              />
              <TexTarea
                width={"150px"}
                setObs={(newValue) =>
                  setData((prevState) => ({
                    ...prevState,
                    [dato.value]: {
                      ...prevState[dato.value],
                      comentario: newValue,
                    },
                  }))
                }
              />
              <ButtonCustom
                width="180px"
                onClick={() => handlerUpdate(dato.value)}
              >
                {isLoading ? <Loading /> : "Actualizar"}
              </ButtonCustom>
            </>
          )}
        </DivContainerDatosDespachados>
      ))}
    </DivFlex>
  );
};

export default DatosMarketing;

import { useState } from "react";
import SelectCustom from "../SelectCustom";
import { EstadosDatos, datosMarketing } from "../../data/datosDespachados";
import TexTarea from "../TexTarea";
import { ButtonCustom } from "../../Styles/ButtonStyles";
import {
  DivContainerDatosDespachados,
  DivFlex,
  IconEdit,
} from "../../Styles/Pages/ClientsIndStyles";
import useUpdateDatosDesp from "../../Hooks/useUpdateDatosDesp";
import Loading from "./../Loading";
import { useSelector } from "react-redux";
import { Cards } from "../../Styles/Pages/DashboardStyles";
import { colorFondo } from "../../Styles/GeneralStyles";
import useMutationVentas from "../../Hooks/useMutationVentas";

const DatosMarketing = ({ cliente }) => {
  const role = useSelector((state) => state.user.role);
  const userName = useSelector((state) => state.user.name);
  const [edit, setEdit] = useState(false);
  const [ventas, setVentas] = useState(cliente.ventas || 0);
  const mutationDatos = useUpdateDatosDesp();
  const { isLoading } = mutationDatos;
  const mutationVentas = useMutationVentas();

  const [data, setData] = useState(() => {
    const initialData = datosMarketing.reduce((acc, dato) => {
      return {
        ...acc,
        [dato.value]: {
          estado: cliente[dato.value]?.estado || "",
          comentario: cliente[dato.value]?.comentario || "-",
        },
      };
    }, {});

    return initialData;
  });

  const handlerVentas = () => {
    setEdit(false);
    mutationVentas.mutate({ idClient: cliente._id, ventas, userName });
  };

  const handlerUpdate = (value) => {
    const datos = {
      idClient: cliente._id,
      tipoDato: value,
      estadoDato: data[value].estado,
      comentarioDato: data[value].comentario,
      userName,
    };
    mutationDatos.mutate(datos);
  };

  return (
    <>
      <div
        className="flex"
        style={{
          marginBottom: "20px",
          fontSize: "40px",
          color: colorFondo,
          gap: "40px",
        }}
      >
        {" "}
        <span>Ventas:</span>
        {edit ? (
          <input
            type="number"
            defaultValue={ventas}
            onBlur={handlerVentas}
            onChange={(e) => setVentas(e.target.value)}
          />
        ) : (
          <span>{ventas}</span>
        )}
        <IconEdit onClick={() => setEdit(!edit)} />
      </div>
      <DivFlex>
        {datosMarketing.map((dato, index) => (
          <Cards key={index}>
            <DivContainerDatosDespachados style={{ width: "100%" }}>
              <span>
                {dato.value}: {data[dato.value]?.estado}
              </span>
              <span>Comentario: {data[dato.value]?.comentario}</span>
              {(role === "marketing" || role === "integrador") && (
                <>
                  <SelectCustom
                    w="15%"
                    label="Estado"
                    value={data[dato.value]?.estado} // Obtener el estado actual de "JPG a soporte"
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
          </Cards>
        ))}
      </DivFlex>
    </>
  );
};

export default DatosMarketing;

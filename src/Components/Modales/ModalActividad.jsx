import { useState } from "react";
import SelectCustom from "../SelectCustom";
import {
  DesktopDateTimePicker,
  LocalizationProvider,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import TexTarea from "../TexTarea";
import { ButtonCustom } from "../../Styles/ButtonStyles";
import useMutatioAct from "./../../Hooks/useMutatioAct";
import useMutationNewAct from "./../../Hooks/useMutationNewAct";
import useMutations from "./../../Hooks/useMutations";
import { useNavigate } from "react-router-dom";
import filterById from "../../services/filterById";
import { getOpcionesActividad } from "../../data/getOpciones";
import handlerUpdateAct from "../../services/handlerUpdateAct";
import { ModalActividades } from "../../Styles/ActividadesStyle";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../Loading";
import dayjs from "dayjs";
import useUpdateDatosDesp from "../../Hooks/useUpdateDatosDesp";
import useUpdateProspect from "../../Hooks/useUpdateProspect";
import { updateProspects } from "../../services/updateProspects";
import { openModal } from "../../redux/slices/modal";

const ModalActividad = ({ clientes, idClient, idAct }) => {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.user.name);
  const mutationAct = useMutatioAct();
  const mutationclient = useMutations();
  const mutationNewAct = useMutationNewAct();
  const mutationDatos = useUpdateDatosDesp();
  const updateProspect = useUpdateProspect();
  const navigate = useNavigate();
  const cliente = filterById(clientes, idClient);
  const [data, setData] = useState({
    resultado: "",
    proximoContacto: "",
    obs: "",
    interes: cliente.interes || "",
  });
  const actividad = cliente.actividades.filter(
    (actividad) => actividad._id === idAct
  )[0];
  const { opciones, opcionesInteres } = getOpcionesActividad(
    actividad,
    cliente
  );
  const [isLoading, setIsLoading] = useState(false);
  const disabled =
    (data.resultado !== "Entregado" &&
      (data.resultado === "" || data.obs === "")) ||
    (data.resultado === "" && data.proximoContacto === "" && data.obs === "");

  const handlerUpdate = () => {
    if (data.obs === "" && data.proximoContacto === "" && data.resultado === "")
      return;

    if (actividad.dato === "Contactar prospecto") {
      setIsLoading(true);

      return updateProspects(
        cliente,
        actividad,
        updateProspect,
        mutationAct,
        mutationNewAct,
        data.resultado,
        userName,
        dispatch,
        data.proximoContacto,
        setIsLoading,
        navigate,
        data.obs,
        data.interes
      );
    }

    setIsLoading(true);
    const props = {
      actividad,
      data,
      mutationAct,
      idAct,
      idClient,
      cliente,
      mutationclient,
      mutationNewAct,
      navigate,
      setIsLoading,
      dispatch,
      userName,
      mutationDatos,
    };
    handlerUpdateAct(props);
  };

  return (
    <ModalActividades>
      <div>
        <span>Actividad: </span>
        <span>{actividad.actividad}</span>
      </div>

      {data.resultado !== "Entregado" && (
        <>
          {data.resultado !== "No lo quiere" && (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopDateTimePicker
                sx={{ minWidth: 180, width: "45%" }}
                label="Fecha Proximo Contacto"
                disablePast
                defaultValue={dayjs()}
                onChange={(e) => setData({ ...data, proximoContacto: e.$d })}
              />
            </LocalizationProvider>
          )}
          <TexTarea
            obs={data.obs}
            setObs={(e) => setData({ ...data, obs: e })}
          />
        </>
      )}
      <SelectCustom
        w="40%"
        label="Interes"
        value={data.interes}
        setValue={(newValue) => setData({ ...data, interes: newValue })}
        opciones={opcionesInteres}
      />
      <SelectCustom
        w="40%"
        label="Resultado"
        value={data.resultado}
        setValue={(newValue) => setData({ ...data, resultado: newValue })}
        opciones={opciones}
      />
      <ButtonCustom
        width="50%"
        height="50px"
        disabled={disabled}
        type="submit"
        onClick={handlerUpdate}
      >
        {isLoading ? <Loading /> : "Cumplir Actividad"}
      </ButtonCustom>
      <button
        onClick={() =>
          dispatch(
            openModal({
              type: "Historial",
              referencia:
                actividad.dato === "Contactar prospecto"
                  ? "Prospecto"
                  : "Cliente",
              id: idClient,
              idAct: null,
            })
          )
        }
      >
        Historial
      </button>
    </ModalActividades>
  );
};

export default ModalActividad;

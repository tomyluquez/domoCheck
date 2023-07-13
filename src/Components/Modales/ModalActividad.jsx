import { useState } from "react";
import SelectCustom from "../SelectCustom";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
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

const ModalActividad = ({ clientes, idClient, idAct }) => {
  const [data, setData] = useState({
    resultado: "",
    proximoContacto: "",
    obs: "",
  });
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.user.name);
  const mutationAct = useMutatioAct();
  const mutationclient = useMutations();
  const mutationNewAct = useMutationNewAct();
  const navigate = useNavigate();
  const cliente = filterById(clientes, idClient);
  const actividad = cliente.actividades.filter(
    (actividad) => actividad._id === idAct
  )[0];
  const opciones = getOpcionesActividad(actividad);
  const [isLoading, setIsLoading] = useState(false);
  const disabled =
    (data.resultado !== "Entregado" &&
      (data.resultado === "" ||
        data.proximoContacto === "" ||
        data.obs === "")) ||
    (data.resultado === "" && data.proximoContacto === "" && data.obs === "");

  const handlerUpdate = () => {
    if (data.obs === "" && data.proximoContacto === "" && data.resultado === "")
      return;

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
    };
    handlerUpdateAct(props);
  };
  console.log(actividad);

  return (
    <ModalActividades>
      <div>
        <span>Actividad: </span>
        <span>{actividad.actividad}</span>
      </div>
      <SelectCustom
        w="40%"
        label="Resultado"
        value={data.resultado}
        setValue={(newValue) => setData({ ...data, resultado: newValue })}
        opciones={opciones}
      />
      {data.resultado !== "Entregado" && data.resultado !== "" && (
        <>
          {data.resultado !== "No lo quiere" && (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                sx={{ minWidth: 180, width: "45%" }}
                label="Fecha Proximo Contacto"
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
      <ButtonCustom
        width="50%"
        height="50px"
        disabled={disabled}
        type="submit"
        onClick={handlerUpdate}
      >
        {isLoading ? <Loading /> : "Cumplir Actividad"}
      </ButtonCustom>
    </ModalActividades>
  );
};

export default ModalActividad;

import {
  DesktopDateTimePicker,
  LocalizationProvider,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useState } from "react";
import TexTarea from "../TexTarea";
import { ButtonCustom } from "../../Styles/ButtonStyles";
import useMutations from "../../Hooks/useMutations";
import useMutationNewAct from "../../Hooks/useMutationNewAct";
import Loading from "../Loading";
import handlerUpdateSolicitud from "../../services/handlerUpdate";
import filterById from "../../services/filterById";
import { useDispatch, useSelector } from "react-redux";
import { ModalActividades } from "../../Styles/ActividadesStyle";
import dayjs from "dayjs";

const ModalSolicitud = ({ clientes, idClient, referencia }) => {
  const cliente = filterById(clientes, idClient);
  const userName = useSelector((state) => state.user.name);
  const mutationclient = useMutations();
  const mutationNewAct = useMutationNewAct();
  const { isLoading } = mutationclient;
  const dispatch = useDispatch();
  const [data, setData] = useState({
    proxContacto: "",
    obs: "",
  });
  const disabled = data.proxContacto === "" || data.obs === "";

  const handlerUpdate = (e) => {
    e.preventDefault();
    handlerUpdateSolicitud(
      mutationclient,
      mutationNewAct,
      cliente,
      referencia,
      data.proxContacto,
      "Solicitado",
      data.obs,
      dispatch,
      userName
    );
  };

  return (
    <ModalActividades>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DesktopDateTimePicker
          sx={{ minWidth: 180, width: "45%" }}
          label="Fecha Proximo Contacto"
          disablePast
          defaultValue={dayjs()}
          onChange={(e) => setData({ ...data, proxContacto: e.$d })}
        />
      </LocalizationProvider>
      <TexTarea obs={data.obs} setObs={(e) => setData({ ...data, obs: e })} />
      <ButtonCustom
        width="50%"
        height="50px"
        disabled={disabled}
        type="submit"
        onClick={handlerUpdate}
      >
        {isLoading ? <Loading /> : "Generar Actividad"}
      </ButtonCustom>
    </ModalActividades>
  );
};

export default ModalSolicitud;

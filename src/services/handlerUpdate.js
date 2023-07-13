import { v4 as uuidv4 } from "uuid";
import { closeModal } from "../redux/slices/modal";

const handlerUpdateSolicitud = async (
  mutationclient,
  mutationNewAct,
  cliente,
  info,
  proxContacto,
  infoEstado,
  obs,
  dispatch,
  userName
) => {
  await new Promise((resolve, reject) => {
    mutationclient.mutate(
      {
        id: cliente._id,
        datoClient: info,
        estadoClient: infoEstado,
      },
      {
        onSuccess: resolve,
        onError: reject,
      }
    );
  });

  const newActOk = {
    _id: uuidv4(),
    actividad: `${info} Solicitado`,
    fecha: new Date(),
    proximoContacto: new Date(),
    dato: info,
    estadoAct: "Cumplida",
    resultado: `${info} Solicitado`,
    fechaCumplimiento: new Date(),
    cumplidor: userName,
  };

  await new Promise((resolve, reject) => {
    mutationNewAct.mutate(
      {
        id: cliente._id,
        newActOk,
      },
      {
        onSuccess: resolve,
        onError: reject,
      }
    );
  });

  const newActPen = {
    _id: uuidv4(),
    actividad: obs || `Realizar seguimiento para confirmar que entrego ${info}`,
    fecha: new Date(),
    proximoContacto: new Date(proxContacto) || new Date(),
    dato: `Seguimiento ${info}`,
    estadoAct: "Pendiente",
    userName,
  };

  await new Promise((resolve, reject) => {
    mutationNewAct.mutate(
      {
        id: cliente._id,
        newActPen,
      },
      {
        onSuccess: resolve,
        onError: reject,
      }
    );
  });

  dispatch(closeModal());
};

export default handlerUpdateSolicitud;

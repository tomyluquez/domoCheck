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
        userName,
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
    resultado: `Se solicito ${info} a ${cliente.nombreLocal}`,
    fechaCumplimiento: new Date(),
    cumplidor: userName,
  };

  await new Promise((resolve, reject) => {
    mutationNewAct.mutate(
      {
        id: cliente._id,
        newActOk,
        userName,
      },
      {
        onSuccess: resolve,
        onError: reject,
      }
    );
  });

  const newActPen = {
    _id: uuidv4(),
    actividad:
      obs - cliente.nombreLocal ||
      `Realizar seguimiento de ${info} - ${cliente.nombreLocal}`,
    fecha: new Date(),
    proximoContacto: new Date(proxContacto) || new Date(),
    dato: `Seguimiento ${info}`,
    estadoAct: "Pendiente",
    creador: userName,
  };

  await new Promise((resolve, reject) => {
    mutationNewAct.mutate(
      {
        id: cliente._id,
        newActPen,
        userName,
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

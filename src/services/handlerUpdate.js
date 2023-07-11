import { v4 as uuidv4 } from "uuid";

const handlerUpdateSolicitud = async (
  mutationclient,
  mutationNewAct,
  cliente,
  info,
  proxContacto,
  infoEstado
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
    actividad: `Realizar seguimiento para confirmar que entrego ${info}`,
    fecha: new Date(),
    proximoContacto: new Date(Date.now() + proxContacto * 24 * 60 * 60 * 1000),
    dato: `Seguimiento ${info}`,
    estadoAct: "Pendiente",
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
};

export default handlerUpdateSolicitud;

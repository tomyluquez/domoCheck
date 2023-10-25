import { v4 as uuidv4 } from "uuid";
import { closeModal } from "../redux/slices/modal";
import { bodyNotification } from "./getNotifi";

export const retomarIntegracion = async (
  cliente,
  userName,
  mutationNewAct,
  mutationclient,
  users,
  notifiMutation,
  dispatch
) => {
  const newActOk = {
    _id: uuidv4(),
    actividad: "Cliente retomo la integracion",
    fecha: new Date(),
    proximoContacto: new Date(),
    dato: "Retomar integracion",
    estadoAct: "Cumplida",
    resultado: "Cliente retomo la integracion",
    fechaCumplimiento: new Date(),
    cumplidor: userName,
  };

  await mutationNewAct.mutateAsync({
    id: cliente._id,
    newActOk,
    userName,
  });
  await mutationclient.mutateAsync({
    id: cliente._id,
    estado: cliente.fechaIntegrado
      ? "Integrado"
      : cliente.fechaConfiguracion
      ? "Configuracion"
      : cliente.fechaTesteo
      ? "Testeo"
      : cliente.fechaDespachado
      ? "Despachado"
      : "Faltan datos",
    userName,
  });
  const bodyNotifi = bodyNotification("retoma", cliente, users.data, userName);
  notifiMutation.mutate(bodyNotifi);

  dispatch(closeModal());
};

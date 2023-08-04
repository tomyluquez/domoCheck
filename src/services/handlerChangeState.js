import { v4 as uuidv4 } from "uuid";
import { bodyNotification } from "./getNotifi";

const handlerChangeState = async (props) => {
  const {
    proximoContacto,
    obs,
    dato,
    estadoAct,
    resultado,
    mutationNewAct,
    cliente,
    mutationAct,
    idAct,
    mutationclient,
    estado,
    userName,
    users,
    notifiMutation,
  } = props;
  try {
    if (proximoContacto) {
      const newActOk = {
        _id: uuidv4(),
        actividad: obs,
        fecha: new Date(),
        proximoContacto,
        dato,
        estadoAct,
        resultado: resultado ? resultado : "",
        fechaCumplimiento: new Date(),
        cumplidor: userName,
      };
      mutationNewAct.mutate({
        id: cliente._id,
        newActOk,
        userName,
      });
    }
    mutationAct.mutate({
      actividadId: idAct,
      id: cliente._id,
      estado: "Cumplida",
      resultado,
      fechaCumplimiento: new Date(),
    });
    await mutationclient.mutate({ id: cliente._id, estado: estado, userName });
    const bodyNotifi = bodyNotification(estado, cliente, users, userName);
    if (estado !== "Configuracion") {
      notifiMutation.mutate(bodyNotifi);
    }
  } catch (error) {
    console.error(error);
  }
};
export default handlerChangeState;

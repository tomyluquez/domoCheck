import { v4 as uuidv4 } from "uuid";

const handlerChangeState = (props) => {
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
  } = props;
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
    };
    mutationNewAct.mutate({
      id: cliente._id,
      newActOk,
    });
  }

  mutationAct.mutate({
    actividadId: idAct,
    id: cliente._id,
    estado: "Cumplida",
    resultado,
    fechaCumplimiento: new Date(),
  });

  mutationclient.mutate({ id: cliente._id, estado: estado });
};

export default handlerChangeState;

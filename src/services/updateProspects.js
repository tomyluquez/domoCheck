import { closeModal, openModal } from "../redux/slices/modal";
import { v4 as uuidv4 } from "uuid";

export const updateProspects = async (
  prospect,
  actividad,
  updateProspect,
  mutationAct,
  mutationNewAct,
  resultado,
  user,
  dispatch,
  proximoContacto,
  setIsLoading,
  navigate,
  obs,
  interes
) => {
  await updateProspect.mutate({
    id: prospect._id,
    estado: resultado === "Entregado" ? "Acepto" : resultado,
    interes,
  });

  await mutationAct.mutateAsync({
    actividadId: actividad._id,
    id: prospect._id,
    actividad:
      resultado === "Entregado" ? "Cliente acepto la integracion" : obs,
    estado: "Cumplida",
    resultado:
      resultado === "Entregado" ? "Cliente acepto la integracion" : obs,
    fechaCumplimiento: new Date(),
    userName: user.name,
    prospect: true,
  });

  if (resultado === "Seguimiento") {
    const newActPen = {
      _id: uuidv4(),
      actividad: "Contactar prospecto",
      fecha: new Date(),
      proximoContacto: proximoContacto,
      dato: actividad.dato,
      estadoAct: "Pendiente",
      creador: user.name,
    };

    await mutationNewAct.mutateAsync({
      id: prospect._id,
      newActPen,
      userName: user.name,
      prospect: true,
    });
  }
  setIsLoading(false);
  dispatch(closeModal());
  navigate("/");

  if (resultado === "Entregado") {
    dispatch(openModal({ type: "Agregar cliente" }));
  }
};

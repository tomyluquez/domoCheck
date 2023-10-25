import { v4 as uuidv4 } from "uuid";
import getHiyto from "./getHito";
import { changeValue } from "../redux/slices/value";
import { sendEmailActs } from "../data/sendMail";
import { retomarIntegracion } from "./retomarIntegracion";

const handlerUpdateAct = async (props) => {
  const {
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
    user,
    userEmail,
    mutationDatos,
    users,
    notifiMutation,
  } = props;
  try {
    const hito = getHiyto(actividad, data.resultado, cliente);
    let tipo = actividad.dato;
    if (actividad.dato.includes("Seguimiento")) {
      tipo = actividad.dato.split("Seguimiento ")[1];
    }

    await mutationAct.mutateAsync({
      actividadId: idAct,
      id: idClient,
      estado: "Cumplida",
      resultado: hito,
      fechaCumplimiento: new Date(),
      userName: user.name,
    });

    if (data.interes !== "") {
      await mutationclient.mutateAsync({
        id: cliente._id,
        interes: data.interes,
        userName: user.name,
      });
    }

    if (data.resultado === "StandBy") {
      await mutationclient.mutateAsync({
        id: cliente._id,
        estado: data.resultado,
        userName: user.name,
      });
    }

    if (data.resultado === "Responde") {
      retomarIntegracion(
        cliente,
        user.name,
        mutationNewAct,
        mutationclient,
        users,
        notifiMutation,
        dispatch
      );
    }

    if (actividad.dato === "Contactar") {
      await mutationclient.mutateAsync({
        id: cliente._id,
        estado:
          data.resultado === "Entregado" ? "Faltan datos" : data.resultado,
        userName: user.name,
      });
    } else if (
      actividad.dato !== "Contactar" &&
      !actividad.dato.includes("Seguimiento") &&
      data.resultado === "Entregado"
    ) {
      const datos = {
        idClient: cliente._id,
        tipoDato: actividad.dato,
        estadoDato: "Ok",
        comentarioDato: "",
        userName: user.name,
      };
      mutationDatos.mutate(datos);
    } else {
      await mutationclient.mutateAsync({
        id: cliente._id,
        datoClient: tipo,
        estadoClient:
          data.resultado === "Entregado"
            ? tipo !== "menu" && tipo !== "datos"
              ? "Entregado"
              : "Entregado no procesado"
            : "Solicitado",
        userName: user.name,
      });
    }

    if (data.resultado !== "Entregado" && data.resultado !== "No lo quiere") {
      const newActOk = {
        _id: uuidv4(),
        actividad: `${
          actividad.dato === "Contactar" && data.resultado === "Entregado"
            ? "Cliente contactado"
            : data.resultado === "Entregado"
            ? `${actividad.dato} Entregada`
            : `${data.obs}`
        }`,
        fecha: new Date(),
        proximoContacto: data.proximoContacto || new Date(),
        dato: actividad.dato,
        estadoAct: data.resultado === "Entregado" ? "Cumplida" : "Pendiente",
        resultado:
          data.resultado === "Entregado"
            ? `${cliente.nombreLocal} entrego ${tipo}`
            : "",
        fechaCumplimiento: new Date(),
        creador: user.role === "vendedor" ? user.vendedor : user.name,
      };

      await mutationNewAct.mutateAsync({
        id: cliente._id,
        newActOk,
        userName: user.name,
      });
    } else if (data.resultado === "StandBy") {
      const newActPen = {
        _id: uuidv4(),
        actividad: `Contactar a ${cliente.nombreLocal} ya que no responde`,
        fecha: new Date(),
        proximoContacto: data.proximoContacto || new Date(),
        dato: "StandBy",
        estadoAct: "Pendiente",
        creador: cliente.vendedor,
      };

      await mutationNewAct.mutateAsync({
        id: cliente._id,
        newActPen,
        userName: user.name,
      });

      sendEmailActs(cliente.vendedor, user.name, cliente, userEmail);
    }

    setIsLoading(false);
    dispatch(
      changeValue(
        actividad.dato !== "Contactar" &&
          !actividad.dato.includes("Seguimiento")
          ? "8"
          : "1"
      )
    );
    navigate(`/Actividades`);
  } catch (error) {
    // Manejo de errores
  }
};

export default handlerUpdateAct;

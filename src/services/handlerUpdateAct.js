import { v4 as uuidv4 } from "uuid";
import getHiyto from "./getHito";
import { changeValue } from "../redux/slices/value";

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
  } = props;

  try {
    const hito = getHiyto(actividad, data.resultado);
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
    });

    if (actividad.dato === "Contactar") {
      await mutationclient.mutateAsync({
        id: cliente._id,
        estado:
          data.resultado === "Entregado" ? "Faltan datos" : data.resultado,
      });
    } else {
      await mutationclient.mutateAsync({
        id: cliente._id,
        datoClient: tipo,
        estadoClient:
          data.resultado === "Entregado" ? "Entregado" : "Solicitado",
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
            ? `Cliente entrego ${actividad.dato}`
            : "",
        fechaCumplimiento: new Date(),
      };

      await mutationNewAct.mutateAsync({
        id: cliente._id,
        newActOk,
      });
    }
    setIsLoading(false);
    dispatch(changeValue("1"));
    navigate(`/clientes/${cliente._id}`);
  } catch (error) {
    // Manejo de errores
  }
};

export default handlerUpdateAct;

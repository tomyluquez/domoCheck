const findOthersAct = (cliente) => {
  const actividadesPendientes = cliente.actividades.filter(
    (actividad) => actividad.estadoAct === "Pendiente"
  );

  return actividadesPendientes.length;
};

export default findOthersAct;

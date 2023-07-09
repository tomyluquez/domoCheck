const findOthersAct = (cliente) => {
  const actividadesPendientes = cliente.actividades.filter(
    (actividad) => actividad.estadoAct === "Pendiente"
  );

  return actividadesPendientes.length > 1;
};

export default findOthersAct;

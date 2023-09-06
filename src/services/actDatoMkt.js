export const actDatoMkt = (cliente, dato) => {
  return cliente.actividades.filter(
    (actividad) =>
      actividad.dato === dato && actividad.estadoAct === "Pendiente"
  );
};

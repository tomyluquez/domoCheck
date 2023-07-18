import filterByAct from "./filterByAct";

export const actTodayCump = (clientes) => {
  const day = new Date().getDate();
  const month = new Date().getMonth();
  const year = new Date().getFullYear();
  const { actividadesPendientes, actividadesCumplidas } = filterByAct(clientes);
  const actCumplidasToday = actividadesCumplidas
    .filter(
      (act) =>
        new Date(act.actividad.fechaCumplimiento).getDate() === day &&
        new Date(act.actividad.fechaCumplimiento).getMonth() === month &&
        new Date(act.actividad.fechaCumplimiento).getFullYear() === year
    )
    .sort(
      (a, b) =>
        new Date(a.actividad.fechaCumplimiento).getHours() -
        new Date(b.actividad.fechaCumplimiento).getHours()
    );

  const actPendientesToday = actividadesPendientes.filter(
    (act) =>
      new Date(act.actividad.proximoContacto).getFullYear() <= year &&
      new Date(act.actividad.proximoContacto).getMonth() <= month &&
      new Date(act.actividad.proximoContacto).getDate() <= day
  );
  return { actCumplidasToday, actPendientesToday };
};

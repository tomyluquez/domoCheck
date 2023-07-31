import filterByAct from "./filterByAct";

export const actTodayCump = (clientes, usuario) => {
  const day = new Date().getDate();
  const month = new Date().getMonth();
  const year = new Date().getFullYear();
  const hours = new Date().getHours();
  const minutes = new Date().getMinutes();

  let { actividadesPendientes, actividadesCumplidas } = filterByAct(clientes);

  if (usuario !== "Todos") {
    actividadesPendientes = [...actividadesPendientes].filter(
      (act) => act.actividad.creador === usuario
    );
    actividadesCumplidas = [...actividadesCumplidas].filter(
      (act) => act.actividad.cumplidor === usuario
    );
  }

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
      new Date(act.actividad.proximoContacto).getFullYear() === year &&
      new Date(act.actividad.proximoContacto).getMonth() === month &&
      new Date(act.actividad.proximoContacto).getDate() === day &&
      (new Date(act.actividad.proximoContacto).getHours() > hours || // Ajusta la condición aquí
        (new Date(act.actividad.proximoContacto).getHours() === hours &&
          new Date(act.actividad.proximoContacto).getMinutes() >= minutes))
  );

  const actVencidas = actividadesPendientes.filter(
    (act) =>
      new Date(act.actividad.proximoContacto).getFullYear() <= year &&
      new Date(act.actividad.proximoContacto).getMonth() <= month &&
      new Date(act.actividad.proximoContacto).getDate() <= day &&
      (new Date(act.actividad.proximoContacto).getHours() < hours || // Ajusta la condición aquí
        (new Date(act.actividad.proximoContacto).getHours() === hours &&
          new Date(act.actividad.proximoContacto).getMinutes() < minutes))
  );

  return { actCumplidasToday, actPendientesToday, actVencidas };
};

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
      new Date(act.actividad.proximoContacto).getDate() + 1 === day &&
      (new Date(act.actividad.proximoContacto).getHours() > hours || // Ajusta la condición aquí
        (new Date(act.actividad.proximoContacto).getHours() === hours &&
          new Date(act.actividad.proximoContacto).getMinutes() >= minutes))
  );
  const actVencidas = actividadesPendientes.filter((act) => {
    const actDate = new Date(act.actividad.proximoContacto);
    if (actDate.getFullYear() <= year && actDate.getMonth() < month) {
      return true;
    } else if (
      actDate.getFullYear() <= year &&
      actDate.getMonth() === month &&
      actDate.getDate() + 1 < day
    ) {
      return true;
    } else if (
      actDate.getFullYear() <= year &&
      actDate.getMonth() === month &&
      actDate.getDate() + 1 === day &&
      actDate.getHours() < hours
    ) {
      return true;
    } else if (
      actDate.getFullYear() <= year &&
      actDate.getMonth() === month &&
      actDate.getDate() + 1 === day &&
      actDate.getHours() <= hours &&
      actDate.getMinutes() < minutes
    ) {
      return true;
    } else return false;
  });

  return { actCumplidasToday, actPendientesToday, actVencidas };
};

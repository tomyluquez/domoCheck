const filterByAct = (clientes, prospectos) => {
  const actividadesPendientes = [];
  const actividadesCumplidas = [];

  clientes.forEach((cliente) => {
    cliente.actividades.forEach((actividad) => {
      if (actividad.estadoAct === "Pendiente") {
        actividadesPendientes.push({
          cliente: cliente,
          actividad: actividad,
        });
      }
      if (actividad.estadoAct === "Cumplida") {
        actividadesCumplidas.push({
          cliente: cliente,
          actividad: actividad,
        });
      }
    });
  });

  if (prospectos && prospectos.length > 0) {
    prospectos.forEach((prospecto) => {
      prospecto.actividades.forEach((actividad) => {
        if (actividad.estadoAct === "Pendiente") {
          actividadesPendientes.push({
            cliente: prospecto,
            actividad: actividad,
          });
        }
        if (actividad.estadoAct === "Cumplida") {
          actividadesCumplidas.push({
            cliente: prospecto,
            actividad: actividad,
          });
        }
      });
    });
  }

  actividadesPendientes.sort(
    (a, b) =>
      new Date(a.actividad.proximoContacto) -
      new Date(b.actividad.proximoContacto)
  );
  actividadesCumplidas.sort(
    (a, b) =>
      new Date(a.actividad.proximoContacto) -
      new Date(b.actividad.proximoContacto)
  );
  return { actividadesPendientes, actividadesCumplidas };
};

export default filterByAct;

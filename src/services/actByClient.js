const actByClient = (cliente) => {
  let actividadesCliente = [];
  let actividadesPendientes = [];
  let actividadesCumplidas = [];

  cliente.actividades.forEach((actividad) => {
    if (actividad.estadoAct === "Pendiente") {
      actividadesPendientes.push({
        cliente: cliente,
        actividad: actividad,
      });
      actividadesCliente.push({
        cliente: cliente,
        actividad: actividad,
      });
    }
    if (actividad.estadoAct === "Cumplida") {
      actividadesCumplidas.push({
        cliente: cliente,
        actividad: actividad,
      });
      actividadesCliente.push({
        cliente: cliente,
        actividad: actividad,
      });
    }
  });

  actividadesCliente.sort(
    (a, b) =>
      new Date(a.actividad.proximoContacto) -
      new Date(b.actividad.proximoContacto)
  );
  actividadesPendientes.sort(
    (a, b) =>
      new Date(a.actividad.proximoContacto) -
      new Date(b.actividad.proximoContacto)
  );
  actividadesCumplidas.sort(
    (a, b) =>
      new Date(b.actividad.proximoContacto) -
      new Date(a.actividad.proximoContacto)
  );

  return {
    actividadesCliente,
    actividadesPendientes,
    actividadesCumplidas,
  };
};

export default actByClient;

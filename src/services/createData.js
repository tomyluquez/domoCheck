export function createData(cliente) {
  return {
    ...cliente,
    Datos: [
      {
        tipo: "menu",
        estado: cliente.menu.estado,
        fechaSolicitud:
          cliente.menu.fechaEntregado ||
          cliente.menu.fechaSolicitado ||
          "Pendiente de Solicitar",
      },
      {
        tipo: "datos",
        estado: cliente.datos.estado,
        fechaSolicitud:
          cliente.datos.fechaEntregado ||
          cliente.datos.fechaSolicitado ||
          "Pendiente de Solicitar",
      },
      {
        tipo: "imgStore",
        estado: cliente.imgStore.estado,
        fechaSolicitud:
          cliente.imgStore.fechaEntregado ||
          cliente.imgStore.fechaSolicitado ||
          "Pendiente de Solicitar",
      },
      {
        tipo: "imgProd",
        estado: cliente.imgProd.estado,
        fechaSolicitud:
          cliente.imgProd.fechaEntregado ||
          cliente.imgProd.fechaSolicitado ||
          "Pendiente de Solicitar",
      },
      {
        tipo: "mapa",
        estado: cliente.mapa.estado,
        fechaSolicitud:
          cliente.mapa.fechaEntregado ||
          cliente.mapa.fechaSolicitado ||
          "Pendiente de Solicitar",
      },
    ],
  };
}

export const createRows = (cliente) => {
  const rows = cliente.actividades.map((actividad) => ({
    estado: actividad.estadoAct,
    nombreLocal: cliente.nombreLocal,
    nombreCrm: cliente.nombreCrm,
    telContacto: cliente.telContacto,
    vencimiento: actividad.proximoContacto,
    actividad: actividad.dato,
    comentario: actividad.actividad,
  }));
  return rows;
};

export const createRowHistorial = (cliente, actividades) => {
  const rows = actividades.map((actividad) => ({
    estado: actividad.estadoAct,
    nombreLocal: cliente.nombreLocal,
    nombreCrm: cliente.nombreCrm,
    telContacto: cliente.telContacto,
    vencimiento: actividad.proximoContacto,
    actividad: actividad.dato,
    comentario: actividad.actividad,
  }));
  return rows;
};

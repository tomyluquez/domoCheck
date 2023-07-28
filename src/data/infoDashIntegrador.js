const datosDashIntegrador = (clientes, estado) => {
  if (estado === "Pendientes de despachar") {
    return [...clientes].filter(
      (cliente) =>
        cliente.estado === "Faltan datos" &&
        cliente.menu.estado === "Entregado" &&
        cliente.mapa.estado === "Entregado" &&
        cliente.imgStore.estado === "Entregado" &&
        cliente.imgProd.estado === "Entregado" &&
        cliente.datos.estado === "Entregado"
    );
  }

  if (estado === "En testo") {
    return [...clientes].filter((cliente) => cliente.estado === "Testeo");
  }

  if (estado === "En configuracion") {
    return [...clientes].filter(
      (cliente) => cliente.estado === "Configuracion"
    );
  }
};

export const dataDash = (clientes) => {
  return [
    {
      estado: "Pendientes de despachar",
      data: datosDashIntegrador(clientes, "Pendientes de despachar"),
    },
    {
      estado: "En testeo",
      data: datosDashIntegrador(clientes, "En testeo"),
    },

    {
      estado: "En configuracion",
      data: datosDashIntegrador(clientes, "En configuracion"),
    },
  ];
};

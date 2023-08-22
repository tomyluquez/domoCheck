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

  if (estado === "En testeo") {
    return [...clientes].filter((cliente) => cliente.estado === "Testeo");
  }

  if (estado === "En configuracion") {
    return [...clientes].filter(
      (cliente) => cliente.estado === "Configuracion"
    );
  }

  if (estado === "Clientes despachados") {
    return [...clientes].filter((cliente) => cliente.estado === "Despachado");
  }

  if (estado === "Menu sin procesar") {
    return [...clientes].filter(
      (cliente) =>
        cliente.estado === "Faltan datos" &&
        cliente.menu.estado === "Entregado no procesado"
    );
  }

  if (estado === "Datos sin procesar") {
    return [...clientes].filter(
      (cliente) =>
        cliente.estado === "Faltan datos" &&
        cliente.datos.estado === "Entregado no procesado"
    );
  }
};

export const dataDash = (clientes, role) => {
  if (role === "masDelivery") {
    return [
      {
        estado: "Clientes despachados",
        data: datosDashIntegrador(clientes, "Clientes despachados"),
        click: true,
        busqueda: "Despachado",
      },
    ];
  }
  return [
    {
      estado: "Menu sin procesar",
      data: datosDashIntegrador(clientes, "Menu sin procesar"),
      click: false,
    },
    {
      estado: "Datos sin procesar",
      data: datosDashIntegrador(clientes, "Datos sin procesar"),
      click: false,
    },
    {
      estado: "Pendientes de despachar",
      data: datosDashIntegrador(clientes, "Pendientes de despachar"),
      click: false,
    },
    {
      estado: "En testeo",
      data: datosDashIntegrador(clientes, "En testeo"),
      click: true,
      busqueda: "Testo",
    },

    {
      estado: "En configuracion",
      data: datosDashIntegrador(clientes, "En configuracion"),
      click: true,
      busqueda: "Configuracion",
    },
  ];
};

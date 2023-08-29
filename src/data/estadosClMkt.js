export const estadosClMkt = [
  { value: "Historias", descripcion: "Historias" },
  { value: "Promos", descripcion: "Promos" },
  { value: "Link IG", descripcion: "Link IG" },
  { value: "Playstore", descripcion: "Playstore" },
  { value: "Link Whatsapp", descripcion: "Link Whatsapp" },
  { value: "Campañas email", descripcion: "Campañas email" },
  { value: "MP Conectado", descripcion: "MP Conectado" },
];

export const stateDashClMkt = (clientes) => {
  let datos = clientes.filter((cliente) =>
    cliente.actividades.some((actividad) =>
      estadosClMkt.some((estado) => estado.value === actividad.dato)
    )
  );
  let clientsWhitAct = datos.map((cliente) => {
    return {
      cliente: cliente.nombreLocal,
      estadoDatos: estadosClMkt.map((estado) => {
        return {
          dato: estado.value,
          estadoDato: cliente[estado.value].estado,
        };
      }),
    };
  });

  return clientsWhitAct;
};

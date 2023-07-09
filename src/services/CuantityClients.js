export const cantidadSolicitados = (clientes, vendedor) => {
  return [...clientes].filter((cliente) => cliente.vendedor === vendedor)
    .length;
};

export const cantidadIntegrados = (clientes, vendedor) => {
  return [...clientes].filter(
    (cliente) => cliente.vendedor === vendedor && cliente.estado === "Integrado"
  ).length;
};

export const cantidadIntegradosTotales = (clientes) => {
  return [...clientes].filter((cliente) => cliente.estado === "Integrado")
    .length;
};

export const cantidadDatosSolicitados = (clientes) => {
  return [...clientes].filter((cliente) => cliente.estado === "Faltan datos")
    .length;
};

export const cantidadDespachados = (clientes) => {
  return [...clientes].filter((cliente) => cliente.estado === "Despachado")
    .length;
};

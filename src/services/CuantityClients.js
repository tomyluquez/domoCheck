import calculateDays from "./calculateDays";

export const cantidadSolicitados = (clientes, vendedor) => {
  return [...clientes].filter((cliente) => cliente.vendedor === vendedor)
    .length;
};

export const cantidadIntegradosTotales = (clientes, vendedor) => {
  let clientesIntegradosTotales;
  if (vendedor) {
    clientesIntegradosTotales = [...clientes].filter(
      (cliente) =>
        cliente.estado === "Integrado" && cliente.vendedor === vendedor
    ).length;
  } else {
    clientesIntegradosTotales = [...clientes].filter(
      (cliente) => cliente.estado === "Integrado"
    ).length;
  }

  return clientesIntegradosTotales;
};

export const cantidadIntegradosToday = (clientes, vendedor) => {
  const day = new Date().getDate();
  const month = new Date().getMonth();
  const year = new Date().getFullYear();
  let clientesIntegrados;
  if (vendedor) {
    clientesIntegrados = [...clientes].filter(
      (cliente) =>
        cliente.estado === "Integrado" &&
        new Date(cliente.fechaIntegrado).getDate() === day &&
        new Date(cliente.fechaIntegrado).getMonth() === month &&
        new Date(cliente.fechaIntegrado).getFullYear() === year &&
        cliente.vendedor === vendedor
    ).length;
  } else {
    clientesIntegrados = [...clientes].filter(
      (cliente) =>
        cliente.estado === "Integrado" &&
        new Date(cliente.fechaIntegrado).getDate() === day &&
        new Date(cliente.fechaIntegrado).getMonth === month &&
        new Date(cliente.fechaIntegrado).getFullYear() === year
    ).length;
  }

  return clientesIntegrados;
};

export const cantidadDespachados = (clientes) => {
  return [...clientes].filter((cliente) => cliente.estado === "Despachado")
    .length;
};

export const promDiasIntegrados = (clientes, vendedor) => {
  let integrados = [];

  if (vendedor) {
    integrados = clientes.filter(
      (cliente) =>
        cliente.estado === "Integrado" && cliente.vendedor === vendedor
    );
  } else {
    integrados = clientes.filter((cliente) => cliente.estado === "Integrado");
  }
  const days = integrados.map((cliente) =>
    calculateDays(cliente.fechaSolicitud, cliente.fechaIntegrado)
  );
  return Math.round(days.reduce((a, b) => a + b, 0) / days.length);
};

export const cantClientes = (clientes, vendedor) => {
  if (vendedor) {
    return [...clientes].filter((cliente) => cliente.vendedor === vendedor)
      .length;
  }
  return [...clientes].length;
};

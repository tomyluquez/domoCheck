import calculateDays from "./calculateDays";

export const cantidadSolicitados = (clientes, vendedor) => {
  return [...clientes].filter((cliente) => cliente.vendedor === vendedor)
    .length;
};

export const cantidadIntegradosSemana = (clientes, vendedor) => {
  let clientesIntegradosSemana;
  const fechaActual = new Date();
  const diaSemana = fechaActual.getDay();
  const lunesSemanaActual = new Date(
    fechaActual.getFullYear(),
    fechaActual.getMonth(),
    fechaActual.getDate() - diaSemana + 1
  );
  const proximoLunes = new Date(lunesSemanaActual);
  proximoLunes.setDate(proximoLunes.getDate() + 7);
  if (vendedor) {
    clientesIntegradosSemana = [...clientes].filter(
      (cliente) =>
        cliente.estado === "Integrado" &&
        cliente.vendedor === vendedor &&
        new Date(cliente.fechaIntegrado) >= lunesSemanaActual &&
        new Date(cliente.fechaIntegrado) < proximoLunes
    ).length;
  } else {
    clientesIntegradosSemana = [...clientes].filter(
      (cliente) =>
        cliente.estado === "Integrado" &&
        new Date(cliente.fechaIntegrado) >= lunesSemanaActual &&
        new Date(cliente.fechaIntegrado) < proximoLunes
    ).length;
  }
  return clientesIntegradosSemana;
};

export const cantidadIntegradosSemanaAnterior = (clientes, vendedor) => {
  let clientesIntegradosSemanaAnterior;
  const fechaActual = new Date();
  const diaSemana = fechaActual.getDay();
  const lunesSemanaActual = new Date(
    fechaActual.getFullYear(),
    fechaActual.getMonth(),
    fechaActual.getDate() - diaSemana + 1
  );
  const lunesAnterior = new Date(lunesSemanaActual);
  lunesAnterior.setDate(lunesAnterior.getDate() - 7);
  if (vendedor) {
    clientesIntegradosSemanaAnterior = [...clientes].filter(
      (cliente) =>
        cliente.estado === "Integrado" &&
        cliente.vendedor === vendedor &&
        new Date(cliente.fechaIntegrado) >= lunesAnterior &&
        new Date(cliente.fechaIntegrado) < lunesSemanaActual
    ).length;
  } else {
    clientesIntegradosSemanaAnterior = [...clientes].filter(
      (cliente) =>
        cliente.estado === "Integrado" &&
        new Date(cliente.fechaIntegrado) >= lunesAnterior &&
        new Date(cliente.fechaIntegrado) < lunesSemanaActual
    ).length;
  }
  return clientesIntegradosSemanaAnterior;
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

export const cantIntegradosMensual = (clientes, vendedor) => {
  let integradosMensuales;
  const fechaActual = new Date();
  const primerDiaMesActual = new Date(
    fechaActual.getFullYear(),
    fechaActual.getMonth(),
    1
  );
  const ultimoDiaMesActual = new Date(
    fechaActual.getFullYear(),
    fechaActual.getMonth() + 1,
    0
  );
  if (vendedor) {
    integradosMensuales = [...clientes].filter(
      (cliente) =>
        cliente.estado === "Integrado" &&
        cliente.vendedor === vendedor &&
        new Date(cliente.fechaIntegrado) >= primerDiaMesActual &&
        new Date(cliente.fechaIntegrado) <= ultimoDiaMesActual
    ).length;
  } else {
    integradosMensuales = [...clientes].filter(
      (cliente) =>
        cliente.estado === "Integrado" &&
        new Date(cliente.fechaIntegrado) >= primerDiaMesActual &&
        new Date(cliente.fechaIntegrado) < ultimoDiaMesActual
    ).length;
  }
  return integradosMensuales;
};

export const cantIntegradosMensualAnterior = (clientes, vendedor) => {
  let integradosMensuales;
  const fechaActual = new Date();
  const primerDiaMesAnterior = new Date(
    fechaActual.getFullYear(),
    fechaActual.getMonth() - 1,
    1
  );
  const ultimoDiaMesAnterior = new Date(
    fechaActual.getFullYear(),
    fechaActual.getMonth(),
    0
  );
  if (vendedor) {
    integradosMensuales = [...clientes].filter(
      (cliente) =>
        cliente.estado === "Integrado" &&
        cliente.vendedor === vendedor &&
        new Date(cliente.fechaIntegrado) >= primerDiaMesAnterior &&
        new Date(cliente.fechaIntegrado) <= ultimoDiaMesAnterior
    ).length;
  } else {
    integradosMensuales = [...clientes].filter(
      (cliente) =>
        cliente.estado === "Integrado" &&
        new Date(cliente.fechaIntegrado) >= primerDiaMesAnterior &&
        new Date(cliente.fechaIntegrado) < ultimoDiaMesAnterior
    ).length;
  }
  return integradosMensuales;
};

export const cantidadSinIntegrar = (clientes, vendedor) => {
  let cantidadSinIntegrar;
  if (vendedor) {
    cantidadSinIntegrar = [...clientes].filter(
      (cliente) =>
        cliente.estado !== "Integrado" &&
        cliente.estado !== "No lo quiere" &&
        cliente.vendedor === vendedor
    ).length;
  } else {
    cantidadSinIntegrar = [...clientes].filter(
      (cliente) =>
        cliente.estado !== "Integrado" && cliente.estado !== "No lo quiere"
    ).length;
  }
  return cantidadSinIntegrar;
};

export const cantidadIntegradosTotales = (clientes, vendedor) => {
  let integradosTotales;
  if (vendedor) {
    integradosTotales = [...clientes].filter(
      (cliente) =>
        cliente.estado === "Integrado" && cliente.vendedor === vendedor
    ).length;
  } else {
    integradosTotales = [...clientes].filter(
      (cliente) => cliente.estado === "Integrado"
    ).length;
  }
  return integradosTotales;
};

export const clientesFaltanDatos = (clientes) => {
  return [...clientes].filter((cliente) => cliente.estado === "Faltan datos")
    .length;
};
export const clientesSinContestar = (clientes) => {
  return [...clientes].filter((cliente) => cliente.estado === "No contesta")
    .length;
};

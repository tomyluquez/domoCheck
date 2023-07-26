export const filterByType = (clientes, dato, tipo) => {
  let value;

  if (tipo === "todos") {
    value = [...clientes].filter(
      (cliente) => cliente.estado !== "No lo quiere"
    ).length;
  }

  if (tipo === "Pendientes") {
    value = [...clientes].filter(
      (cliente) =>
        (cliente.estado !== "No lo quiere" &&
          cliente[dato].estado === "Pendiente de solicitar") ||
        cliente[dato].estado === "Pendiente"
    ).length;
  }

  if (tipo !== "todos" && tipo !== "Pendientes") {
    value = [...clientes].filter(
      (cliente) =>
        cliente.estado !== "No lo quiere" && cliente[dato].estado === tipo
    ).length;
  }

  return value;
};

export const filterByTypePorcent = (clientes, dato, tipo) => {
  let value;
  let cantidadActivos = [...clientes].filter(
    (cliente) => cliente.estado !== "No lo quiere"
  ).length;

  if (tipo === "Pendientes") {
    value =
      ([...clientes].filter(
        (cliente) =>
          (cliente.estado !== "No lo quiere" &&
            cliente[dato].estado === "Pendiente de solicitar") ||
          cliente[dato].estado === "Pendiente"
      ).length /
        cantidadActivos) *
      100;
  }

  if (tipo !== "todos" && tipo !== "Pendientes") {
    value =
      ([...clientes].filter(
        (cliente) =>
          cliente.estado !== "No lo quiere" && cliente[dato].estado === tipo
      ).length /
        cantidadActivos) *
      100;
  }

  return value;
};

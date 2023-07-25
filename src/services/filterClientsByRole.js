const filterClientByRole = (clientes, role) => {
  if (role === "comercial") {
    return [...clientes].filter(
      (cliente) =>
        cliente.estado === "Pendiente" ||
        cliente.estado === "Faltan datos" ||
        cliente.estado === "No contesta" ||
        cliente.estado === "No lo quiere"
    );
  }

  if (role === "masDelivery") {
    return [...clientes].filter(
      (cliente) =>
        cliente.estado === "Despachado" || cliente.estado === "Integrado"
    );
  }

  if (role === "marketing") {
    return [...clientes].filter((cliente) => cliente.estado === "Integrado");
  }
  return clientes;
};
export default filterClientByRole;

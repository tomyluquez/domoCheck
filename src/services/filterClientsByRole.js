const filterClientByRole = (clientes, role) => {
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

export const dataAutocomplete = (clientes) => {
  const clientesPorLocal = [...clientes].map((cliente) => ({
    label: cliente.nombreLocal,
    value: cliente._id,
  }));
  return clientesPorLocal;
};

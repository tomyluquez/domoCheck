export const objModCliente = (cliente, data) => {
  const objDatacliente = {};

  // Comprobar si los campos han sido modificados y agregarlos al objeto
  if (data.nombreLocal !== cliente.nombreLocal) {
    objDatacliente.nombreLocal = data.nombreLocal;
  }
  if (data.instagram !== cliente.redes?.instagram) {
    objDatacliente.instagram = data.instagram;
  }
  if (data.seguidores !== cliente.redes?.seguidores) {
    objDatacliente.seguidores = data.seguidores;
  }
  if (data.logistica !== cliente.redes?.logistica) {
    objDatacliente.logistica = data.logistica;
  }
  objDatacliente.idClient = cliente._id;
  return objDatacliente;
};

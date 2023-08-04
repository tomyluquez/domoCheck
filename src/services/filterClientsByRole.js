const filterClientByRole = (clientes, role) => {
  if (role === "comercial") {
    return [...clientes]
      .filter(
        (cliente) =>
          cliente.estado === "Pendiente" ||
          cliente.estado === "Faltan datos" ||
          cliente.estado === "No contesta" ||
          cliente.estado === "No lo quiere" ||
          cliente.estado === "Integrado"
      )
      .sort((a, b) => {
        const fechaA =
          a.modificacion?.fechaModificacion ||
          a.fechaModificacion ||
          a.fechaContacto;
        const fechaB =
          b.modificacion?.fechaModificacion ||
          b.fechaModificacion ||
          b.fechaContacto;

        if (fechaA && fechaB) {
          return new Date(fechaB) - new Date(fechaA);
        } else if (fechaA) {
          return -1;
        } else if (fechaB) {
          return 1;
        } else {
          return 0;
        }
      });
  }

  if (role === "masDelivery") {
    return [...clientes]
      .filter(
        (cliente) =>
          cliente.estado === "Despachado" || cliente.estado === "Integrado"
      )
      .sort((a, b) => {
        const fechaA =
          a.modificacion?.fechaModificacion ||
          a.fechaModificacion ||
          a.fechaContacto;
        const fechaB =
          b.modificacion?.fechaModificacion ||
          b.fechaModificacion ||
          b.fechaContacto;

        if (fechaA && fechaB) {
          return new Date(fechaB) - new Date(fechaA);
        } else if (fechaA) {
          return -1;
        } else if (fechaB) {
          return 1;
        } else {
          return 0;
        }
      });
  }

  if (role === "marketing") {
    return [...clientes]
      .filter((cliente) => cliente.estado === "Integrado")
      .sort((a, b) => {
        const fechaA =
          a.modificacion?.fechaModificacion ||
          a.fechaModificacion ||
          a.fechaContacto;
        const fechaB =
          b.modificacion?.fechaModificacion ||
          b.fechaModificacion ||
          b.fechaContacto;

        if (fechaA && fechaB) {
          return new Date(fechaB) - new Date(fechaA);
        } else if (fechaA) {
          return -1;
        } else if (fechaB) {
          return 1;
        } else {
          return 0;
        }
      });
  }

  return [...clientes].sort((a, b) => {
    const fechaA =
      a.modificacion?.fechaModificacion ||
      a.fechaModificacion ||
      a.fechaContacto;
    const fechaB =
      b.modificacion?.fechaModificacion ||
      b.fechaModificacion ||
      b.fechaContacto;

    if (fechaA && fechaB) {
      return new Date(fechaB) - new Date(fechaA);
    } else if (fechaA) {
      return -1;
    } else if (fechaB) {
      return 1;
    } else {
      return 0;
    }
  });
};

export default filterClientByRole;

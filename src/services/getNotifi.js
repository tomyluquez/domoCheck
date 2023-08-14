import { filterById } from "./filterByIdUser";

export const getNotifi = (estado, cliente) => {
  let destino = [];
  let description;

  if (estado === "Despachado") {
    destino = ["masDelivery"];
    description = `${cliente.nombreLocal} fue despachado`;
  } else if (estado === "Integrado") {
    destino = [
      "masDelivery",
      "admin",
      "comercial",
      "vendedor",
      "integrador",
      "marketing",
    ];
    description = `Se integro a ${cliente.nombreLocal}`;
  } else if (estado === "No lo quiere") {
    destino = ["masDelivery", "admin", "comercial", "vendedor", "integrador"];
    description = `${cliente.nombreLocal} cancelo la integracion`;
  } else if (estado === "No contesta") {
    destino = ["masDelivery", "admin", "comercial", "vendedor", "integrador"];
    description = `${cliente.nombreLocal} no contesta`;
  } else if (estado === "Testeo") {
    destino = ["integrador"];
    description = `${cliente.nombreLocal} listo para testeo`;
  } else if (estado === "Nuevo cliente") {
    destino = ["integrador", "comercial", "masDelivery", "admin", "marketing"];
    description = `${cliente.nombreLocal} solicito la integracion`;
  } else if (estado === "retoma") {
    destino = ["masDelivery", "admin", "comercial", "vendedor", "integrador"];
    description = `${cliente.nombreLocal} retomo la integracion`;
  } else if (estado === "No contesta - Marketing") {
    destino = ["comercial", "admin", "masDelivery"];
    description = `${cliente.nombreLocal} no contesta a las solicitudes de marketing`;
  }

  return { destino, description };
};

export const bodyNotification = (estado, cliente, users, userName) => {
  const { destino, description } = getNotifi(estado, cliente);
  const idUsers = filterById(
    users.data,
    userName,
    destino,
    estado === "Integrado" ||
      estado === "No lo quiere" ||
      estado === "No contesta" ||
      estado === "retoma" ||
      estado === "No contesta - Marketing"
      ? cliente.vendedor
      : false
  );
  const bodyNotifi = {
    date: new Date(),
    description,
    idUsers,
    tipo: estado,
  };
  return bodyNotifi;
};

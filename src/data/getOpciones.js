export const getOpcionesActividad = (actividad, cliente) => {
  let opciones = [];
  let tipo = actividad.dato;
  if (actividad.dato.includes("Seguimiento")) {
    tipo = actividad.dato.split("Seguimiento ")[1];
  }
  if (actividad.dato === "Contactar") {
    opciones = [
      {
        value: "Entregado",
        descripcion: `${cliente.nombreLocal} contactado`,
      },
      {
        value: "No contesta",
        descripcion: `${cliente.nombreLocal} no contesta`,
      },
      {
        value: "No lo quiere",
        descripcion: `${cliente.nombreLocal} cancelo la integracion`,
      },
    ];
  } else if (actividad.dato === "Contactar prospecto") {
    opciones = [
      {
        value: "Entregado",
        descripcion: `${cliente.nombreLocal} acepto la intergacion`,
      },
      {
        value: "No contesta",
        descripcion: `${cliente.nombreLocal} no contesta`,
      },
      {
        value: "No lo quiere",
        descripcion: `${cliente.nombreLocal} no lo quiere`,
      },
    ];
  } else {
    opciones = [
      {
        value: "Entregado",
        descripcion: `${cliente.nombreLocal} entrego ${tipo}`,
      },
      {
        value: "Aplazado",
        descripcion: `${cliente.nombreLocal} aun no entrego ${tipo}`,
      },
    ];
  }

  return opciones;
};

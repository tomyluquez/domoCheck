export const getOpcionesActividad = (actividad) => {
  let opciones = [];
  if (actividad.dato === "Contactar") {
    opciones = [
      {
        value: "Entregado",
        descripcion: "Cliente contactado",
      },
      {
        value: "No contesta",
        descripcion: "Cliente no contesta",
      },
      {
        value: "No lo quiere",
        descripcion: "Cliente cancelo la integracion",
      },
    ];
  } else {
    opciones = [
      {
        value: "Entregado",
        descripcion: `Cliente entrego ${actividad.dato}`,
      },
      {
        value: "Aplazado",
        descripcion: `Cliente aun no entrego ${actividad.dato}`,
      },
    ];
  }

  return opciones;
};

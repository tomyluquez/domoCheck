export const getOpcionesActividad = (actividad) => {
  let opciones = [];
  const opcionesInteres = [
    {
      value: "Bajo",
      descripcion: "Bajo",
    },
    {
      value: "Medio",
      descripcion: "Medio",
    },
    {
      value: "Alto",
      descripcion: "Alto",
    },
  ];
  let tipo = actividad.dato;
  if (actividad.dato.includes("Seguimiento")) {
    tipo = actividad.dato.split("Seguimiento ")[1];
  }
  if (actividad.dato === "Contactar") {
    opciones = [
      {
        value: "Entregado",
        descripcion: `Contactado`,
      },
      {
        value: "No contesta",
        descripcion: `No contesta`,
      },
      {
        value: "No lo quiere",
        descripcion: `Cancelo la integracion`,
      },
    ];
  } else if (actividad.dato === "Contactar prospecto") {
    opciones = [
      {
        value: "Entregado",
        descripcion: `Acepto la intergacion`,
      },
      {
        value: "Seguimiento",
        descripcion: `Seguimiento`,
      },
      {
        value: "No lo quiere",
        descripcion: `No lo quiere`,
      },
    ];
  } else if (actividad.dato === "StandBy") {
    opciones = [
      {
        value: "Responde",
        descripcion: "Dio respuesta",
      },
      {
        value: "Seguimiento",
        descripcion: `Seguimiento`,
      },
      {
        value: "No lo quiere",
        descripcion: `No lo quiere`,
      },
    ];
  } else {
    opciones = [
      {
        value: "Entregado",
        descripcion: `Entrego ${tipo}`,
      },
      {
        value: "Aplazado",
        descripcion: `Aun no entrego ${tipo}`,
      },
      {
        value: "StandBy",
        descripcion: "Stand by",
      },
    ];
  }

  return { opciones, opcionesInteres };
};

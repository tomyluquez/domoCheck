const getHiyto = (actividad, resultado, cliente) => {
  let tipo = actividad.dato;
  if (actividad.dato.includes("Seguimiento")) {
    tipo = actividad.dato.split("Seguimiento ")[1];
  }
  let hito = "";
  if (actividad.dato === "Contactar") {
    if (resultado === "Entregado") hito = `${cliente.nombreLocal} contactado`;
    if (resultado === "No contesta")
      hito = `${cliente.nombreLocal} no contesto`;
    if (resultado === "No lo quiere")
      hito = `${cliente.nombreLocal} cancelo la integracion`;
  } else {
    if (resultado === "Entregado")
      hito = `${cliente.nombreLocal} entrego ${tipo}`;
    else hito = `${cliente.nombreLocal} postergo la entrega de ${tipo}`;
  }
  return hito;
};
export default getHiyto;

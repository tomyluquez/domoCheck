const getHiyto = (actividad, resultado) => {
  let hito = "";
  if (actividad.dato === "Contactar") {
    if (resultado === "Entregado") hito = "Cliente contactado";
    if (resultado === "No contesta") hito = "Cliente no contesto";
    if (resultado === "No lo quiere") hito = "Cliente cancelo la integracion";
  } else {
    if (resultado === "Entregado") hito = `Cliente entrego ${actividad.dato}`;
    else hito = `Cliente aplazo la entrega de ${actividad.dato}`;
  }
  return hito;
};
export default getHiyto;

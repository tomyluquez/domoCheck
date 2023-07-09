const actVencidas = (fechaAct, estadoAct) => {
  console.log(estadoAct);
  let estadoActividad;
  if (estadoAct === "Cumplida") {
    estadoActividad = "Vigente";
  } else {
    let fechaActividad = new Date(fechaAct);
    let today = new Date();
    let diasTranscurridos;
    fechaActividad >= today
      ? (diasTranscurridos = 0)
      : (diasTranscurridos = getDays(fechaActividad, today));

    if (diasTranscurridos === 0) estadoActividad = "Vigente";
    else if (diasTranscurridos > 1 && diasTranscurridos < 3)
      estadoActividad = "Vencida";
    else if (diasTranscurridos > 2) estadoActividad = "Peligro";
  }

  return estadoActividad;
};

const getDays = (fecha1, fecha2) => {
  let milisegundos = 24 * 60 * 60 * 1000;
  let fechaUno = fecha1.getTime();
  let fechaDos = fecha2.getTime();
  let milisegundosTranscurridos = Math.abs(fechaUno - fechaDos);
  let diasTranscurridos = milisegundosTranscurridos / milisegundos;
  return diasTranscurridos;
};

export default actVencidas;

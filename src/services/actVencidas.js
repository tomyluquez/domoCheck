const actVencidas = (fechaAct, estadoAct) => {
  let estadoActividad;
  let diasTranscurridos;
  if (estadoAct === "Cumplida") {
    estadoActividad = "Vigente";
  } else {
    let fechaActividad = new Date(fechaAct);
    let today = new Date();
    let segundosTranscurridos = Math.floor((today - fechaActividad) / 1000);

    if (segundosTranscurridos > 2 * 24 * 60 * 60) {
      estadoActividad = "Peligro";
      diasTranscurridos = Math.floor(segundosTranscurridos / (24 * 60 * 60));
    } else if (segundosTranscurridos > 1) {
      estadoActividad = "Vencida";
      diasTranscurridos = Math.floor(segundosTranscurridos / (24 * 60 * 60));
    } else {
      estadoActividad = "Vigente";
      diasTranscurridos = 0;
    }
  }

  return { estadoActividad, diasTranscurridos };
};

export default actVencidas;

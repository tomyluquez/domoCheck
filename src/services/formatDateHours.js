const formatDateHours = (date) => {
  if (!date) return null;
  // Obtén la fecha actual del servidor o base de datos
  const fechaCreacion = new Date(date);

  // Obtiene el día, mes y año de la fecha de creación
  const dia = fechaCreacion.getUTCDate();
  const mes = fechaCreacion.getUTCMonth() + 1; // Los meses en JavaScript comienzan desde 0, por lo que se suma 1
  const anio = fechaCreacion.getUTCFullYear();
  const hora = fechaCreacion.getHours();
  const minutos = fechaCreacion.getMinutes();
  // Formatea la fecha en el formato "DIA/MES/AÑO"
  const fechaFormateada = `${dia}/${mes}/${anio} - ${hora}:${minutos}`;

  return fechaFormateada;
};

export default formatDateHours;

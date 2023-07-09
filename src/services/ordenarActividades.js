const ordenarActividades = (actividades, orden) => {
  const today = new Date();
  const actividadesOrdenadas = actividades.filter((actividad) => {
    const actividadDate = new Date(actividad.actividad.proximoContacto);
    if (orden === 1) {
      return actividadDate <= today;
    }
    if (orden === 2) {
      return actividadDate < today && !esMismoDia(actividadDate, today);
    }
    if (orden === 3) {
      return (
        actividadDate.getFullYear() === today.getFullYear() &&
        actividadDate.getMonth() === today.getMonth() &&
        actividadDate.getDate() === today.getDate()
      );
    }
    if (orden === 4) {
      return actividadDate > today;
    }
    return true; // orden === 5: Todas las actividades
  });

  return actividadesOrdenadas;
};

const esMismoDia = (date1, date2) => {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
};

export default ordenarActividades;

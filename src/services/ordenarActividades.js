const ordenarActividades = (actividades, orden) => {
  const today = new Date();
  const actividadesOrdenadas = actividades.filter((actividad) => {
    const actividadDate = new Date(actividad.actividad.proximoContacto);
    if (orden === 1) {
      return (
        actividadDate.getFullYear() <= today.getFullYear() &&
        actividadDate.getMonth() <= today.getMonth() &&
        actividadDate.getDate() <= today.getDate()
      );
    }
    if (orden === 2) {
      return (
        actividadDate.getFullYear() < today.getFullYear() &&
        actividadDate.getMonth() < today.getMonth() &&
        actividadDate.getDate() < today.getDate()
      );
    }
    if (orden === 3) {
      return (
        actividadDate.getFullYear() === today.getFullYear() &&
        actividadDate.getMonth() === today.getMonth() &&
        actividadDate.getDate() === today.getDate()
      );
    }
    if (orden === 4) {
      return (
        actividadDate.getFullYear() >= today.getFullYear() &&
        actividadDate.getMonth() >= today.getMonth() &&
        actividadDate.getDate() >= today.getDate()
      );
    }
    return true; // orden === 5: Todas las actividades
  });

  return actividadesOrdenadas;
};

export default ordenarActividades;

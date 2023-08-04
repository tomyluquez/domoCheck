const ordenarActividades = (actividades, orden, tipo) => {
  const today = new Date();
  if (tipo === "Pendientes") {
    const actividadesOrdenadas = actividades.filter((actividad) => {
      const actividadDate = new Date(actividad.actividad.proximoContacto);
      if (orden === 1) {
        return (
          actividadDate.getFullYear() <= today.getFullYear() &&
          actividadDate.getMonth() <= today.getMonth() &&
          actividadDate.getDate() <= today.getDate() &&
          actividad.cliente.estado !== "No lo quiere"
        );
      }
      if (orden === 2) {
        return (
          actividadDate.getFullYear() <= today.getFullYear() &&
          actividadDate.getMonth() <= today.getMonth() &&
          actividadDate.getDate() < today.getDate() &&
          actividad.cliente.estado !== "No lo quiere"
        );
      }
      if (orden === 3) {
        return (
          actividadDate.getFullYear() === today.getFullYear() &&
          actividadDate.getMonth() === today.getMonth() &&
          actividadDate.getDate() === today.getDate() &&
          actividad.cliente.estado !== "No lo quiere"
        );
      }
      if (orden === 4) {
        return (
          actividadDate.getFullYear() >= today.getFullYear() &&
          actividadDate.getMonth() >= today.getMonth() &&
          actividadDate.getDate() >= today.getDate() &&
          actividad.cliente.estado !== "No lo quiere"
        );
      }
      if (orden === 5) {
        return actividad.cliente.estado !== "No lo quiere";
      } // orden === 5: Todas las actividades
    });
    return actividadesOrdenadas;
  }

  if (tipo === "Cumplidas") {
    const actividadesOrdenadas = actividades.filter((actividad) => {
      let matchesFecha = true;
      let matchesUser = true;

      const ActDate = new Date(actividad.actividad.fechaCumplimiento);
      const dateDesde = new Date(orden.dateStart);
      const dateHasta = new Date(orden.dateEnd);

      matchesFecha = ActDate >= dateDesde && ActDate <= dateHasta;

      if (orden.user !== "Todos") {
        matchesUser = actividad.actividad.cumplidor === orden.user;
      } else {
        matchesUser = true;
      }
      return matchesFecha && matchesUser;
    });
    return actividadesOrdenadas.sort(
      (a, b) =>
        new Date(a.actividad.fechaCumplimiento) -
        new Date(b.actividad.fechaCumplimiento)
    );
  }
};

export default ordenarActividades;

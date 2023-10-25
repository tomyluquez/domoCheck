export const filterActividades = (
  actividades,
  orden,
  ordenType,
  ordenUserType,
  tipo
) => {
  const today = new Date();

  if (tipo === "Pendientes") {
    const actividadesOrdenadas = actividades.filter((actividad) => {
      const actividadDate = new Date(actividad.actividad.proximoContacto);
      let matchesDate = true;
      let matchesTipoActividad = true;
      let matchesUser = true;

      if (orden === 1) {
        matchesDate =
          actividadDate <= today &&
          actividad.cliente.estado !== "No lo quiere" &&
          actividad.cliente.estado !== "StandBy";
      }

      if (orden === 2) {
        matchesDate =
          actividadDate.getTime() < today.getTime() && // Compara las fechas y horas completas
          actividad.cliente.estado !== "No lo quiere" &&
          actividad.cliente.estado !== "StandBy";
      }

      if (orden === 3) {
        matchesDate =
          actividadDate.getUTCFullYear() === today.getUTCFullYear() &&
          actividadDate.getUTCMonth() === today.getUTCMonth() &&
          actividadDate.getUTCDate() === today.getUTCDate() &&
          actividad.cliente.estado !== "No lo quiere" &&
          actividad.cliente.estado !== "StandBy";
      }
      if (orden === 4) {
        matchesDate =
          actividadDate.getFullYear() >= today.getFullYear() &&
          actividadDate.getMonth() >= today.getMonth() &&
          actividadDate.getDate() >= today.getDate() &&
          actividad.cliente.estado !== "No lo quiere" &&
          actividad.cliente.estado !== "StandBy";
      }
      if (orden === 5) {
        matchesDate =
          actividad.cliente.estado !== "No lo quiere" &&
          actividad.cliente.estado !== "StandBy";
      }

      if (ordenType === 6) {
        matchesTipoActividad =
          actividad.actividad.dato === "Contactar" ||
          actividad.actividad.dato === "menu" ||
          actividad.actividad.dato === "Seguimiento menu" ||
          actividad.actividad.dato === "mapa" ||
          actividad.actividad.dato === "Seguimiento mapa" ||
          actividad.actividad.dato === "imgStore" ||
          actividad.actividad.dato === "Seguimiento imgStore" ||
          actividad.actividad.dato === "imgProd" ||
          actividad.actividad.dato === "Seguimiento imgProd" ||
          actividad.actividad.dato === "datos" ||
          actividad.actividad.dato === "Seguimiento datos";
      }

      if (ordenType === 7) {
        matchesTipoActividad =
          actividad.actividad.dato === "Promos" ||
          actividad.actividad.dato === "Historias" ||
          actividad.actividad.dato === "Link Whatsapp" ||
          actividad.actividad.dato === "Playstore" ||
          actividad.actividad.dato === "MP Conectado" ||
          actividad.actividad.dato === "Campañas email" ||
          actividad.actividad.dato === "Link IG";
      }

      if (ordenType === 8) {
        matchesTipoActividad =
          actividad.actividad.dato === "Contactar prospecto";
      }

      if (ordenUserType !== "Todos") {
        matchesUser = actividad.actividad.creador === ordenUserType;
      }

      return matchesDate & matchesTipoActividad & matchesUser;
    });
    return actividadesOrdenadas;
  } else {
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

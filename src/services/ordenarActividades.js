const ordenarActividades = (actividades, orden, ordenType, tipo) => {
  const today = new Date();
  let actividadesPorTipo = [];
  if (tipo === "Pendientes") {
    const actividadesOrdenadas = actividades.filter((actividad) => {
      const actividadDate = new Date(actividad.actividad.proximoContacto);
      if (orden === 1) {
        return (
          actividadDate <= today &&
          actividad.cliente.estado !== "No lo quiere" &&
          actividad.cliente.estado !== "StandBy"
        );
      }
      if (orden === 2) {
        return (
          actividadDate.getTime() < today.getTime() && // Compara las fechas y horas completas
          actividad.cliente.estado !== "No lo quiere" &&
          actividad.cliente.estado !== "StandBy"
        );
      }
      if (orden === 3) {
        return (
          actividadDate.getUTCFullYear() === today.getUTCFullYear() &&
          actividadDate.getUTCMonth() === today.getUTCMonth() &&
          actividadDate.getUTCDate() === today.getUTCDate() &&
          actividad.cliente.estado !== "No lo quiere" &&
          actividad.cliente.estado !== "StandBy"
        );
      }
      if (orden === 4) {
        return (
          actividadDate.getFullYear() >= today.getFullYear() &&
          actividadDate.getMonth() >= today.getMonth() &&
          actividadDate.getDate() >= today.getDate() &&
          actividad.cliente.estado !== "No lo quiere" &&
          actividad.cliente.estado !== "StandBy"
        );
      }
      if (orden === 5) {
        return (
          actividad.cliente.estado !== "No lo quiere" &&
          actividad.cliente.estado !== "StandBy"
        );
      } // orden === 5: Todas las actividades
    });

    if (ordenType === 0) {
      return actividadesOrdenadas;
    } else if (ordenType !== 0) {
      actividadesPorTipo = actividadesOrdenadas.filter((actividad) => {
        if (ordenType === 6) {
          return (
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
            actividad.actividad.dato === "Seguimiento datos"
          );
        }
        if (ordenType === 7) {
          return (
            actividad.actividad.dato === "Promos" ||
            actividad.actividad.dato === "Historias" ||
            actividad.actividad.dato === "Link Whatsapp" ||
            actividad.actividad.dato === "Playstore" ||
            actividad.actividad.dato === "MP Conectado" ||
            actividad.actividad.dato === "Campañas email" ||
            actividad.actividad.dato === "Link IG"
          );
        }
        if (ordenType === 8) {
          return actividad.actividad.dato === "Contactar prospecto";
        }
      });
      return actividadesPorTipo;
    }

    // let actividadesPorUser = [];

    // if (ordenUserType === "Todos" && actividadesPorTipo.length > 0) {
    //   return actividadesPorTipo;
    // } else if (ordenUserType === "Todos" && actividadesPorTipo.length === 0) {
    //   return actividadesOrdenadas;
    // } else if (ordenUserType !== "Todos" && actividadesPorTipo.length > 0) {
    //   actividadesPorUser = actividadesPorTipo.filter((actividad) => {
    //     return actividad.actividad.creador === ordenUserType;
    //   });
    //   return actividadesPorUser;
    // } else if (ordenUserType !== "Todos" && actividadesPorTipo.length === 0) {
    //   actividadesPorUser = actividadesPorTipo.filter((actividad) => {
    //     return actividad.actividad.creador === ordenUserType;
    //   });
    //   return actividadesPorUser;
    // }
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

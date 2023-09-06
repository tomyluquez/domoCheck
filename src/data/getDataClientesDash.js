const categorias = {
  datos: "datos",
  menu: "menues",
  mapa: "mapas",
  imgStore: "imgStore",
  imgProd: "imgProd",
  Despachado: "despachados",
  Testeo: "testeo",
  Configuracion: "configuracion",
  integro: "integrados",
  contactar: "contactados",
  "Seguimiento menu": "seguimientomenues",
  "Seguimiento mapa": "seguimientomapas",
  "Seguimiento imgStore": "seguimientoimgStore",
  "Seguimiento imgProd": "seguimientoimgProd",
  "Seguimiento datos": "seguimientodatos",
};

const usersAct = (acividadesPorUsuario) => {
  let actPorUser = [];

  acividadesPorUsuario.forEach((user) => {
    let actividadesPorCategoria = [];

    for (let categoria in categorias) {
      const actividadesFiltradas = user.actividadesCumplidas.filter(
        (actividad) => {
          if (actividad.dato !== "Estado del cliente") {
            return actividad.dato === categoria;
          } else return actividad.resultado.includes(categoria);
        }
      );

      if (actividadesFiltradas.length > 0) {
        actividadesPorCategoria.push({
          actividades: actividadesFiltradas,
          categoria: categoria,
        });
      }
    }

    actPorUser.push({
      nombreUsuario: user.nombreUsuario,
      actividadesCumplidas: actividadesPorCategoria,
    });
  });

  return actPorUser;
};

export const getActivities = (clientes, dataDates, dataUsers) => {
  const fechaInicio = new Date(dataDates.dateStart);
  const fechaFin = new Date(dataDates.dateEnd);
  const users = dataUsers.data;

  const actividadesPorUsuario = [];

  users.forEach((usuario) => {
    const actividadesCumplidas = [];

    clientes.forEach((cliente) => {
      cliente.actividades.forEach((actividad) => {
        const fechaActividad = new Date(actividad.fecha);
        if (
          actividad.estadoAct === "Cumplida" &&
          actividad.cumplidor === usuario.name && // Comprueba si el usuario coincide
          fechaActividad >= fechaInicio && // Comprueba si la fecha está dentro del rango
          fechaActividad <= fechaFin
        ) {
          actividadesCumplidas.push(actividad);
        }
      });
    });

    if (actividadesCumplidas.length > 0) {
      actividadesPorUsuario.push({
        nombreUsuario: usuario.name,
        actividadesCumplidas: actividadesCumplidas,
      });
    }
  });

  return usersAct(actividadesPorUsuario);
};

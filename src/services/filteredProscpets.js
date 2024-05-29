import { openAlert } from "../redux/slices/Alert";
import { filtersProspects } from "../redux/slices/clientes";

const filterProspects = (
  prospectos,
  nombreLocal,
  estado,
  interes,
  dispatch
) => {
  const filteredProspects = prospectos.filter((prospecto) => {
    let matchesEstado = true;
    let matchesInteres = true;
    let matchesNombre = true;

    if (estado) {
      matchesEstado = prospecto.estado === estado;
    }

    if (nombreLocal) {
      matchesNombre = prospecto.nombreLocal
        .toLowerCase()
        .includes(nombreLocal.toLowerCase());
    }

    if (interes) {
      matchesInteres = prospecto.interes === interes;
    }

    return matchesInteres && matchesEstado && matchesNombre;
  });
  if (filteredProspects.length === 0) {
    dispatch(openAlert({ motivo: "No hay resultados", estado: "error" }));
    dispatch(filtersProspects([]));
  } else dispatch(filtersProspects(filteredProspects));
};

export const filterByVendedor = (prospectos, vendedor) => {
  return [...prospectos].filter((prospecto) => prospecto.vendedor === vendedor);
};

export const filterByVendedorAndState = (prospectos, vendedor, estado) => {
  return [...prospectos]
    .filter(
      (prospecto) =>
        prospecto.vendedor === vendedor && prospecto.estado === estado
    )
    .sort((a, b) => {
      if (
        estado === "No lo quiere" ||
        estado === "Faltan datos" ||
        estado === "No contesta"
      ) {
        return (
          new Date(b.modificacion?.fechaModificacion) -
          new Date(a.modificacion?.fechaModificacion)
        );
      } else if (estado === "Pendiente") {
        return new Date(b.fechaSolicitud) - new Date(a.fechaSolicitud);
      } else {
        return new Date(b[`fecha${estado}`]) - new Date(a[`fecha${estado}`]);
      }
    });
};

export const filterMkt = (prospectos) => {
  return [...prospectos].filter((prospecto) => {
    const ventas = prospecto.ventas || 0;
    return prospecto.estado === "Integrado" && ventas <= 10;
  });
};

export default filterProspects;

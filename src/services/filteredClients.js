import { openAlert } from "../redux/slices/Alert";
import { filters } from "../redux/slices/clientes";

const filterClients = (
  clientes,
  vendedor,
  estado,
  nombreLocal,
  dateStart,
  dateEnd,
  dispatch
) => {
  const filteredClients = clientes.filter((cliente) => {
    let matchesVendedor = true;
    let matchesEstado = true;
    let matchesFecha = true;
    let matchesNombre = true;

    if (vendedor) {
      matchesVendedor = cliente.vendedor === vendedor;
    }

    if (estado) {
      matchesEstado = cliente.estado === estado;
    }

    if (nombreLocal) {
      matchesNombre = cliente.nombreLocal === nombreLocal;
    }

    if (dateStart && dateEnd) {
      const clientDate = new Date(cliente.fechaSolicitud);
      const dateDesde = new Date(dateStart);
      const dateHasta = new Date(dateEnd);

      matchesFecha = clientDate >= dateDesde && clientDate <= dateHasta;
    }

    return matchesVendedor && matchesEstado && matchesFecha && matchesNombre;
  });
  if (filteredClients.length === 0) {
    dispatch(openAlert({ motivo: "No hay resultados", estado: "error" }));
    dispatch(filters([]));
  } else dispatch(filters(filteredClients));
};

export const filterByVendedor = (clientes, vendedor) => {
  return [...clientes].filter((cliente) => cliente.vendedor === vendedor);
};

export const filterByVendedorAndState = (clientes, vendedor, estado) => {
  return [...clientes]
    .filter(
      (cliente) => cliente.vendedor === vendedor && cliente.estado === estado
    )
    .sort((a, b) => {
      if (
        estado === "No lo quiere" ||
        estado === "Faltan datos" ||
        estado === "No contesta"
      ) {
        return (
          new Date(b.modificacion.fechaModificacion) -
          new Date(a.modificacion.fechaModificacion)
        );
      } else if (estado === "Pendiente") {
        return new Date(b.fechaSolicitud) - new Date(a.fechaSolicitud);
      } else {
        return new Date(b[`fecha${estado}`]) - new Date(a[`fecha${estado}`]);
      }
    });
};

export const filterMkt = (clientes) => {
  return [...clientes].filter((cliente) => {
    const ventas = cliente.ventas || 0;
    return cliente.estado === "Integrado" && ventas <= 10;
  });
};

export default filterClients;

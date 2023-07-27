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

export default filterClients;

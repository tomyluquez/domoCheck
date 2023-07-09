import { filters } from "../redux/slices/clientes";

export const orderClients = (clientes, orden, dispatch) => {
  const clientesOrdenados = [...clientes].sort((a, b) => {
    if (a[orden] < b[orden]) {
      return 1;
    }
    if (a[orden] > b[orden]) {
      return -1;
    }
    return 0;
  });
  dispatch(filters(clientesOrdenados));
};

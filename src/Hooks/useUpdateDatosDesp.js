import { useMutation, useQueryClient } from "react-query";
import { openAlert } from "../redux/slices/Alert";
import { useDispatch } from "react-redux";

const useUpdateDatosDesp = () => {
  const queryclient = useQueryClient();
  const dispatch = useDispatch();

  const mutationDatos = useMutation(
    (datos) =>
      fetch(
        `https://crmventasback-production.up.railway.app/api/clientes/datos`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(datos),
        }
      ),
    {
      onSuccess: () => {
        dispatch(
          openAlert({ motivo: "Cliente actualizado", estado: "success" })
        );
        queryclient.invalidateQueries("clients");
      },
    }
  );
  return mutationDatos;
};
export default useUpdateDatosDesp;

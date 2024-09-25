import { useMutation, useQueryClient } from "react-query";
import { useDispatch } from "react-redux";
import { openAlert } from "../redux/slices/Alert";
import { closeModal } from "../redux/slices/modal";

const useChangeName = () => {
  const dispatch = useDispatch();
  const queryclient = useQueryClient();
  const changeNameMutation = useMutation(
    (data) =>
      fetch(`https://crm-ventas-back-9soz.vercel.app/api/clientes/changeData`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((response) => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      }),
    {
      onSuccess: () => {
        dispatch(
          openAlert({
            motivo: "Cliente editado con exito",
            estado: "success",
          })
        );
        dispatch(closeModal());
        queryclient.invalidateQueries("clients");
      },
      onError: (error) => {
        dispatch(
          openAlert({
            motivo: error.message,
            estado: "error",
          })
        );
      },
    }
  );

  return changeNameMutation;
};

export default useChangeName;

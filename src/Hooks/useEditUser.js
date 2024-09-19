import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import { openAlert } from "../redux/slices/Alert";
import { closeModal } from "../redux/slices/modal";

const useEditUser = () => {
  const dispatch = useDispatch();
  const editUserMutation = useMutation(
    (data) =>
      fetch(`https://crmventasback.onrender.com/api/users/${data.id}`, {
        method: "POST",
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
            motivo: "Usuario editado con exito",
            estado: "success",
          })
        );
        dispatch(closeModal());
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

  return editUserMutation;
};

export default useEditUser;

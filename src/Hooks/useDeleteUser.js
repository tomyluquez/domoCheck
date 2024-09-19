import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import { openAlert } from "../redux/slices/Alert";
import { closeModal } from "../redux/slices/modal";

const useDeleteUser = () => {
  const dispatch = useDispatch();
  const deleteUserMutation = useMutation(
    (id) =>
      fetch(`https://crmventasback.onrender.com/api/users/${id}`, {
        method: "DELETE",
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
            motivo: "Usuario eliminado con exito",
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

  return deleteUserMutation;
};

export default useDeleteUser;

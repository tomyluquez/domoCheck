import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import { openAlert } from "../redux/slices/Alert";

const useCreateUser = () => {
  const dispatch = useDispatch();
  const createUserMutation = useMutation(
    (data) =>
      fetch(`https://crnventas.onrender.com/api/users`, {
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
            motivo: "Usuario creado con exito",
            estado: "success",
          })
        );
      },
      onError: () => {
        dispatch(
          openAlert({
            motivo: "Hubo un error, porfavor intenta nuevamente mas tarde",
            estado: "error",
          })
        );
      },
    }
  );

  return createUserMutation;
};

export default useCreateUser;

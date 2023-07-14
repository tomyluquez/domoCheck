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
          throw new Error(response.error);
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
      onError: (error) => {
        dispatch(
          openAlert({
            motivo: error.error,
            estado: "error",
          })
        );
      },
    }
  );

  return createUserMutation;
};

export default useCreateUser;

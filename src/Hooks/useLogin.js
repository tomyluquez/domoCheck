import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import { openAlert } from "../redux/slices/Alert";
import { loginUser } from "../redux/slices/users";

const useLogin = () => {
  const dispatch = useDispatch();
  const loginmutation = useMutation(
    (data) =>
      fetch(`https://domo-backend.onrender.com/api/users/login`, {
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
      onSuccess: (data) => {
        dispatch(
          openAlert({
            motivo: "Usuario logeado con exito",
            estado: "success",
          })
        );
        dispatch(
          loginUser({
            name: data.data.name,
            email: data.data.email,
            role: data.data.role,
            vendedor:
              data.data.vendedor === "false" ? null : data.data.vendedor,
            id: data.data._id,
          })
        );
      },
      onError: () => {
        dispatch(
          openAlert({
            motivo: "El usuario o la contraseña son incorrectos",
            estado: "error",
          })
        );
      },
    }
  );

  return loginmutation;
};

export default useLogin;

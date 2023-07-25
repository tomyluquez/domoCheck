import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import { openAlert } from "../redux/slices/Alert";
import { useNavigate } from "react-router-dom";

const useChangeName = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const changeNameMutation = useMutation(
    (data) =>
      fetch(
        `https://crnventas.onrender.com/api/clientes/changeName/${data.id}`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        }
      ).then((response) => {
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
        navigate("/Clientes");
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

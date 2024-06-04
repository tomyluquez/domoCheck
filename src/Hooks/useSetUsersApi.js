import { useMutation, useQueryClient } from "react-query";
import { openAlert } from "../redux/slices/Alert";
import { useDispatch } from "react-redux";

const useSetUsersApi = () => {
  const queryclient = useQueryClient();
  const dispatch = useDispatch();

  const mutationUsers = useMutation(
    (users) =>
      fetch(
        `https://alive-bernete-nucleo-b87ef71f.koyeb.app/api/clientes/${users.endpoint}`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(users),
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
  return mutationUsers;
};
export default useSetUsersApi;

import { useMutation, useQueryClient } from "react-query";
import { openAlert } from "../redux/slices/Alert";
import { useDispatch } from "react-redux";
import { closeModal } from "../redux/slices/modal";

const useAddContacto = () => {
  const queryclient = useQueryClient();
  const dispatch = useDispatch();

  const mutationNewContacto = useMutation(
    (newContact) =>
      fetch(
        `https://alive-bernete-nucleo-b87ef71f.koyeb.app/api/clientes/${newContact.idClient}`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newContact),
        }
      ),
    {
      onSuccess: () => {
        dispatch(closeModal());
        dispatch(
          openAlert({ motivo: "Cliente actualizado", estado: "success" })
        );
        queryclient.invalidateQueries("clients");
      },
    }
  );
  return mutationNewContacto;
};
export default useAddContacto;

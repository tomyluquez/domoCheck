import { useMutation, useQueryClient } from "react-query";
import { closeModal } from "../redux/slices/modal";
import { useDispatch } from "react-redux";

const useMutationNewAct = () => {
  const queryclient = useQueryClient();
  const dispatch = useDispatch();

  const mutationNewAct = useMutation(
    (data) =>
      fetch(`https://crnventas.onrender.com/api/actividades`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      }),
    {
      onSuccess: (data) => {
        if (data.prospects) {
          queryclient.invalidateQueries("prospects");
        } else {
          queryclient.invalidateQueries("clients");
        }
        dispatch(closeModal());
      },
    }
  );

  return mutationNewAct;
};

export default useMutationNewAct;

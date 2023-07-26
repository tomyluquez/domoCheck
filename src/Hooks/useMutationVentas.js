import { useMutation, useQueryClient } from "react-query";

const useMutationVentas = () => {
  const queryclient = useQueryClient();

  const mutationVentas = useMutation(
    (data) =>
      fetch("https://crnventas.onrender.com/api/clientes/ventas", {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      }),
    {
      onSuccess: () => {
        queryclient.invalidateQueries("clients");
      },
    }
  );

  return mutationVentas;
};

export default useMutationVentas;

import { useMutation, useQueryClient } from "react-query";

const useMutations = () => {
  const queryclient = useQueryClient();

  const mutationClient = useMutation(
    (data) =>
      fetch("https://crm-ventas-back-9soz.vercel.app/api/clientes", {
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

  return mutationClient;
};

export default useMutations;

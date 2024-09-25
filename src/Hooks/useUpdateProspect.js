import { useMutation, useQueryClient } from "react-query";

const useUpdateProspect = () => {
  const queryclient = useQueryClient();

  const updateProspect = useMutation(
    (data) =>
      fetch(`https://crm-ventas-back-9soz.vercel.app/api/prospects`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      }),
    {
      onSuccess: () => {
        queryclient.invalidateQueries("prospects");
      },
    }
  );

  return updateProspect;
};

export default useUpdateProspect;

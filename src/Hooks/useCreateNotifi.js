import { useMutation } from "react-query";

const useCreateNotifi = () => {
  const notifiMutation = useMutation((data) =>
    fetch(`https://crm-ventas-back-9soz.vercel.app/api/notifications`, {
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
    })
  );

  return notifiMutation;
};

export default useCreateNotifi;

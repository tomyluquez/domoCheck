import { useMutation, useQueryClient } from "react-query";

const useChangeStateNoti = () => {
  const queryClient = useQueryClient();

  const changeStateNoti = useMutation(
    async (data) => {
      const response = await fetch(
        `https://crmventasback.onrender.com/api/notifications`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    },
    {
      // Actualizar la caché de notificaciones después de la mutación
      onMutate: () => {
        queryClient.invalidateQueries("notifications");
      },
    }
  );

  return changeStateNoti;
};

export default useChangeStateNoti;

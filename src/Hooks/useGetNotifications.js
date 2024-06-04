import { useQuery } from "react-query";

const useGetNotifications = (id) => {
  const { isLoading, isError, data } = useQuery("notifications", () =>
    fetch(
      `https://alive-bernete-nucleo-b87ef71f.koyeb.app/api/notifications/${id}`
    ).then((response) => response.json())
  );

  return { isLoading, isError, data }; // Devolvemos la función refetch para realizar nuevas consultas.
};

export default useGetNotifications;

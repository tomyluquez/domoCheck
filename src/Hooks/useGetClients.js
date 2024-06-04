import { useQuery } from "react-query";

const useGetClients = () => {
  const { isLoading, isError, data } = useQuery("clients", () =>
    fetch("https://alive-bernete-nucleo-b87ef71f.koyeb.app/api/clientes").then(
      (response) => response.json()
    )
  );

  return { isLoading, isError, data };
};

export default useGetClients;

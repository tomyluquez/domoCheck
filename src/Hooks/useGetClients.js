import { useQuery } from "react-query";

const useGetClients = () => {
  const { isLoading, isError, data } = useQuery("clients", () =>
    fetch("https://crmventasback-production.up.railway.app/api/clientes").then(
      (response) => response.json()
    )
  );

  return { isLoading, isError, data };
};

export default useGetClients;

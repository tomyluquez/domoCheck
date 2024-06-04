import { useQuery } from "react-query";

const useGetClients = () => {
  const { isLoading, isError, data } = useQuery("clients", () =>
    fetch("https://domo-backend.onrender.com/api/clientes").then((response) =>
      response.json()
    )
  );

  return { isLoading, isError, data };
};

export default useGetClients;

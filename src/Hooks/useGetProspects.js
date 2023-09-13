import { useQuery } from "react-query";

const useGetProspects = () => {
  const { isLoading, isError, data } = useQuery(
    "prospects",
    () =>
      fetch("https://crnventas.onrender.com/api/prospects").then((response) =>
        response.json()
      ),
    {
      enabled: true, // Realizar siempre una nueva solicitud
    }
  );

  return { isLoading, isError, prospects: data };
};

export default useGetProspects;

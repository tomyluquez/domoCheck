import { useQuery } from "react-query";

const useGetProspects = () => {
  const { isLoading, isError, data } = useQuery(
    "prospects",
    () =>
      fetch(
        "https://alive-bernete-nucleo-b87ef71f.koyeb.app/api/prospects"
      ).then((response) => response.json()),
    {
      enabled: true, // Realizar siempre una nueva solicitud
    }
  );

  return { isLoading, isError, prospects: data };
};

export default useGetProspects;

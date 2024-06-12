import { useQuery } from "react-query";

const useGetUsers = () => {
  const { isLoading, isError, data } = useQuery("users", () =>
    fetch("https://crmventasback-production.up.railway.app/api/users").then(
      (response) => response.json()
    )
  );

  return { isLoading, isError, data };
};

export default useGetUsers;

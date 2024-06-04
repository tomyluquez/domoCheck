import { useQuery } from "react-query";

const useGetUsers = () => {
  const { isLoading, isError, data } = useQuery("users", () =>
    fetch("https://domo-backend.onrender.com/api/users").then((response) =>
      response.json()
    )
  );

  return { isLoading, isError, data };
};

export default useGetUsers;

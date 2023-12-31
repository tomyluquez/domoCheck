import { useQuery } from "react-query";

const useGetUsers = () => {
  const { isLoading, isError, data } = useQuery("users", () =>
    fetch("https://crnventas.onrender.com/api/users").then((response) =>
      response.json()
    )
  );

  return { isLoading, isError, data };
};

export default useGetUsers;

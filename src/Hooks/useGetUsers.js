import { useQuery, useQueryClient } from "react-query";

const useGetUsers = () => {
  const queryclient = useQueryClient();

  const { isLoading, isError, data } = useQuery(
    "users",
    () =>
      fetch("https://crnventas.onrender.com/api/users").then((response) =>
        response.json()
      ),
    {
      onSuccess: () => {
        queryclient.invalidateQueries("users");
      },
    }
  );

  return { isLoading, isError, data };
};

export default useGetUsers;

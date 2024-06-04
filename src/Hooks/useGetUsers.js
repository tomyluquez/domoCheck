import { useQuery } from "react-query";

const useGetUsers = () => {
  const { isLoading, isError, data } = useQuery("users", () =>
    fetch("https://alive-bernete-nucleo-b87ef71f.koyeb.app/api/users").then(
      (response) => response.json()
    )
  );

  return { isLoading, isError, data };
};

export default useGetUsers;

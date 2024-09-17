import { useQuery } from "@tanstack/react-query";
import fetchUser from "../utils/functions/fetchUser";

export default function useUser() {
  const {
    data: user,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["user"],
    queryFn: fetchUser,
  });

  return { user, error, isLoading };
}

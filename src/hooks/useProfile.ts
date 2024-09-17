import { useQuery } from "@tanstack/react-query";
import useUser from "./useUser";
import fetchProfileInfo from "../utils/functions/fetchProfileInfo";

export default function useProfile() {
  const { user } = useUser();
  console.log("Desde useUser", user);

  const {
    data: profile,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["profile", user],
    queryFn: async () => await fetchProfileInfo(user?.id),
  });

  return { profile, error, isLoading };
}

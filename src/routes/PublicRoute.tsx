import { Navigate, Outlet } from "react-router-dom";
import { LoadingScreen } from "../components/LoadingScreen";
import useUser from "../hooks/useUser";
import useProfile from "../hooks/useProfile";

export default function PublicRoute() {
  const { profile } = useProfile();
  const {user, isLoading} = useUser()  

  if (isLoading) return <LoadingScreen />;

  if (user && profile)
    return <Navigate to="/dashboard" replace />;

  if (user && !profile)
    return <Navigate to="/create-profile" replace />;

  return <Outlet />;
}

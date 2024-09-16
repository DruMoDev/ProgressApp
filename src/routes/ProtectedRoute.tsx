import { Navigate, Outlet } from "react-router-dom";
import { LoadingScreen } from "../components/LoadingScreen";
import useUserProfile from "../hooks/useUserProfile";

export default function ProtectedRoute() {
  const { authenticated, profile, isLoading } = useUserProfile();

  if (isLoading) return <LoadingScreen />;

  if (!authenticated) return <Navigate to="/" replace />;

  if (authenticated && !profile?.weight)
    return <Navigate to="/create-profile" replace />;

  return <Outlet />;
}

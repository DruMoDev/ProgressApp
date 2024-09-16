import { Navigate, Outlet, useLocation } from "react-router-dom";
import { LoadingScreen } from "../components/LoadingScreen";
import useUserProfile from "../hooks/useUserProfile";

export default function ProtectedRoute() {
  const { authenticated, profile, isLoading } = useUserProfile();
  const location = useLocation();

  if (isLoading) return <LoadingScreen />;

  if (!authenticated) return <Navigate to="/" replace />;

  if (!profile?.weight && location.pathname !== "/create-profile") {
    return <Navigate to="/create-profile" replace />;
  }

  return <Outlet />;
}

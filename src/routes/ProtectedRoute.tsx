import { Navigate, Outlet, useLocation } from "react-router-dom";
import { LoadingScreen } from "../components/LoadingScreen";
import useUser from "../hooks/useUser";
import useProfile from "../hooks/useProfile";

export default function ProtectedRoute() {
  const { user } = useUser();
  const {profile, isLoading} = useProfile()
  const location = useLocation();

  if (isLoading) return <LoadingScreen />;

  if (!user) return <Navigate to="/" replace />;

  if (!profile && location.pathname !== "/create-profile") {
    return <Navigate to="/create-profile" replace />;
  }

  return <Outlet />;
}

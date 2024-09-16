import { Navigate, Outlet, useLocation } from "react-router-dom";
import { LoadingScreen } from "../components/LoadingScreen";
import useUserProfile from "../hooks/useUserProfile";

export default function ProtectedRoute() {
  const { authenticated, profile, isLoading } = useUserProfile();
  const location = useLocation()

  console.log("ProtectedRotue1");
  

  if (isLoading) return <LoadingScreen />;
  console.log("ProtectedRotue2");


  if (!authenticated) return <Navigate to="/" replace />;
  console.log("ProtectedRotue3");


  if (!profile?.weight && location.pathname !== "/create-profile") {
    return <Navigate to="/create-profile" replace />;
  }
  console.log("ProtectedRotue4");


  return <Outlet />;
}

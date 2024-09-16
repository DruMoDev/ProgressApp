import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import ProfileDataInput from "../pages/ProfileDataInputPage";
import DashboardPage from "../pages/DashboardPage";
import Layout from "../components/layouts/Layout";
import ErrorPage from "../pages/ErrorPage";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        element: <PublicRoute />,
        children: [
          {
            path: "/",
            element: <LandingPage />,
          },
        ],
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "dashboard",
            element: <DashboardPage />,
          },
          {
            path: "create-profile",
            element: <ProfileDataInput />,
          },
        ],
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

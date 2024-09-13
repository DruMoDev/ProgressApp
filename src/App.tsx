import { RouterProvider } from "react-router-dom";
import { UserProfileProvider } from "./context/UserProfileContext";
import { router } from "./routes";

export default function App() {
  return (
    <UserProfileProvider>
      <RouterProvider router={router} />
    </UserProfileProvider>
  );
}

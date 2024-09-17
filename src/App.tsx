import { RouterProvider } from "react-router-dom";
import { UserProfileProvider } from "./context/UserProfileContext";
import { router } from "./routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProfileProvider>
        <RouterProvider router={router} />
      </UserProfileProvider>
    </QueryClientProvider>
  );
}

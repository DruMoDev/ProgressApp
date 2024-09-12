import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import LandingPage from "./pages/LandigPage";
import PreAuthLayout from "./components/layouts/PreAuthLayout";
import { useEffect, useState } from "react";
import getUser from "./utils/functions/getUser";
import PostAuthLayout from "./components/layouts/PostAuthLayout";
import { PulseLoader } from "react-spinners";

interface User {
  aud: string;
  email: string | undefined;
  name: string;
}

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await getUser();
        if (user) {
          const newUser = {
            aud: user.aud,
            email: user.email,
            name: user.user_metadata.full_name,
          };
          setUser(newUser);
          console.log(newUser);
          
        } else {
          console.log("User not found");
          setUser(null);
        }
      } catch (error) {
        console.error("Error fetching user:", error);
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-background">
        <PulseLoader color="#1E90FF" size={15} />
      </div>
    );
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      !user?.aud ? (
        <Route path="/" element={<PreAuthLayout />}>
          <Route index element={<LandingPage />} />
        </Route>
      ) : (
        <Route path="/" element={<PostAuthLayout />}>
          {/* <Route index element={<DashboardPage />} /> */}
          {/* <Route path="/login" element={<ProfilePage />} /> */}
        </Route>
      )
    )
  );

  return <RouterProvider router={router} />;
}


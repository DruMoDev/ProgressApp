import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandigPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import PreAuthLayout from "./components/layouts/PreAuthLayout";
import supabase from "./utils/supabase";

export default function App() {
  const isAuthenticaded = false;

  const getUser = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    console.log(user);
  };
  getUser()

  return (
    <BrowserRouter>
      <Routes>
        {!isAuthenticaded ? (
          <Route path="/" element={<PreAuthLayout />}>
            <Route index element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Route>
        ) : (
          <Route path="/" element={<PreAuthLayout />}>
            {/* <Route index element={<DashboardPage />} /> */}
            {/* <Route path="/login" element={<ProfilePage />} /> */}
          </Route>
        )}
      </Routes>
    </BrowserRouter>
  );
}

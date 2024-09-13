import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout() {
  return (
    <div className="min-h-screen bg-background text-textPrimary flex flex-col relative">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

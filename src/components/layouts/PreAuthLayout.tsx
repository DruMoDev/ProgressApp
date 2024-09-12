import { Outlet } from "react-router-dom";
import HeaderPreAuth from "../HeaderPreAuth";
import Footer from "../Footer";

export default function PreAuthLayout() {
  return (
    <div className="min-h-screen bg-background text-textPrimary flex flex-col relative">
      <HeaderPreAuth />
      <Outlet/>
      <Footer />
    </div>
  );
}

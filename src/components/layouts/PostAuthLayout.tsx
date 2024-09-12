import { Outlet } from "react-router-dom";
import HeaderPreAuth from "../HeaderPreAuth";
import Footer from "../Footer";

export default function PostAuthLayout() {
  return (
    <div className="min-h-screen bg-background text-textPrimary flex flex-col relative">
      <HeaderPreAuth />
      <h1>HOLA LOCO POST</h1>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

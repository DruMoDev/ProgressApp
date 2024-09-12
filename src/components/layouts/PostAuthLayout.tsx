import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import HeaderPostAuth from "../HeaderPostAuth";

export default function PostAuthLayout() {
  return (
    <div className="min-h-screen bg-background text-textPrimary flex flex-col relative">
      <HeaderPostAuth />
      <h1>HOLA LOCO POST</h1>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

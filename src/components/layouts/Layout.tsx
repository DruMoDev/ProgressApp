import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout() {
  return (
    <div className="min-h-screen bg-background text-textPrimary flex flex-col relative">
      <Header />
      <main className="flex-grow bg-background pt-28 pb-16 mx-auto w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

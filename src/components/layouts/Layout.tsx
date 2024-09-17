import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout() {
  return (
    <div className="min-h-screen bg-background text-textPrimary flex flex-col relative pt-24 lg:pt-32 pb-16">
      <Header />
      <main className="flex-grow w-full container">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

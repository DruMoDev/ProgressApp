import { Dumbbell } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function HeaderPreAuth() {
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <header className="bg-primary text-white p-4 fixed w-full top-0">
      <div className="container mx-auto flex items-center justify-between">
        <Link to={"/"} className="flex items-center space-x-2">
          <Dumbbell size={24} />
          <span className="text-xl font-bold">ProgressApp</span>
        </Link>
        <nav>
          <Link
            to={pathname === "/login" ? "/register" : "/login"}
            className="text-sm font-medium hover:underline">
            {pathname === "/login" ? "Register" : "Login"}
          </Link>
        </nav>
      </div>
    </header>
  );
}

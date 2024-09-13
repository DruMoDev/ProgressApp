import { Dumbbell } from "lucide-react";
import { Link } from "react-router-dom";
import useUserProfile from "../hooks/useUserProfile";

export default function HeaderPostAuth() {
  const { logout } = useUserProfile();

  return (
    <header className="bg-primary text-white p-4 fixed w-full top-0">
      <div className="container mx-auto flex items-center justify-between">
        <Link to={"/"} className="flex items-center space-x-2">
          <Dumbbell size={24} />
          <span className="text-xl font-bold">ProgressApp</span>
        </Link>
        <nav>
          <button
            onClick={logout}
            className="ml-4 bg-white text-primary py-1 px-3 rounded-md font-semibold hover:bg-background transition duration-300 ease-in-out">
            Logout
          </button>
        </nav>
      </div>
    </header>
  );
}

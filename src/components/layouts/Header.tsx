import { Dumbbell } from "lucide-react";
import { Link } from "react-router-dom";
import useUserProfile from "../../hooks/useUserProfile";
import Navbar from "./Navbar";

export default function Header() {
  const { isLoading } = useUserProfile();

  if (isLoading) return null;

  return (
    <header className="bg-primary text-white min-h-16 items-center flex fixed w-full top-0 z-50 shadow-lg">
      <div className="container flex items-center justify-between ">
        <Link to="/" className="flex items-center space-x-2 py-4">
          <Dumbbell size={28} />
          <span className="text-2xl font-bold">ProgressApp</span>
        </Link>
        
        <Navbar />
      </div>
    </header>
  );
}

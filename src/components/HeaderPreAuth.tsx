import { Dumbbell } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeaderPreAuth() {
  return (
    <header className="bg-primary text-white p-4 fixed w-full top-0">
      <div className="container mx-auto flex items-center justify-between">
        <Link to={"/"} className="flex items-center space-x-2">
          <Dumbbell size={24} />
          <span className="text-xl font-bold">ProgressApp</span>
        </Link>
      </div>
    </header>
  );
}

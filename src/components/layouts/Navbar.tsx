import { useState } from "react";
import { X, User, Calendar, LogOut, Clipboard } from "lucide-react";
import { Link } from "react-router-dom";
import useUser from "../../hooks/useUser";
import useProfile from "../../hooks/useProfile";
import logout from "../../utils/functions/logout";

export default function Navbar() {
  const {user} = useUser()
  const {profile} = useProfile()
  const [isMenuOpen, setIsMenuOpen] = useState(false);

 
  

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <>
      {user && (
        <nav className="relative">
          <button
            onClick={toggleMenu}
            className="lg:hidden z-50 relative focus:outline-none">
            {isMenuOpen ? (
              <X size={28} />
            ) : profile?.photoURL ? (
              <img
                src={profile?.photoURL}
                alt="Profile"
                className="w-10 h-10 rounded-full"
              />
            ) : (
              <User size={28} />
            )}
          </button>

          <div
            className={`${
              isMenuOpen ? "right-0" : "-right-full"
            } flex lg:flex-row flex-col lg:gap-10 gap-5 lg:static lg:h-auto lg:w-auto fixed top-0 bg-primary h-screen w-2/3 py-8 pl-3 lg:p-0 lg:transition-none lg:bg-transparent lg:shadow-none transition-all duration-500 ease-in-out z-40`}>
            <Link
              to="/profile"
              className="flex items-center space-x-2 hover:bg-primaryHover lg:hover:bg-transparent p-2 transition-colors duration-300 ease-in-out"
              onClick={() => setIsMenuOpen(false)}>
              <User size={28} className="text-white" />
              <span className="text-lg font-semibold">Profile</span>
            </Link>
            <Link
              to="/routines"
              className="flex items-center space-x-2 hover:bg-primaryHover lg:hover:bg-transparent p-2 transition-colors duration-300 ease-in-out"
              onClick={() => setIsMenuOpen(false)}>
              <Clipboard size={28} />
              <span className="text-lg font-semibold">Routines</span>
            </Link>
            <Link
              to="/sessions"
              className="flex items-center space-x-2 hover:bg-primaryHover lg:hover:bg-transparent p-2 transition-colors duration-300 ease-in-out"
              onClick={() => setIsMenuOpen(false)}>
              <Calendar size={28} />
              <span className="text-lg font-semibold">Sessions</span>
            </Link>
            <button
              onClick={() => {
                logout();
                setIsMenuOpen(false);
              }}
              className="flex items-center space-x-2 hover:bg-primaryHover lg:hover:bg-transparent p-2 transition-colors duration-300 ease-in-out text-left">
              <LogOut size={28} />
              <span className="text-lg font-semibold">Logout</span>
            </button>
          </div>
        </nav>
      )}
    </>
  );
}

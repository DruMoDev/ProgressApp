import { useState } from "react";
import { Dumbbell, User, Clipboard, Calendar, LogOut, X } from "lucide-react";
import { Link } from "react-router-dom";
import useUserProfile from "../../hooks/useUserProfile";

export default function Header() {
  const { logout, authenticated, profile } = useUserProfile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-primary text-white min-h-16 items-center flex fixed w-full top-0 z-50 shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo and brand name */}
        <Link to="/" className="flex items-center space-x-2 py-4">
          <Dumbbell size={28} />
          <span className="text-2xl font-bold">ProgressApp</span>
        </Link>

        {/* Navigation Menu */}
        {authenticated && (
          <nav className="relative">
            {/* Mobile Menu Button */}
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

            {/* Menu Items */}
            <div
              className={`${
                isMenuOpen ? "right-0" : "-right-full"
              } flex lg:flex-row flex-col lg:gap-10 gap-5 lg:static lg:h-auto lg:w-auto fixed top-0 bg-primary h-screen w-2/3 p-8 lg:p-0 lg:bg-transparent lg:shadow-none transition-all duration-300 ease-in-out z-40`}>
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
      </div>
    </header>
  );
}

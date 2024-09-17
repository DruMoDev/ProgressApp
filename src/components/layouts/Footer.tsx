import { useLocation } from "react-router-dom";
import useUserProfile from "../../hooks/useUserProfile";

export default function Footer() {
  const { isLoading } = useUserProfile();
  const { pathname } = useLocation();
  console.log(pathname);

  if (isLoading) return;

  if (pathname === "/") {
    return (
      <footer className="bg-textPrimary text-white py-4 mt-auto absolute w-full bottom-0">
        <div className="container text-center text-sm">
          &copy; {new Date().getFullYear()} ProgressApp. All rights reserved.
        </div>
      </footer>
    );
  }

  if (pathname === "/dashboard") {
    return <></>;
  }

  return null;
}

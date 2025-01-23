import { AuthContext } from "@/context/auth-context/AuthContext";
import React, { useContext } from "react";
import { Link } from "react-router-dom";

const Header = ({ onSignOut }) => {
  const { resetCredentials } = useContext(AuthContext);
  const handleLogout = () => {
    resetCredentials();
    sessionStorage.clear();
  };
  return (
    <header className="fixed inset-x-0 top-0 z-30 mx-auto w-full border border-gray-100 bg-white py-3 shadow backdrop-blur-lg">
      <div className="px-12">
        <div className="flex items-center justify-between">
          <div className="flex shrink-0">
            <Link aria-current="page" className="flex items-center" to="/home">
              <h1 className="h-15 text-[#14b8a6] text-[3rem] font-bold">P</h1>
              <h1 className="h-9 w-auto text-[2rem] text-[#14b8a6] font-bold">
                rathibha <span className="text-[#d946ef]">learn</span>
              </h1>
            </Link>
          </div>
          <button
            onClick={handleLogout}
            className="inline-flex items-center justify-center rounded-xl bg-[#d946ef] px-8 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 ease-in-out transform hover:bg-[#a21caf] hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            <span className="font-semibold">Sign out</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

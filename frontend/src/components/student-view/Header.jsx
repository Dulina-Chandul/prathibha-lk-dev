import { AuthContext } from "@/context/auth-context/AuthContext";
import React, { useContext } from "react";

const Header = ({ onSignOut }) => {
  const { resetCredentials } = useContext(AuthContext);
  const handleLogout = () => {
    resetCredentials();
    sessionStorage.clear();
  };
  return (
    <header className="w-full bg-gradient-to-r from-[#3168ba] to-[#73c3e8] shadow-lg">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-2xl font-bold text-white">PRATHIBA LEARN</span>
        </div>

        {/* Sign Out Button */}
        <button
          onClick={handleLogout}
          className="bg-[#FF4A61] text-white px-6 py-2 rounded-lg hover:bg-[#e63a4f] transition-colors "
        >
          <span className="font-semibold">Sign out</span>
        </button>
      </div>
    </header>
  );
};

export default Header;

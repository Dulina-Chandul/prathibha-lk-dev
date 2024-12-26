import React from "react";
import { Link } from "react-router-dom";

const AuthPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="fixed top-0 w-full bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-[#3168ba] to-[#73c3e8] bg-clip-text text-transparent">
                Prathibha
              </span>
              <span className="text-2xl font-medium text-[#FF4A61]">Learn</span>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default AuthPage;

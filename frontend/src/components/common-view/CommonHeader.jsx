import React from "react";
import { Link } from "react-router-dom";

const CommonHeader = () => {
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
              <p className="sr-only">Prathibha learn</p>
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
            <Link
              aria-current="page"
              className="inline-block rounded-lg px-4 py-2 text-xl font-semibold text-gray-800 transition-transform duration-200 hover:bg-gray-200 hover:text-gray-900 hover:scale-105"
              to="/lessons"
            >
              Lessons
            </Link>
            <Link
              className="inline-block rounded-lg px-4 py-2 text-xl font-semibold text-gray-800 transition-transform duration-200 hover:bg-gray-200 hover:text-gray-900 hover:scale-105"
              to="/about-us"
            >
              About Us
            </Link>
            <Link
              className="inline-block rounded-lg px-4 py-2 text-xl font-semibold text-gray-800 transition-transform duration-200 hover:bg-gray-200 hover:text-gray-900 hover:scale-105"
              to="/contact"
            >
              Contact
            </Link>
          </div>
          <div className="flex items-center justify-end gap-3">
            <Link
              className="hidden items-center justify-center rounded-xl bg-white px-8 py-3 text-sm font-semibold text-gray-900 shadow-lg ring-1 ring-inset ring-gray-300 transition-all duration-200  hover:scale-105 sm:inline-flex"
              to="/auth"
            >
              Sign in
            </Link>
            <Link
              className="inline-flex items-center justify-center rounded-xl bg-[#d946ef] px-8 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 ease-in-out transform hover:bg-[#a21caf] hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              to="/auth"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default CommonHeader;

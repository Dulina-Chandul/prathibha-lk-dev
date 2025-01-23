import React from "react";

const Contact = () => {
  return (
    <div>
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-30 w-full py-3 mx-auto border border-gray-100 shadow mavx-w-screen-md bg-white/80 backdrop-blur-lg md:top-6 md:rounded-2xl lg:max-w-screen-lg">
        <div className="px-4">
          <div className="flex items-center justify-between">
            <div className="flex shrink-0">
              <a aria-current="page" className="flex items-center" href="/">
                <h1 className="h-10 text-[#14b8a6] text-3xl font-bold">P</h1>
                <h1 className="h-9 w-auto text-2xl text-[#14b8a6] font-bold">
                  rathibha <span className="text-[#d946ef]">learn</span>
                </h1>
                <p className="sr-only">Prathibha lern</p>
              </a>
            </div>
            <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
              <a
                aria-current="page"
                className="inline-block px-3 py-2 text-sm font-medium font-semibold text-gray-900 transition-transform duration-200 rounded-lg hover:bg-fuchsia-100 hover:text-gray-900 hover:scale-105"
                href="contact.html"
              >
                Contact
              </a>
              <a
                className="inline-block px-3 py-2 text-sm font-medium font-semibold text-gray-900 transition-transform duration-200 rounded-lg hover:bg-fuchsia-100 hover:text-gray-900 hover:scale-105"
                href="#"
              >
                Courses
              </a>
              <a
                className="inline-block px-3 py-2 text-sm font-medium font-semibold text-gray-900 transition-transform duration-200 rounded-lg hover:bg-fuchsia-100 hover:text-gray-900 hover:scale-105"
                href="#team"
              >
                About Us
              </a>
            </div>

            <div className="flex items-center justify-end gap-3">
              <a
                className="items-center justify-center hidden px-6 py-3 text-sm font-semibold text-gray-900 transition-all duration-200 bg-white shadow-lg rounded-xl ring-1 ring-inset ring-gray-300 hover:scale-105 sm:inline-flex"
                href="/auth"
              >
                Sign in
              </a>
              <a
                className="inline-flex items-center justify-center rounded-xl bg-[#d946ef] px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 ease-in-out transform hover:bg-[#a21caf] hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                href="/auth"
              >
                Login
              </a>
            </div>
          </div>
        </div>
      </header>
      <br /> <br /> <br /> <br />
      {/* Contact Section */}
      <section>
        <div className="container px-6 py-12 mx-auto">
          <div className="text-center">
            <h1 className="px-5 text-6xl font-medium text-black-500 dark:text-black-400 contact_banner">
              Contact us
            </h1>

            <h1
              className="mt-2 mt-5 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-blck"
              data-aos="fade-right contact_banner"
            >
              Get in touch
            </h1>

            <p className="mt-3 text-black-500 dark:text-black-400 contact_banner">
              Our friendly team is always here to chat.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3 banner">
            <div className="flex flex-col items-center justify-center p-6 text-center border shadow-md cursor-pointer bg-gray-50 rounded-2xl hover:shadow-lg">
              <span className="p-3 text-[#14b8a6] rounded-full dark:bg-fuchsia-100">
                <i className="bx bxs-envelope bx-md"></i>
              </span>

              <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">
                Email
              </h2>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Our friendly team is here to help.
              </p>
              <p className="mt-2 text-blue-500 dark:text-blue-400">
                prathibhacontact@gmail.com
              </p>
            </div>

            <div className="flex flex-col items-center justify-center p-6 text-center border shadow-md cursor-pointer bg-gray-50 rounded-2xl hover:shadow-lg">
              <span className="p-3 text-[#14b8a6] rounded-full dark:bg-fuchsia-100">
                <i className="bx bxs-location-plus bx-md"></i>
              </span>

              <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-black">
                Office
              </h2>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Come say hello at our office HQ.
              </p>
              <p className="mt-2 text-blue-500 dark:text-blue-400">
                C.W.W.Kannangara Central College - Mathugama
              </p>
            </div>

            <div className="flex flex-col items-center justify-center p-6 border shadow-md cursor-pointer ptext-center bg-gray-50 rounded-2xl hover:shadow-lg">
              <span className="p-3 text-[#14b8a6] rounded-full dark:bg-fuchsia-100">
                <i className="bx bxs-phone bx-md"></i>
              </span>

              <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">
                Phone
              </h2>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Mon-Fri from 8am to 2pm.
              </p>
              <p className="mt-2 text-blue-500 dark:text-blue-400">
                0342247272
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer>
        <div className="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="text-center">
            <a
              href="#"
              className="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900"
            >
              <h1 className="h-10 text-[#14b8a6] text-3xl font-bold">P</h1>
              <h1 className="text-[#14b8a6]">
                rathibha <span className="text-[#d946ef]">lern</span>
              </h1>
            </a>

            <span className="block text-sm text-center text-gray-500 dark:text-gray-400">
              © 2024-2025 Prathiba.lk™. All Rights Reserved.
            </span>
            <ul className="flex justify-center mt-5 space-x-5">
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-[#14b8a6] dark:text-gray-400"
                >
                  <i className="bx bxl-facebook-circle bx-sm"></i>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-[#14b8a6] dark:text-gray-400"
                >
                  <i className="bx bxl-instagram-alt bx-sm"></i>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-[#14b8a6] dark:text-gray-400"
                >
                  <i className="bx bxl-github bx-sm"></i>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-[#14b8a6] dark:text-gray-400"
                >
                  <i className="bx bxl-twitter bx-sm"></i>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-[#14b8a6] dark:text-gray-400"
                >
                  <i className="bx bxl-whatsapp bx-sm"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;

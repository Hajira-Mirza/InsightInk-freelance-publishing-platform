import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="sticky top-0 max-w-full bg-white flex justify-between items-center px-6 lg:px-12 h-16 drop-shadow-xl z-50">
        <div>
          <a
            href="/"
            className="text-gray-700 text-2xl pr-10 cursor-pointer hover:text-gray-700 focus:text-gray-700"
          >
            Insight<span className="text-violet-500">Ink</span>
          </a>
        </div>
        <nav className="hidden sm:flex justify-center">
          <NavLink
            className="text-gray-700 hover:text-violet-500 px-5"
            to={"/"}
          >
            Home
          </NavLink>
          <NavLink
            className="text-gray-700 hover:text-violet-500 px-5"
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className="text-gray-700 hover:text-violet-500 px-5"
            to={"/plans"}
          >
            Plans
          </NavLink>
          <NavLink
            className="text-gray-700 hover:text-violet-500 px-5"
            to={"/contact"}
          >
            Contact
          </NavLink>
        </nav>
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/login">
            <button className="text-violet-500 border-2 bg-white border-violet-500 rounded-full px-5 py-1 hover:bg-violet-500 hover:text-white hover:border-violet-500 focus:outline-none">
              Sign In
            </button>
          </Link>
          <Link to="/register">
            <button className="text-white border-2 bg-violet-500 border-violet-500 rounded-full px-5 py-1 hover:bg-white hover:text-violet-500 hover:border-violet-500 focus:outline-none">
              Sign Up
            </button>
          </Link>
        </div>
        <div className="sm:hidden flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#8b5cf6"
            onClick={toggleMenu}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
          {isOpen && (
            <div className="absolute top-0 left-0 w-screen h-screen bg-white rounded-lg shadow-lg z-50">
              <ul className="py-6 px-6">
                <li className="py-3">
                  <a
                    href="/"
                    className="text-gray-700 hover:text-violet-500 animate-slidein opacity-0 [--slidein-delay:300ms]"
                  >
                    Home
                  </a>
                </li>
                <li className="py-3">
                  <a
                    href="/about"
                    className="text-gray-700 hover:text-violet-500 animate-slidein opacity-0 [--slidein-delay:500ms]"
                  >
                    About
                  </a>
                </li>
                <li className="py-3">
                  <a
                    href="/plans"
                    className="text-gray-700 hover:text-violet-500 animate-slidein opacity-0 [--slidein-delay:700ms]"
                  >
                    Plans
                  </a>
                </li>
                <li className="py-3">
                  <a
                    href="/contact"
                    className="text-gray-700 hover:text-violet-500 animate-slidein opacity-0 [--slidein-delay:1100ms]"
                  >
                    Contact
                  </a>
                </li>
                <li className="py-3">
                  <a
                    href="/register"
                    className="text-gray-700 hover:text-violet-500 animate-slidein opacity-0 [--slidein-delay:1300ms]"
                  >
                    Sign Up
                  </a>
                </li>
                <li className="py-3">
                  <a
                    href="/login"
                    className="text-gray-700 hover:text-violet-500 animate-slidein opacity-0 [--slidein-delay:1500ms]"
                  >
                    Sign In
                  </a>
                </li>
              </ul>
              <button
                onClick={toggleMenu}
                className="absolute top-4 right-4 text-violet-500 hover:text-violet-500 focus:outline-none bg-transparent"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;

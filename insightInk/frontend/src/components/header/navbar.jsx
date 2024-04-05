import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div className="w-screen h-16 bg-white flex justify-center items-center drop-shadow-xl space-x-1">
        <div>
          <h1 className="text-black text-2xl pr-10">
            Insight<span className="text-violet-500">Ink</span>
          </h1>
        </div>
        <div className="flex justify-center">
          <NavLink
            className="hover:border-2 border-violet-500 px-5 py-1 rounded-full text-violet-500 hover:text-white hover:bg-violet-500 active:bg-violet-500 active:text-white active:border-violet-500 transition-all 
      focus:border-2 focus:border-violet-500"
            to={"/"}
          >
            Home
          </NavLink>
        </div>
        <div>
          <NavLink
            className="hover:border-2 border-violet-500 px-5 py-1 rounded-full text-violet-500 active:bg-violet-500 active:text-white active:border-violet-500 hover:text-white hover:bg-violet-500 transition-all 
      focus:border-2 focus:border-violet-500"
            to={"/about"}
          >
            About
          </NavLink>
        </div>

        <div>
          <NavLink
            className="hover:border-2 border-violet-500 active:bg-violet-500 active:text-white active:border-violet-500 px-5 py-1 rounded-full text-violet-500 hover:text-white hover:bg-violet-500 transition-all 
      focus:border-2 focus:border-violet-500"
            to={"/plans"}
          >
            Plans
          </NavLink>
        </div>
        <div>
          <NavLink
            className="hover:border-2 hover:bg-violet-500 border-violet-500 px-5 py-1 rounded-full mr-10 text-violet-500 hover:text-white transition-all 
      focus:border-2 focus:border-violet-500 active:bg-violet-500 active:text-white active:border-violet-500"
            to={"/contact"}
          >
            Contact
          </NavLink>
        </div>
        <div>
          <Link to="/login">
            <button
              className="text-violet-500 border-2 bg-white border-violet-500 flex-items-end justify-items-end rounded-full
    px-5 py-1 inline-block hover:bg-violet-500 hover:text-white hover:border-violet-500 focus:outline-none"
            >
              Sign In
            </button>
          </Link>
        </div>
        <Link to="/register">
          <button
            className="text-white border-2 bg-violet-500 border-violet-500 flex-items-end justify-items-end rounded-full
      px-5 py-1 inline-block hover:bg-white hover:text-violet-500 hover:border-violet-500 focus:outline-none"
          >
            Sign Up
          </button>
        </Link>
      </div>
    </>
  );
}
export default Navbar;

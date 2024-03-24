import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <>
    <div className="w-screen h-14 bg-white flex justify-center items-center space-x-32 drop-shadow-xl">
      <div className="flex justify-center">
        <NavLink className="hover:border-2 border-violet-500 px-5 py-1 rounded-full text-violet-500 hover:text-violet-500 transition-all 
      focus:border-2 focus:border-violet-500" to={""}>Home</NavLink>
      </div>
      <div>
      <NavLink className="hover:border-2 border-violet-500 px-5 py-1 rounded-full text-violet-500 hover:text-violet-500 transition-all 
      focus:border-2 focus:border-violet-500" to={"about"}>About</NavLink>
      </div>
      <div>
      <NavLink className="hover:border-2 border-violet-500 px-5 py-1 rounded-full text-violet-500 hover:text-violet-500 transition-all 
      focus:border-2 focus:border-violet-500" to={"services"}>Services</NavLink>
      </div>
      <div>
      <NavLink className="hover:border-2 border-violet-500 px-5 py-1 rounded-full text-violet-500 hover:text-violet-500 transition-all 
      focus:border-2 focus:border-violet-500" to={"contact"}>Contact</NavLink>
      </div>
      <div>
      <button
      className="text-white border-2 bg-violet-500 border-violet-500 flex-items-end justify-items-end rounded-full
      px-12 py-2 inline-block font-semi-bold hover:bg-white hover:text-violet-500 hover:drop-shadow-xl hover:border-violet-500 focus:outline-none"
        >Sign In</button>
      </div>
      
      <button
      className="text-white border-2 bg-violet-500 border-violet-500 flex-items-end justify-items-end rounded-full
      px-12 py-2 inline-block font-semi-bold hover:bg-white hover:text-violet-500 hover:drop-shadow-xl hover:border-violet-500 focus:outline-none"
        >Sign Up</button>
    </div>

    </>
  );
}
export default Navbar;

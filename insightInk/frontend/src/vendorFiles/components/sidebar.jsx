import { RxDashboard } from "react-icons/rx";
import { IoPersonOutline } from "react-icons/io5";
import { PiBooksLight, PiArrowFatLineUpLight } from "react-icons/pi";
import { CiShop, CiBullhorn, CiLogout } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Sidebar() {
  const navigate = useNavigate();
  const logout = async () => {
    try {
      const response = await axios.delete(
        "http://localhost:7000/auth/logout",
      );
      console.log("Logout response:", response.data);
  
      window.localStorage.removeItem("token");
      window.localStorage.removeItem("isLoggedIn");

      navigate("/");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <>
      <div className="flex flex-col h-full bg-violet-500 sm:w-36 md:w-56 lg:w-68 xl:w-72 2xl:w-72 rounded-r-3xl drop-shadow-xl overflow-hidden">
        <div className="flex items-center justify-start p-3 h-16 lg:pl-5">
          <a
            href="/dashboard"
            className="text-2xl sm:text-lg md:text-xl lg:text-xl xl:text-3xl text-white cursor-pointer hover:text-gray-100 focus:text-gray-100"
          >
            InsightInk
          </a>
        </div>
        <ul className="flex flex-col h-full justify-evenly">
          <li>
            <a
              href="/dashboard"
              className={`flex flex-row items-center h-14 sm:h-12 md:h-14 lg:h-14 xl:h-16 transform hover:translate-x-2 transition-transform ease-in duration-200 ${
                location.pathname === "/dashboard"
                  ? "bg-gray-50 text-violet-500 hover:text-violet-500 focus:text-violet-500 rounded-s-full"
                  : ""
              }`}
            >
              <span
                className={`inline-flex items-center justify-center pl-3 mr-2 sm:pl-0 sm:mr-0 md:pl-3 md:mr-2 lg:pl-3 lg:mr-2 xl:pl-3 xl:mr-2 h-16 w-16 sm:h-10 sm:w-10 md:h-10 md:w-10 lg:h-14 lg:w-14 xl:h-16 xl:w-16 text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl ${
                  location.pathname === "/dashboard"
                    ? " text-violet-500 hover:text-violet-500 focus:text-violet-500"
                    : ""
                }`}
              >
                <RxDashboard />
              </span>
              <span className="text-md sm:text-xs md:text-sm lg:text-md xl:text-lg">Dashboard</span>
            </a>
          </li>
          <li>
            <a
              href="/manageProfile"
              className={`flex flex-row items-center h-14 sm:h-12 md:h-14 lg:h-14 xl:h-16 transform hover:translate-x-2 transition-transform ease-in duration-200 ${
                location.pathname === "/manageProfile"
                  ? "bg-gray-50 text-violet-600 hover:text-violet-600 focus:text-violet-600 rounded-s-full"
                  : ""
              }`}
            >
              <span
                className={`inline-flex items-center justify-center pl-3 sm:pl-0 sm:mr-0 mr-2 h-16 w-16 sm:h-10 sm:w-10 md:h-10 md:w-10 lg:h-14 lg:w-14 xl:h-16 xl:w-16 text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl ${
                  location.pathname === "/manageProfile"
                    ? " text-violet-600 hover:text-violet-600 focus:text-violet-600"
                    : ""
                }`}
              >
                <IoPersonOutline />
              </span>
              <span className="text-md sm:text-xs md:text-sm lg:text-md xl:text-lg">Manage Profile</span>
            </a>
          </li>
          <li>
            <a
              href="/books"
              className={`flex flex-row items-center h-14 sm:h-12 md:h-14 lg:h-14 xl:h-16 transform hover:translate-x-2 transition-transform ease-in duration-200 ${
                location.pathname === "/books"
                  ? "bg-gray-50 text-violet-600 hover:text-violet-600 focus:text-violet-600 rounded-s-full"
                  : ""
              }`}
            >
              <span
                className={`inline-flex items-center justify-center pl-3 sm:pl-0 sm:mr-0 mr-2 h-16 w-16 sm:h-10 sm:w-10 md:h-10 md:w-10 lg:h-14 lg:w-14 xl:h-16 xl:w-16 text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl ${
                  location.pathname === "/books"
                    ? " text-violet-600 hover:text-violet-600 focus:text-violet-600"
                    : ""
                }`}
              >
                <PiBooksLight />
              </span>
              <span className="text-md sm:text-xs md:text-sm lg:text-md xl:text-lg">Books</span>
            </a>
          </li>
          <li>
            <a
              href="/marketplace"
              className={`flex flex-row items-center h-14 sm:h-12 md:h-14 lg:h-14 xl:h-16 transform hover:translate-x-2 transition-transform ease-in duration-200 ${
                location.pathname === "/marketplace"
                  ? "bg-gray-50 text-violet-600 hover:text-violet-600 focus:text-violet-600 rounded-s-full"
                  : ""
              }`}
            >
              <span
                className={`inline-flex items-center justify-center pl-3 sm:pl-0 sm:mr-0 mr-2 h-16 w-16 sm:h-10 sm:w-10 md:h-10 md:w-10 lg:h-14 lg:w-14 xl:h-16 xl:w-16 text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl ${
                  location.pathname === "/marketplace"
                    ? " text-violet-600 hover:text-violet-600 focus:text-violet-600"
                    : ""
                }`}
              >
                <CiShop />
              </span>
              <span className="text-md sm:text-xs md:text-sm lg:text-md xl:text-lg">Marketplace</span>
            </a>
          </li>
          <li>
            <a
              href="/offersReceived"
              className={`flex flex-row items-center h-14 sm:h-12 md:h-14 lg:h-14 xl:h-16 transform hover:translate-x-2 transition-transform ease-in duration-200 ${
                location.pathname === "/offersReceived"
                  ? "bg-gray-50 text-violet-600 hover:text-violet-600 focus:text-violet-600 rounded-s-full"
                  : ""
              }`}
            >
              <span
                className={`inline-flex items-center justify-center pl-3 sm:pl-0 sm:mr-0 mr-2 h-16 w-16 sm:h-10 sm:w-10 md:h-10 md:w-10 lg:h-14 lg:w-14 xl:h-16 xl:w-16 text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl ${
                  location.pathname === "/offersReceived"
                    ? " text-violet-600 hover:text-violet-600 focus:text-violet-600"
                    : ""
                }`}
              >
                <CiBullhorn />
              </span>
              <span className="text-lg text-md sm:text-xs md:text-sm lg:text-md xl:text-lg">Offers Received</span>
            </a>
          </li>
          <li>
            <a
              href="/upgradePlan"
              className={`flex flex-row items-center h-14 sm:h-12 md:h-14 lg:h-14 xl:h-16 transform hover:translate-x-2 transition-transform ease-in duration-200 ${
                location.pathname === "/upgradePlan"
                  ? "bg-gray-50 text-violet-600 hover:text-violet-600 focus:text-violet-600 rounded-s-full"
                  : ""
              }`}
            >
              <span
                className={`inline-flex items-center justify-center pl-3 sm:pl-0 sm:mr-0 mr-2 h-16 w-16 sm:h-10 sm:w-10 md:h-10 md:w-10 lg:h-14 lg:w-14 xl:h-16 xl:w-16 text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl ${
                  location.pathname === "/upgradePlan"
                    ? " text-violet-600 hover:text-violet-600 focus:text-violet-600"
                    : ""
                }`}
              >
                <PiArrowFatLineUpLight />
              </span>
              <span className="text-md sm:text-xs md:text-sm lg:text-md xl:text-lg">Upgrade Plan</span>
            </a>
          </li>
          <li>
            <button
              className="text-md sm:text-xs md:text-sm lg:text-md xl:text-lg text-white flex bg-transparent items-center rounded-none transform hover:translate-x-2 transition-transform ease-in duration-200"
              onClick={() => {
                void logout();
              }}
            >
              <CiLogout className="text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white mr-3 h-10" />
              Logout
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;


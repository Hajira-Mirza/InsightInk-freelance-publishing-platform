import { RxDashboard } from "react-icons/rx";
import { IoPersonOutline } from "react-icons/io5";
import { PiBooksLight, PiArrowFatLineUpLight } from "react-icons/pi";
import { CiShop, CiBullhorn, CiLogout } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
function Sidebar() {
  const navigate = useNavigate();
  const logout = () => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("isLoggedIn");
    navigate("/");
  };
  return (
    <>
      <div className="flex flex-col w-56 h-full bg-violet-500 overflow-hidden rounded-r-3xl drop-shadow-xl">
        <div className="flex items-center justify-start pl-5 h-10 mb-8 mt-4">
          <a
            href="/dashboard"
            className="text-2xl text-white cursor-pointer hover:text-gray-100 focus:text-gray-100"
          >
            InsightInk
          </a>
        </div>
        <ul className="flex flex-col pt-3">
          <li>
            <a
              href="/dashboard"
              className={`flex flex-row items-center h-16 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white hover:text-white ${
                location.pathname === "/dashboard"
                  ? "bg-gray-50 text-slate-500 hover:text-slate-500 focus:text-slate-500 rounded-s-full"
                  : ""
              }`}
            >
              <span
                className={`inline-flex items-center justify-center h-16 w-16 text-2xl text-white ${
                  location.pathname === "/dashboard"
                    ? " text-slate-500 hover:text-slate-500 focus:text-slate-500 rounded-s-full"
                    : ""
                }`}
              >
                <RxDashboard />
              </span>
              <span className="text-md font-medium">Dashboard</span>
            </a>
          </li>
          <li>
            <a
              href="/manageProfile"
              className={`flex flex-row items-center h-16 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white hover:text-white ${
                location.pathname === "/manageProfile"
                  ? "bg-gray-50 text-slate-500 hover:text-slate-500 focus:text-slate-500 rounded-s-full"
                  : ""
              }`}
            >
              <span
                className={`inline-flex items-center justify-center h-16 w-16 text-2xl text-white ${
                  location.pathname === "/manageProfile"
                    ? " text-slate-500 hover:text-slate-500 focus:text-slate-500 rounded-s-full"
                    : ""
                }`}
              >
                <IoPersonOutline />
              </span>
              <span className="text-md font-medium">Manage Profile</span>
            </a>
          </li>
          <li>
            <a
              href="/books"
              className={`flex flex-row items-center h-16 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white hover:text-white ${
                location.pathname === "/books"
                  ? "bg-gray-50 text-slate-500 hover:text-slate-500 focus:text-slate-500 rounded-s-full"
                  : ""
              }`}
            >
              <span
                className={`inline-flex items-center justify-center h-16 w-16 text-2xl text-white ${
                  location.pathname === "/books"
                    ? " text-slate-500 hover:text-slate-500 focus:text-slate-500 rounded-s-full"
                    : ""
                }`}
              >
                <PiBooksLight />
              </span>
              <span className="text-md font-medium">Books</span>
            </a>
          </li>
          <li>
            <a
              href="/marketplace"
              className={`flex flex-row items-center h-16 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white hover:text-white ${
                location.pathname === "/marketplace"
                  ? "bg-gray-50 text-slate-500 hover:text-slate-500 focus:text-slate-500 rounded-s-full"
                  : ""
              }`}
            >
              <span
                className={`inline-flex items-center justify-center h-16 w-16 text-2xl text-white ${
                  location.pathname === "/marketplace"
                    ? " text-slate-500 hover:text-slate-500 focus:text-slate-500 rounded-s-full"
                    : ""
                }`}
              >
                <CiShop />
              </span>
              <span className="text-md font-medium">Marketplace</span>
            </a>
          </li>
          <li>
            <a
              href="/offersReceived"
              className={`flex flex-row items-center h-16 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white hover:text-white ${
                location.pathname === "/offersReceived"
                  ? "bg-gray-50 text-slate-500 hover:text-slate-500 focus:text-slate-500 rounded-s-full"
                  : ""
              }`}
            >
              <span
                className={`inline-flex items-center justify-center h-16 w-16 text-2xl text-white ${
                  location.pathname === "/offersReceived"
                    ? " text-slate-500 hover:text-slate-500 focus:text-slate-500 rounded-s-full"
                    : ""
                }`}
              >
                <CiBullhorn />
              </span>
              <span className="text-md font-medium">Offers Received</span>
            </a>
          </li>
          <li>
            <a
              href="/upgradePlan"
              className={`flex flex-row items-center h-16 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white hover:text-white mb-11 ${
                location.pathname === "/upgradePlan"
                  ? "bg-gray-50 text-slate-500 hover:text-slate-500 focus:text-slate-500 rounded-s-full"
                  : ""
              }`}
            >
              <span
                className={`inline-flex items-center justify-center h-16 w-16 text-2xl text-white ${
                  location.pathname === "/upgradePlan"
                    ? " text-slate-500 hover:text-slate-500 focus:text-slate-500 rounded-s-full"
                    : ""
                }`}
              >
                <PiArrowFatLineUpLight />
              </span>
              <span className="text-md font-medium">Upgrade Plan</span>
            </a>
          </li>
          <li>
            <button
              className="text-md font-medium text-gray-700 flex bg-gray-50 h-16 w-56 items-center rounded-none"
              onClick={() => logout()}
            >
              <CiLogout className="text-2xl text-gray-700 mr-5" />
              Logout
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;

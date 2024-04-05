import { useState } from "react";
import UserHome from "./pages/UserHome";
import Ongoing from "./pages/Ongoing";
import OrdersContainer from "./pages/orders";
const Index = () => {
  // State to track active page
  const [activePage, setActivePage] = useState("Books");

  // Function to handle button click and update active page
  const handleButtonClick = (page) => {
    setActivePage(page);
  };

  // Dummy content for each page
  const pages = {
    Profile: <UserHome />,
    Books: <OrdersContainer />,
    Ongoing: <Ongoing />,
  };

  return (
    <div className="bg-violet-500 flex w-screen  ">
      {/* Sidebar */}
      <div className="w-1/4  bg-cyan-900 p-4 shadow-lg ">
        <h2 className="text-xl text-white font-bold mb-4">Sidebar</h2>

        <button
          className={`w-full py-2 px-4 mb-2 rounded-md ${
            activePage === "Books"
              ? "bg-blue-500 bg-opacity-50 text-white"
              : "bg-black bg-opacity-50"
          }`}
          onClick={() => handleButtonClick("Books")}
        >
          Books
        </button>
        <button
          className={`w-full py-2 px-2 mb-2 rounded-md ${
            activePage === "Ongoing"
              ? "bg-blue-500 bg-opacity-50 text-white"
              : "bg-black bg-opacity-50"
          }`}
          onClick={() => handleButtonClick("Ongoing")}
        >
          Find Your Publisher
        </button>
        <button
          className={`w-full py-2 px-4 mb-2 rounded-md ${
            activePage === "Profile"
              ? "bg-blue-500 bg-opacity-50 text-white"
              : "bg-black bg-opacity-50"
          }`}
          onClick={() => handleButtonClick("Profile")}
        >
          Profile Settings
        </button>
      </div>

      {/* Content */}
      <div className="bg-stone-700 w-screen   ">
        {/*   <h1 className="text-2xl font-bold mb-4">{activePage}</h1> */}
        {pages[activePage]}
      </div>
    </div>
  );
};

export default Index;

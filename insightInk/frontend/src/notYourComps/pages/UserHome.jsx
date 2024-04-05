import { useState, useEffect } from "react";
import axios from "axios";

const UserHome = () => {
  const [userData, setUserData] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editedUserData, setEditedUserData] = useState({
    userId: "",
    emailAddress: "",
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:7000/user/getAllUsers"
        );
        console.log("User Data:", response.data);
        if (response.data.response.length > 0) {
          setUserData(response.data.response[0]); // Accessing the first user object in the array
        } else {
          setUserData(null);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const handleEdit = () => {
    setEditMode(true);
    setEditedUserData({
      userId: userData.userId,
      emailAddress: userData.emailAddress,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    try {
      await axios.put(`http://localhost:7000/user/updateUser/`, editedUserData);
      // Refresh user data after saving
      const response = await axios.get(
        "http://localhost:7000/user/getAllUsers"
      );
      if (response.data.response.length > 0) {
        setUserData(response.data.response[0]);
      } else {
        setUserData(null);
      }
      setEditMode(false);
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };

  return (
    <div className="bg-teal-800 w-full h-screen rounded-lg flex">
      <main className="w-full ml-32 py-1 flex flex-col justify-center bg-yellow-200 overflow-y-auto">
        {userData && (
          <div className="bg-white mr-32 max-w-4xl shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                User Profile
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Details and information about the user.
              </p>
            </div>
            <div className="border-t border-gray-200">
              <dl>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Full Name
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {editMode ? (
                      <input
                        type="text"
                        name="userName"
                        value={editedUserData.userName}
                        onChange={handleChange}
                        className="bg-gray-100 border border-gray-300 rounded-md px-2 py-1 w-full"
                      />
                    ) : (
                      userData.userName
                    )}
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Email Address
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {editMode ? (
                      <input
                        type="email"
                        name="emailAddress"
                        value={editedUserData.emailAddress}
                        onChange={handleChange}
                        className="bg-gray-100 border border-gray-300 rounded-md px-2 py-1 w-full"
                      />
                    ) : (
                      userData.emailAddress
                    )}
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">About</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 break-words">
                    {editMode ? (
                      <textarea
                        name="about"
                        value={editedUserData.password}
                        onChange={handleChange}
                        className="bg-gray-100 border border-gray-300 rounded-md px-2 py-1 w-full"
                      />
                    ) : (
                      userData.password
                    )}
                  </dd>
                </div>
              </dl>
            </div>
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
              {!editMode && (
                <button
                  onClick={handleEdit}
                  className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Edit
                </button>
              )}
              {editMode && (
                <button
                  onClick={handleSave}
                  className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Save
                </button>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default UserHome;

/*   <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">
                    Salary
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    $10,000
                </dd>
            </div>

              <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">
                    Best techno
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    React JS
                </dd>
            </div>
             */

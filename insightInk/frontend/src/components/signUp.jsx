import {
  FaGoogle,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaRegEnvelope,
  FaRegUser,
  FaPenNib,
  FaPrint,
} from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import RegisterComponent from "./images Components/registerComponent";

function SignUp() {
  const [userName, setUserName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);
  const [role, setRole] = useState("");

  const handleClick = (option) => {
    setSelectedOption(option);
    setRole(option);
  };
  const signUp = async () => {
    const { data } = await axios.post(
      "http://localhost:7000/user/createUser",
      {
        userName,
        emailAddress,
        password,
        role,
      },
      {
        withCredentials: true,
      }
    );
    if (data.error) {
      return alert("Unable to create user");
    }
    alert("Created user successfully");
    navigate("/dashboard");
  };

  const signInClick = () => {
    navigate("/login");
  };

  return (
    <>
      <div className="flex m-auto left-0 right-0 top-0 bottom-0 w-screen h-screen">
        <div className="flex m-auto left-0 right-0 top-0 bottom-0 w-full h-5/6 px-4 sm:px-10 md:px-20 lg:px-30 xl:px-40 py-1 text-center">
          <div className="bg-white rounded-2xl shadow-2xl flex w-full h-full m-auto left-0 right-0 top-0 bottom-0">
            <div className="w-2/3 bg-violet-500 text-white rounded-r-2xl px-5 drop-shadow-xl text-start flex-col flex items-center justify-center">
            <div className="flex items-center justify-center"><RegisterComponent /></div>
              <h2 className="text-4xl sm:text-lg md:text-2xl lg:text-2xl xl:text-2xl font-semibold mb-2">
                Innovate. Collaborate. Publish.
              </h2>
              <p className="mb-7 text-md sm:text-xs md:text:sm lg:text-md xl:text:lg text-start">
                Bringing Authors and Publishers Together, Seamlessly.
              </p>
              <p className="text-white text-md sm:text-xs md:text:sm lg:text-md xl:text:lg mb-5">Already a member?</p>
              <button
                className="text-white text-md sm:text-xs md:text:sm lg:text-md xl:text:lg border-1 bg-violet-500 border-white rounded-full px-5 py-2 inline-block font-semi-bold hover:bg-white hover:text-violet-500 hover:border-white focus:outline-none"
                onClick={signInClick}
              >
                Sign In
              </button>
            </div>
            <div className="w-3/4 bg-white text-gray-700 p-4">
              <div className="text-right font-bold">
                Insight
                <span className="text-violet-500">Ink</span>
              </div>
              <div className="py-2">
                <h2 className="text-4xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl font-semibold text-violet-500 mb-1">
                  Create your account
                </h2>
              </div>
              <div className="flex justify-center items-center space-x-5 mb-4">
                <div
                  className={`bg-white drop-shadow-md rounded-xl h-20 w-20 flex justify-center items-center flex-col ${
                    selectedOption === "Author"
                      ? "border-violet-500"
                      : "bg-white"
                  }`}
                  onClick={() => handleClick("Author")}
                >
                  <FaPenNib
                    className={`text-lg mb-2 ${
                      selectedOption === "Author"
                        ? "text-violet-500"
                        : "text-gray-500"
                    }`}
                  />
                  <p className="text-xs">Author</p>
                </div>
                <div
                  className={`bg-white drop-shadow-md rounded-xl h-20 w-20 flex justify-center items-center flex-col ${
                    selectedOption === "Publisher"
                      ? "border-violet-500"
                      : "bg-white"
                  }`}
                  onClick={() => handleClick("Publisher")}
                >
                  <FaPrint
                    className={`text-lg mb-2 ${
                      selectedOption === "Publisher"
                        ? "text-violet-500"
                        : "text-gray-500"
                    }`}
                  />
                  <p className="text-xs">Publisher</p>
                </div>
              </div>
              <div className="flex flex-col items-center mb-4 drop-shadow-lg">
                <div className="bg-gray-50 w-52 sm:w-44 md:w-72 lg:w-80 xl:w-96 p-3 mb-3 flex items-center rounded-full">
                  <FaRegUser className="text-gray-400 mr-2" />
                  <input
                    type="username"
                    name="username"
                    placeholder="Enter your name here"
                    className="bg-transparent focus-none outline-none text-sm sm:text-xs md:text-xs lg:text-sm xl:text-sm flex-1"
                    required
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>

                <div className="bg-gray-50 w-52 sm:w-44 md:w-72 lg:w-80 xl:w-96 p-3 mb-3 flex items-center rounded-full">
                  <FaRegEnvelope className="text-gray-400 mr-2" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email here"
                    className="bg-transparent focus-none outline-none text-sm sm:text-xs md:text-xs lg:text-sm xl:text-sm flex-1"
                    required
                    onChange={(e) => setEmailAddress(e.target.value)}
                  />
                </div>

                <div className="bg-gray-50 w-52 sm:w-44 md:w-72 lg:w-80 xl:w-96 p-3 mb-3 flex items-center rounded-full">
                  <MdLockOutline className="text-gray-400 mr-2" />
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter your password here"
                    className="bg-transparent focus-none outline-none text-sm sm:text-xs md:text-xs lg:text-sm xl:text-sm flex-1"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="flex w-52 sm:w-44 md:w-72 lg:w-80 xl:w-96 justify-between mb-1">
                  <label className="text-gray-700 flex items-center text-xs">
                    <input
                      type="checkbox"
                      name="remember"
                      className="mr-1 accent-violet-500"
                    />
                    Remember me
                  </label>
                </div>
              </div>
              <p className="text-xs text-gray-400">
                Or sign in with your social media account
              </p>
              <div className="flex justify-center">
                <a
                  href="a"
                  className="bg-white rounded-full p-3 mx-1 drop-shadow-md"
                >
                  <FaGoogle className="text-sm text-violet-500" />
                </a>
                <a
                  href="a"
                  className="bg-white rounded-full p-3 mx-1 drop-shadow-md"
                >
                  <FaFacebookF className="text-sm text-violet-500" />
                </a>
                <a
                  href="a"
                  className="bg-white rounded-full p-3 mx-1 drop-shadow-md"
                >
                  <FaTwitter className="text-sm text-violet-500" />
                </a>
                <a
                  href="a"
                  className="bg-white rounded-full p-3 mx-1 drop-shadow-md"
                >
                  <FaLinkedinIn className="text-sm text-violet-500" />
                </a>
              </div>
              <button
                disabled={!userName || !emailAddress || !password}
                className="text-white text-md sm:text-xs md:text:sm lg:text-md xl:text:lg border-1 bg-violet-500 border-violet-500 mt-1 rounded-full px-5 py-2 inline-block font-semi-bold hover:bg-white hover:text-violet-500 hover:drop-shadow-xl focus:outline-none focus:border-violet-500 hover:border-violet-500"
                onClick={signUp}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;

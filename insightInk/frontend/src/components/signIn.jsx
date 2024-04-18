import {
  FaGoogle,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaRegEnvelope,
} from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LoginComponent from "./images Components/loginComponent";

function SignIn() {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signIn = async () => {
    const { data } = await axios.post(
      "http://localhost:7000/auth/signIn",
      {
        emailAddress,
        password,
      },
      {
        withCredentials: true,
      }
    );
    if (data.error) {
      return alert("Invalid credentials!");
    }
    window.localStorage.setItem("token", data);
    window.localStorage.setItem("isLoggedIn", true);
    alert("You've logged in successfully!");
    navigate("/dashboard");
  };
  
  const signUpClick = () => {
    navigate("/register");
  };  
  return (
    <>
      <div className="flex m-auto left-0 right-0 top-0 bottom-0 w-screen h-screen">
        <div className="flex m-auto left-0 right-0 top-0 bottom-0 w-full h-5/6 px-4 sm:px-10 md:px-20 lg:px-40 xl:px-48 py-1 text-center">
          <div className="bg-white rounded-2xl shadow-2xl flex w-full h-full">
            <div className="w-3/4 bg-white text-gray-700 p-4 flex-col flex items-center justify-evenly">
              <div className="text-left font-bold flex justify-start items-start">
                Insight
                <span className="text-violet-500">Ink</span>
              </div>
              <div>
                <h2 className="text-4xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl font-semibold text-violet-500 mb-2">
                  Sign in
                </h2>
                <p className="text-md sm:text-xs md:text:sm lg:text-md xl:text:lg text-gray-700 mb-5">
                  Streamline Your Publishing Process, Amplify Your Impact
                </p>
              </div>
              <div className="flex flex-col items-center mb-3 drop-shadow-lg">
                <div className="bg-gray-50 w-52 sm:w-44 md:w-72 lg:w-80 xl:w-96 p-3 mb-3 flex items-center rounded-full">
                  <FaRegEnvelope className="text-gray-400 mr-2" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email here"
                    required
                    className="bg-transparent focus-none outline-none text-sm sm:text-xs md:text-xs lg:text-sm xl:text-sm flex-1"
                    onChange={(event) => {
                      setEmailAddress(event.target.value);
                    }}
                  />
                </div>

                <div className="bg-gray-50 w-52 sm:w-44 md:w-72 lg:w-80 xl:w-96 p-3 mb-4 flex items-center rounded-full">
                  <MdLockOutline className="text-gray-400 mr-2" />
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter your password here"
                    required
                    className="bg-transparent focus-none outline-none text-sm sm:text-xs md:text-xs lg:text-sm xl:text-sm flex-1"
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }}
                  />
                </div>
                <div className="flex w-80 justify-between mt-1">
                  <label className="text-gray-700 flex items-center text-xs">
                    <input
                      type="checkbox"
                      name="remember"
                      className="mr-1 accent-violet-500"
                    />
                    Remember me
                  </label>
                  <a href="a" className="text-xs text-gray-700">
                    Forgot password?
                  </a>
                </div>
              </div>
              <p className="text-xs text-gray-400 mb-4">
                Or with other social platform
              </p>
              <div className="flex justify-center my-4">
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
                disabled={!(emailAddress && password)}
                className="text-white text-md sm:text-xs md:text:sm lg:text-md xl:text:lg border-1 bg-violet-500 border-violet-500 mt-2 rounded-full 
                px-5 py-2 inline-block font-semi-bold hover:bg-white hover:text-violet-500 
                hover:drop-shadow-xl hover:border-violet-500 focus:outline-none"
                onClick={() => {
                  void signIn();
                }}
              >
                Sign In
              </button>
            </div>
            <div className="w-2/3 bg-violet-500 text-white rounded-l-2xl px-5 drop-shadow-xl text-start flex-col flex items-center justify-center">
              <div className="flex items-center justify-center"><LoginComponent /></div>
              <h2 className="text-4xl sm:text-lg md:text-2xl lg:text-2xl xl:text-2xl font-semibold mb-2 text-start">
                Nice to see you again!
              </h2>
              <p className="mb-7 text-md sm:text-xs md:text:sm lg:text-md xl:text:lg text-start">
                Look at what you&apos;ve missed by signing in to your account.
              </p>
              <p className="text-white text-md sm:text-xs md:text:sm lg:text-md xl:text:lg mb-5">Not a member yet?</p>
              <button
                className="text-white text-md sm:text-xs md:text:sm lg:text-md xl:text:lg border-1 border-white bg-violet-500 rounded-full px-5 py-2 inline-block 
                font-semi-bold hover:bg-white hover:border-white hover:text-violet-500 hover:outline-none focus:outline-none"
                onClick={signUpClick}
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

export default SignIn;

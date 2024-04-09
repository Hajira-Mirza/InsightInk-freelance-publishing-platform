import {
  FaGoogle,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaRegEnvelope,
} from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import PropTypes, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

SignIn.propTypes = {
  setSignIn: PropTypes.isRequired,
};

function SignIn() {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signIn = async () => {
    window.localStorage.setItem("token", data.data);
    window.localStorage.setItem("isLoggedIn", true);
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
    alert("You've logged in successfully!");
    navigate("/dashboard");
  };

  const signUpClick = () => {
    navigate("/register");
  };

  return (
    <>
      <div className="flex m-auto left-0 right-0 top-0 bottom-0 w-screen h-screen">
        <div className="flex m-auto left-0 right-0 top-0 bottom-0 w-full h-5/6 px-4 sm:px-10 md:px-20 lg:px-40 py-1 text-center">
          <div className="bg-white rounded-2xl shadow-2xl flex w-full h-full">
            <div className="w-3/4 bg-white text-black p-5">
              <div className="text-left font-bold">
                Insight
                <span className="text-violet-500">Ink</span>
              </div>
              <div className="py-4">
                <h2 className="text-4xl font-bold text-violet-500 mb-2">
                  Sign in
                </h2>
                <p className="text-sm text-gray-400 mb-1 mt-3">
                  Streamline Your Publishing Process, Amplify Your Impact
                </p>
              </div>
              <div className="flex flex-col items-center mb-3 drop-shadow-lg">
                <div className="bg-gray-50 w-80 p-3 mb-4 flex items-center rounded-full">
                  <FaRegEnvelope className="text-gray-400 mr-2" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email here"
                    required
                    className="bg-transparent focus-none outline-none text-sm flex-1"
                    onChange={(event) => {
                      setEmailAddress(event.target.value);
                    }}
                  />
                </div>

                <div className="bg-gray-50 w-80 p-3 mb-4 flex items-center rounded-full">
                  <MdLockOutline className="text-gray-400 mr-2" />
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter your password here"
                    required
                    className="bg-transparent focus-none outline-none text-sm flex-1"
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
              <p className="text-sm text-gray-400 mb-4">
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
                className="text-white border-2 bg-violet-500 border-violet-500 mt-2 rounded-full 
                px-7 py-2 inline-block font-semi-bold hover:bg-white hover:text-violet-500 
                hover:drop-shadow-xl hover:border-violet-500 focus:outline-none"
                onClick={() => {
                  void signIn();
                }}
              >
                Sign In
              </button>
            </div>
            <div className="w-1/2 bg-violet-500 text-white rounded-l-2xl py-36 px-10 drop-shadow-2xl text-start">
              <h2 className="text-4xl font-bold mb-5">
                Nice to see you again!
              </h2>
              <p className="mb-7">
                Look at what you&apos;ve missed by signing in to your account.
              </p>
              <p className="text-white text-sm mb-5">Not a member yet?</p>
              <button
                className="text-white border-2 border-white bg-violet-500 rounded-full px-7 py-2 inline-block 
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

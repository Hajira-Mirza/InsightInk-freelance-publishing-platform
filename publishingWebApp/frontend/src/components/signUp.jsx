import { FaGoogle, FaFacebookF, FaTwitter, FaLinkedinIn, FaRegEnvelope, FaRegUser,} from "react-icons/fa";
import{MdLockOutline} from "react-icons/md";
import PropTypes, { useState } from "react";
import axios from "axios";
SignUp.propTypes = {
  setSignIn: PropTypes.isRequired,
};
function SignUp({ setSignIn }) {
    const [userName, setUserName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");
const signUp = async () => {
    const { data } = await axios.post(
      "http://localhost:7000/user/createUser",
      {
        userName,
        emailAddress,
        password,
      },
      {
        withCredentials: true,
      }
    );
    if (data.error) {
      return alert("Unable to create user");
    }
    alert("Created user successfully");
    return setSignIn(true);
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-full px-50 p-1 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex w-full h-full">
        <div className="w-1/2 bg-violet-500 text-white rounded-r-2xl py-36 px-20 drop-shadow-2xl">
            <h2 className="text-4xl font-bold mb-5">
              Innovate. Collaborate. Publish.
            </h2>
            <p className="mb-7">
            Bringing Authors and Publishers Together, Seamlessly.
            </p>
            <p className="text-white text-sm mb-5">Already a member?</p>
            <button
              className="text-white border-2 bg-violet-500 border-white rounded-full px-12 py-2 inline-block font-semi-bold hover:bg-white hover:text-violet-500 hover:border-white focus:outline-none"
              onClick={() => {
                setSignIn(true);
              }}
            >
              Sign In
            </button>
          </div>
          <div className="w-1/2 bg-white text-black p-5">
            
            <div className="text-right font-bold">
              <span className="text-violet-500">Company</span> Name
            </div>
            <div className="py-3">
              <h2 className="text-4xl font-bold text-violet-500 mb-1">Create your account</h2>
            </div>
            <div className="flex flex-col items-center mb-4 drop-shadow-lg">
            <div className="bg-gray-50 w-80 p-3 mb-3 flex items-center rounded-full">
                    <FaRegUser className="text-gray-400 mr-2"/>
                <input type="username" name="username" placeholder="Enter your name here" className="bg-transparent focus-none outline-none text-sm flex-1" required
                onChange={(e) => {
                    setUserName(e.target.value);
                  }}
                />
                </div>

                <div className="bg-gray-50 w-80 p-3 mb-3 flex items-center rounded-full">
                    <FaRegEnvelope className="text-gray-400 mr-2"/>
                <input type="email" name="email" placeholder="Enter your email here" className="bg-transparent focus-none outline-none text-sm flex-1" required
                onChange={(e) => {
                    setEmailAddress(e.target.value);
                  }}
                />
                </div>

                <div className="bg-gray-50 w-80 p-3 mb-3 flex items-center rounded-full">
                    <MdLockOutline className="text-gray-400 mr-2"/>
                <input type="password" name="password" placeholder="Enter your password here" className="bg-transparent focus-none outline-none text-sm flex-1" required
                onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                </div>
                <div className="flex w-64 justify-between mb-1">
                    <label className="text-gray-700 flex items-center text-xs"><input type="checkbox" name="remember" className="mr-1 accent-violet-500"/>Remember me</label>
                </div>
                
            </div>
            <p className="text-sm text-gray-400 mb-4">Or sign in with your social media account</p>
            <div className="flex justify-center my-4">
              <a href="a" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                <FaGoogle className="text-sm text-violet-500"/>
              </a>
              <a href="a" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                <FaFacebookF className="text-sm text-violet-500"/>
              </a>
              <a href="a" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                <FaTwitter className="text-sm text-violet-500"/>
              </a>
              <a href="a" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                <FaLinkedinIn className="text-sm text-violet-500"/>
              </a>
            </div>
            <button
            disabled={!( userName, emailAddress, password )}
             className="text-white border-2 bg-violet-500 border-violet-500 mt-1 rounded-full 
                px-12 py-2 inline-block font-semi-bold hover:bg-white hover:text-violet-500 
                hover:drop-shadow-xl focus:outline-none focus:border-violet-500 hover:border-violet-500"
                onClick={() => {
                    void signUp();
                  }}
                >
                    Sign Up
                </button>
          </div>
          
        </div>
      </div>
    </>
  );
}
export default SignUp;
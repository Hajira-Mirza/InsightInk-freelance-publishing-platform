import { FaGoogle, FaFacebookF, FaTwitter, FaLinkedinIn, FaRegEnvelope,} from "react-icons/fa";
import{MdLockOutline} from "react-icons/md";
function SignIn() {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-full px-50 p-4 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex w-full h-full">
          <div className="w-1/2 bg-white text-black p-5">
            <div className="text-left font-bold">
              <span className="text-violet-500">Company</span> Name
            </div>
            <div className="py-7">
              <h2 className="text-4xl font-bold text-violet-500 mb-2">Sign in</h2>
              <p className="text-sm text-gray-400 mb-1 mt-4">Transforming Ideas into Bestsellers, One Click at a Time.</p>
            </div>
            <div className="flex flex-col items-center mb-5">
                <div className="bg-gray-100 w-64 p-3 mb-4 flex items-center rounded-full">
                    <FaRegEnvelope className="text-gray-400 mr-2"/>
                <input type="email" name="email" placeholder="Enter your email here" className="bg-transparent focus-none outline-none text-sm flex-1"/>
                </div>

                <div className="bg-gray-100 w-64 p-3 mb-4 flex items-center rounded-full">
                    <MdLockOutline className="text-gray-400 mr-2"/>
                <input type="password" name="password" placeholder="Enter your password here" className="bg-transparent focus-none outline-none text-sm flex-1"/>
                </div>
                <div className="flex w-64 justify-between mt-2">
                    <label className="text-gray-700 flex items-center text-xs"><input type="checkbox" name="remember" className="mr-1"/>Remember me</label>
                    <a href="a" className="text-xs text-gray-700">Forgot password?</a>
                </div>
                
            </div>
            <p className="text-sm text-gray-400 mb-5">Or with other social platform</p>
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
            </div>{/*social accounts*/}
            <a href="a" className="text-white border-2 bg-violet-500 border-violet-500 mt-5 rounded-full 
                px-12 py-2 inline-block font-semi-bold hover:bg-white hover:text-violet-500 hover:drop-shadow-xl">Sign In</a>
          </div>
          {/*signIn*/}
          <div className="w-1/2 bg-violet-500 text-white rounded-l-2xl py-36 px-20 drop-shadow-2xl">
            <h2 className="text-4xl font-bold mb-5">
            Nice to see you again!
            </h2>
            <p className="mb-7">
            Look at what you&apos;ve missed by signing in to your account.
            </p>
            <p className="text-white text-sm mb-5">Not a member yet?</p>
            <button
              className="text-white border-2 border-white bg-violet-500 rounded-full px-12 py-2 inline-block font-semi-bold hover:bg-white hover:border-white hover:text-violet-500 hover:outline-none focus:outline-none"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default SignIn;

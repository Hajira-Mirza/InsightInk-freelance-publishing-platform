import React from "react";
import { useNavigate } from "react-router-dom";

const Failure = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-red-100 border-l-4 border-red-500 text-red-900 p-8 rounded-lg shadow-md">
        <h4 className="font-bold text-xl mb-2">Oops, something went wrong!</h4>
        {/* Failure icon */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mt-4 text-red-500" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM10 9a1 1 0 011 1v4a1 1 0 11-2 0v-4a1 1 0 011-1zm0-5a1 1 0 011 1V7a1 1 0 11-2 0V5a1 1 0 011-1z" clipRule="evenodd" />
        </svg>
      </div>
      <div className="mt-8">
        <a href="/" className="text-blue-500 hover:underline">Back to Home</a>
      </div>
    </div>
  );
};

export default Failure;

import React from 'react';

const Success = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-green-100 border-l-4 border-green-500 text-green-900 p-8 rounded-lg shadow-md">
        <p className="font-bold text-xl mb-2">Payment Successful</p>
        <p>Your payment has been successfully processed.</p>
        {/* Success icon */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mt-4 text-green-500" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM5 9a1 1 0 011-1h1.586l2.707-2.707a1 1 0 111.414 1.414L8.414 9H10a1 1 0 011 1v1a1 1 0 11-2 0V9H6a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      </div>
      <div className="mt-8">
        <a href="/" className="text-blue-500 hover:underline">Back to Home</a>
      </div>
    </div>
  );
};

export default Success;

import { FaCheckCircle } from "react-icons/fa";
function Success() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <div className="flex text-4xl text-green-600 justify-center items-center">
          <FaCheckCircle />
        </div>
        <h2 className="text-2xl font-bold text-green-600 mb-4">
          Payment Successful
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          Your payment has been processed successfully.
        </p>

        <a
          href="/dashboard"
          className="inline-block bg-white hover:bg-violet-500 border-2 border-violet-500 text-violet-500 hover:text-white focus:text-white font-bold py-2 px-6 rounded-full transition-colors"
        >
          Go to Dashboard Page
        </a>
      </div>
    </div>
  );
}

export default Success;

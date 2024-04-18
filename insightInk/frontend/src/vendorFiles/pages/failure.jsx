import { FaExclamationTriangle } from "react-icons/fa";
function Failure() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <div className="flex text-4xl text-red-600 justify-center items-center">
          <FaExclamationTriangle />
        </div>
        <h2 className="text-2xl font-bold text-red-600 mb-4">
          Oops, something went wrong!
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          We&apos;re sorry, but there was an issue processing your payment.
        </p>

        <a
          href="/dashboard"
          className="inline-block bg-white hover:bg-violet-500 border-2 border-violet-500 text-violet-500 hover:text-white focus:text-white font-bold py-2 px-6 rounded-full transition-colors"
        >
          Go to Dashboard
        </a>
      </div>
    </div>
  );
}

export default Failure;

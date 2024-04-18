import { LuBan } from "react-icons/lu";
function PaymentCancelled() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <LuBan />
        <h1 className="text-3xl font-semibold text-gray-900 mb-2">
          Payment Cancelled
        </h1>
        <p className="text-lg text-gray-600 mb-4">
          Your payment has been cancelled.
        </p>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          onClick={() => {
            // Redirect to another page or perform an action
          }}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default PaymentCancelled;

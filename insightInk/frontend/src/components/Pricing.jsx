import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Pricing() {
  const navigate = useNavigate();
  const [selectedFrequency, setSelectedFrequency] = useState("monthly");

  const handleFrequencyChange = (frequency) => {
    setSelectedFrequency(frequency);
  };
  
  const handlePlansButton = () => {
    alert("You need to sign up first.");
    navigate("/register");
  };
 
  const pricingTiers = [
    {
      planId: 1,
      planName: "Essential Plan",
      monthlyPrice: 10,
      yearlyPrice: 100,
      features: [
        "Limited access",
        "Basic analytics",
      ],
    },
    {
      planId: 2,
      planName: "Premium Plan",
      monthlyPrice: 20,
      yearlyPrice: 200,
      features: [
        "Full access",
        "Comprehensive analytics",
      ],
    },
  ];
  return (
    <>
      <div className="flex justify-center mb-7">
        <button
          className={`mr-4 px-5 py-2 rounded-full drop-shadow-md ${
            selectedFrequency === "monthly"
              ? "bg-violet-500 text-white"
              : "bg-gray-50 text-gray-700 drop-shadow-md"
          }`}
          onClick={() => handleFrequencyChange("monthly")}
        >
          Monthly
        </button>
        <button
          className={`px-5 py-2 rounded-full drop-shadow-md ${
            selectedFrequency === "yearly"
              ? "bg-violet-500 text-white"
              : "bg-gray-50 text-gray-700 drop-shadow-md"
          }`}
          onClick={() => handleFrequencyChange("yearly")}
        >
          Yearly
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
        {pricingTiers.map((tier) => (
          <div
            key={tier.id}
            className="bg-gray-50 p-6 rounded-lg shadow-lg text-center text-gray-700 pb-7"
          >
            <h2 className="text-xl font-bold mb-2">{tier.planName}</h2>
            <p className="text-2xl font-bold mb-4">
              $
              {selectedFrequency === "monthly"
                ? tier.monthlyPrice
                : tier.yearlyPrice}
              <span className="text-base">/{selectedFrequency}</span>
            </p>
            <ul className="text-left mb-4">
              {tier.features.map((feature, index) => (
                <li key={index} className="mb-2">
                  <svg
                    className="w-6 h-6 inline-block mr-2 text-violet-500"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <button className="bg-violet-500 text-white px-4 py-2 rounded-full hover:bg-violet-600 transition-colors"
            onClick={ handlePlansButton }
            >
              Select Plan
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Pricing;

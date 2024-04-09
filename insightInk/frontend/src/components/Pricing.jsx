import { useState } from "react";
function Pricing() {
  const [selectedFrequency, setSelectedFrequency] = useState("monthly");

  const handleFrequencyChange = (frequency) => {
    setSelectedFrequency(frequency);
  };
  const pricingTiers = [
    {
      id: 1,
      name: "Basic Plan",
      monthlyPrice: 10,
      yearlyPrice: 100,
      features: [
        "Access to publishing tools",
        "Basic analytics",
        "Limited support",
      ],
    },
    {
      id: 2,
      name: "Pro Plan",
      monthlyPrice: 20,
      yearlyPrice: 200,
      features: [
        "Advanced publishing tools",
        "Comprehensive analytics",
        "Priority support",
      ],
    },
    {
      id: 3,
      name: "Enterprise Plan",
      monthlyPrice: 30,
      yearlyPrice: 300,
      features: [
        "Custom publishing solutions",
        "Dedicated account manager",
        "24/7 premium support",
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
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {pricingTiers.map((tier) => (
          <div
            key={tier.id}
            className="bg-gray-50 p-6 rounded-lg shadow-lg text-center text-gray-700 pb-7"
          >
            <h2 className="text-xl font-bold mb-2">{tier.name}</h2>
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
            <button className="bg-violet-500 text-white px-4 py-2 rounded hover:bg-violet-600 transition-colors">
              Select Plan
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Pricing;

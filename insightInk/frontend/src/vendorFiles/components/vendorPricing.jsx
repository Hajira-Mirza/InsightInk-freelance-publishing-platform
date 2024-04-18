import { useState, useEffect } from "react";
import axios from "axios";

function VendorPricing() {
  const [selectedFrequency, setSelectedFrequency] = useState(
    localStorage.getItem("selectedFrequency") || "month"
  );
  const [selectedPlanId, setSelectedPlanId] = useState(
    localStorage.getItem("selectedPlanId") || null
  );

  useEffect(() => {
    localStorage.setItem("selectedFrequency", selectedFrequency);
    localStorage.setItem("selectedPlanId", selectedPlanId);
  }, [selectedFrequency, selectedPlanId]);

  const handleFrequencyChange = (frequency) => {
    setSelectedFrequency(frequency);
  };

  const handlePlanSelection = async (tier) => {
    try {
      let newIsActive = !tier.isActive;
      if (!tier.isActive) {
        newIsActive = true;
      } else {
        newIsActive = false;
      }

      let response;
      if (tier.isActive) {
        response = await axios.put(
          `http://localhost:7000/plan/updatePlan/${tier.planId}`,
          {
            planName: tier.planName,
            planPrice: tier.price,
            planInterval: tier.interval,
            isActive: newIsActive.toString(),
          },
          {
            withCredentials: true,
          }
        );
      } else {
        response = await axios.post(
          "http://localhost:7000/plan/createPlan",
          {
            planName: tier.planName,
            planPrice: tier.price,
            planInterval: tier.interval,
            isActive: newIsActive.toString(),
          },
          {
            withCredentials: true,
          }
        );
      }

      if (response.data.error) {
        return alert("Unable to select plan");
      }

      setSelectedPlanId(newIsActive ? tier.planId : null);

      alert("You're being redirected to the checkout page");
      window.location.href = response.data.response;
    } catch (error) {
      console.error("Error selecting plan:", error);
      alert("An error occurred while selecting the plan");
    }
  };

  // Function to generate unique IDs for pricing tiers
  const generateUniqueId = (planName, interval) => {
    return `${planName.toLowerCase()}-${interval}`;
  };
  const pricingTiers = [
    {
      planId: generateUniqueId("Essential", "monthly"),
      planName: "Essential Plan",
      price: "10",
      interval: "month",
      isActive:
        localStorage.getItem("selectedPlanId") ===
        generateUniqueId("Essential", "monthly")
          ? true
          : false,
      features: ["Limited access", "Basic analytics"],
    },
    {
      planId: generateUniqueId("Essential", "yearly"),
      planName: "Essential Plan",
      price: "100",
      interval: "year",
      isActive:
        localStorage.getItem("selectedPlanId") ===
        generateUniqueId("Essential", "yearly")
          ? true
          : false,
      features: ["Limited access", "Basic analytics"],
    },
    {
      planId: generateUniqueId("Premium", "monthly"),
      planName: "Premium Plan",
      price: "20",
      interval: "month",
      isActive:
        localStorage.getItem("selectedPlanId") ===
        generateUniqueId("Premium", "monthly")
          ? true
          : false,
      features: ["Full access", "Comprehensive analytics"],
    },
    {
      planId: generateUniqueId("Premium", "yearly"),
      planName: "Premium Plan",
      price: "200",
      interval: "year",
      isActive:
        localStorage.getItem("selectedPlanId") ===
        generateUniqueId("Premium", "yearly")
          ? true
          : false,
      features: ["Full access", "Comprehensive analytics"],
    },
  ];
  const filteredTiers = pricingTiers.filter(
    (tier) => tier.interval === selectedFrequency
  );

  return (
    <>
      <div className="flex justify-center mb-7">
        <button
          className={`mr-4 px-5 py-2 rounded-full drop-shadow-md ${
            selectedFrequency === "month"
              ? "bg-violet-500 text-white"
              : "bg-gray-50 text-gray-700 drop-shadow-md"
          }`}
          onClick={() => handleFrequencyChange("month")}
        >
          Monthly
        </button>
        <button
          className={`px-5 py-2 rounded-full drop-shadow-md ${
            selectedFrequency === "year"
              ? "bg-violet-500 text-white"
              : "bg-gray-50 text-gray-700 drop-shadow-md"
          }`}
          onClick={() => handleFrequencyChange("year")}
        >
          Yearly
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-7">
        {filteredTiers.map((tier) => (
          <div
            key={tier.planId}
            className={`bg-gray-50 p-6 rounded-lg shadow-lg text-center text-gray-700 pb-7 ${
              selectedPlanId === tier.planId ? "border-2 border-blue-500" : ""
            }`}
          >
            <h2 className="text-xl font-bold mb-2">{tier.planName}</h2>
            <p className="text-2xl font-bold mb-4">
              ${tier.price}
              <span className="text-base">/{tier.interval}</span>
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
            <button
              className="bg-violet-500 text-white px-4 py-2 rounded-full hover:bg-violet-600 transition-colors"
              onClick={() => handlePlanSelection(tier)}
              disabled={tier.isActive}
            >
              {tier.isActive ? "Selected" : "Select Plan"}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default VendorPricing;


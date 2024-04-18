import Sidebar from "../components/sidebar";
import VendorPricing from "../components/vendorPricing";

function UpgradePlan() {
  return (
    <>
      <div className="h-screen w-screen flex">
        <div>
          <Sidebar />
        </div>
        <div className="bg-white w-full overflow-auto flex justify-center items-center">
  <div className="flex-col sm:m-3 md:w-full lg:w-full xl:w-full 2xl:w-full h-full">
            <div className="flex flex-col justify-start items-start"><h1 className="text-gray-700 text-4xl font-semibold p-3">Dashboard</h1>
          <p className="text-gray-700 mb-7 text-start p-3">
            Unlock your full potential with our flexible subscription plans.
            Whether you&apos;re an aspiring author or a seasoned publisher, we
            have a plan tailored to meet your needs.
          </p></div>
          <div className="flex flex-col justify-center items-center"><VendorPricing /></div>
          </div>
          </div>
      </div>
    </>
  );
}

export default UpgradePlan;

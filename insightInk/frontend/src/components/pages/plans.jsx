import Navbar from "../header/navbar";
import Pricing from "../Pricing";
import Footer from "../footer/footer";

const Plans = () => {
  return (
    <>
    <Navbar />
      <div className="w-screen min-h-screen bg-white flex flex-col justify-start items-center">
        <div className="h-24 sm:h-40 w-full bg-violet-500 flex justify-center items-center sm:w-full">
          <h1 className="text-white text-3xl">Plans</h1>
        </div>
        <div className="bg-white py-7 flex flex-col items-center w-full h-full p-7">
          <h1 className="text-3xl font-semibold text-center mt-8 mb-4 text-gray-700">
            Choose Your <span className="text-violet-500">Plan</span>
          </h1>
          <p className="text-gray-700 mb-8 text-center">
            Unlock your full potential with our flexible subscription plans.
            Whether you&apos;re an aspiring author or a seasoned publisher, we
            have a plan tailored to meet your needs.
          </p>
          <Pricing />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Plans;

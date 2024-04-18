import { useNavigate } from "react-router-dom";
import Component4 from "../images Components/component4";
import Component5 from "../images Components/component5";
import MyComponent1 from "../images Components/myComponent1";
import Footer from "../footer/footer";
import Testimonials from "../testimonials";
import Component2 from "../images Components/component2";
import Navbar from "../header/navbar";

function Home() {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/register");
  };
  return (
    <>
      <Navbar />
      <div className="flex flex-col sm:flex-row items-center justify-between min-h-screen bg-white py-7">
        <div className="w-full sm:w-1/2 px-6 sm:px-12 lg:px-20 order-2 sm:order-1">
          <h1 className="text-gray-700 text-4xl font-semibold mb-6">
            Your <span className="text-violet-500">Ultimate Destination</span>{" "}
            For Authors And Publishers Under One Roof!
          </h1>
          <p className="text-gray-700 mb-8">
            Whether you&apos;re an aspiring author or an established publisher,
            we are your gateway to success in the dynamic world of publishing.
            Join us today and embark on your journey to literary excellence!
          </p>
          <button
            className="text-white border-2 border-white bg-violet-500 rounded-full px-7 py-3 font-semibold hover:bg-white hover:text-violet-500 hover:border-violet-500 transition: all"
            onClick={ handleSignUp }
          >
            Get started
          </button>
        </div>
        <div className="w-full sm:w-1/2 order-1 sm:order-2">
          <div className="h-full">
            <Component4 />
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-between min-h-screen bg-white py-7">
        <div className="w-full sm:w-1/2 px-6 sm:px-12 lg:px-20 order-2 sm:order-1 lg:order-2">
          <h1 className="text-gray-700 text-3xl font-semibold mb-6">
            Who <span className="text-violet-500">We</span> Are
          </h1>
          <p className="text-gray-700 mb-5">
            We are a pioneering web application dedicated to revolutionizing the
            publishing industry. InsightInk combines
            authors and publishers in one place where they can:{" "}
            <span className="font-semibold hover:text-violet-500"> Discover</span>
            ,
            <span className="font-semibold hover:text-violet-500"> Connect</span>
            ,
            <span className="font-semibold hover:text-violet-500"> Collaborate </span>
            .
          </p>
          <a href="/about" className="text-violet-500 font-semibold hover:text-violet-500 focus:text-violet-500 transition-all hover:underline"
            
          >
            Click here to learn more...
          </a>
        </div>
        <div className="w-full sm:w-1/2 p-7">
          <div className="h-full">
            <Component2 />
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-between min-h-screen bg-white py-7">
        <div className="w-full sm:w-1/2 px-6 sm:px-12 lg:px-20 order-2 sm:order-1">
          <h1 className="text-gray-700 text-3xl font-semibold mb-6">
            For <span className="text-violet-500">Authors</span>
          </h1>
          <p className="text-gray-700 mb-8">
            Are you ready to share your stories with the world? Our platform
            provides you with the tools and resources you need to bring your
            literary vision to life.
          </p>
          <div className="flex my-3 text-sm items-center">
            <p className="border-2 rounded-full p-3 h-8 w-8 text-gray-700 flex justify-center items-center">
              1
            </p>
            <p className="text-gray-700 ml-3">
              <span className="font-semibold">Personalized Profile:</span> Build
              your profile showcasing your work to attract publishers and get
              recognition
            </p>
          </div>
          <div className="flex my-3 text-sm items-center">
            <p className="border-2 rounded-full p-3 h-8 w-8 text-gray-700 flex justify-center items-center">
              2
            </p>
            <p className="text-gray-700 ml-3">
              <span className="font-semibold">Affordable Options:</span> Find
              pricing plans that won&apos;t break the bank, so you can focus on
              your passion without worrying about cost.
            </p>
          </div>
          <div className="flex my-3 text-sm items-center">
            <p className="border-2 rounded-full p-3 h-8 w-8 text-gray-700 flex justify-center items-center">
              3
            </p>
            <p className="text-gray-700 ml-3">
              <span className="font-semibold">Get Feedback:</span> Share your
              work with others and get friendly feedback to help you improve, no
              pressure.
            </p>
          </div>
        </div>

        <div className="w-full sm:w-1/2 p-7 order-1 sm:order-2">
          <div className="h-full">
            <MyComponent1 />
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-between min-h-screen bg-white py-7">
        <div className="w-full sm:w-1/2 px-6 sm:px-12 lg:px-20 order-2 sm:order-1 lg:order-2">
          <h1 className="text-gray-700 text-3xl font-semibold mb-6">
            For <span className="text-violet-500">Publishers</span>
          </h1>
          <p className="text-gray-700 mb-8">
            Are you on the lookout for fresh talent and captivating stories? Our
            platform simplifies the process of discovering and acquiring
            manuscripts.
          </p>
          <div className="flex my-3 text-sm items-center">
            <p className="border-2 rounded-full p-3 h-8 w-8 text-gray-700 flex justify-center items-center">
              1
            </p>
            <p className="text-gray-700 ml-3">
              <span className="font-semibold">Personalized Profile:</span>{" "}
              Easily create an attractive profile for your publishing business
            </p>
          </div>
          <div className="flex my-3 text-sm items-center">
            <p className="border-2 rounded-full p-3 h-8 w-8 text-gray-700 flex justify-center items-center">
              2
            </p>
            <p className="text-gray-700 ml-3">
              <span className="font-semibold">Talent Discovery:</span> Find
              creatives that fit your preferences effortlessly.
            </p>
          </div>
          <div className="flex my-3 text-sm items-center">
            <p className="border-2 rounded-full p-3 h-8 w-8 text-gray-700 flex justify-center items-center">
              3
            </p>
            <p className="text-gray-700 ml-3">
              <span className="font-semibold">Tailored Solutions:</span> Select
              the package that best aligns with your budget and requirements,
              ensuring you get the most value for your investment.
            </p>
          </div>
        </div>
        <div className="w-full sm:w-1/2 p-7">
          <div className="h-full">
            <Component5 />
          </div>
        </div>
      </div>
      <Testimonials />

      <Footer />
    </>
  );
}

export default Home;

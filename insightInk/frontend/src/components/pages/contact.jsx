import {
  FaFacebookF,
  FaTwitter,
  FaMobileAlt,
  FaEnvelopeOpenText,
  FaMapMarkerAlt,
  FaGoogle,
  FaLinkedinIn,
} from "react-icons/fa";
import Footer from "../footer/footer";
import ContactForm from "../contactForm/contactForm";
import Navbar from "../header/navbar";

function Contact() {
  return (
    <>
    <Navbar />
      <div className="w-full min-h-screen bg-white flex flex-col justify-center items-center">
        <div className="h-24 sm:h-40 w-full bg-violet-500 flex justify-center items-center sm:w-full">
          <h1 className="text-white text-3xl">Contact</h1>
        </div>

        <div className="bg-white py-7 flex flex-col items-center w-full">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-7">
            <div className="bg-gray-50 rounded-xl p-4 flex items-center flex-col drop-shadow-lg">
              <div className="mb-2">
                <FaMobileAlt className="text-violet-500 h-8 w-8" />
              </div>
              <p className="text-gray-700 text-center">+454484584848</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 flex items-center flex-col drop-shadow-lg">
              <div className="mb-2">
                <FaEnvelopeOpenText className="text-violet-500 h-8 w-8" />
              </div>
              <p className="text-gray-700 text-center">example1@gmail.com</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 flex items-center flex-col drop-shadow-lg">
              <div className="mb-2">
                <FaMapMarkerAlt className="text-violet-500 h-8 w-8" />
              </div>
              <p className="text-gray-700 text-center">
                123 street, wiw38337-5565 apple-slot
              </p>
            </div>
          </div>
          <h1 className="text-3xl text-gray-700 mb-4">
            Write <span className="text-violet-500">To Us</span>
          </h1>
          <p className="text-gray-700 text-center">
            Have questions or feedback? Contact
            us using the information below, and our team will be happy to assist
            you.
          </p>
          
          <div className="flex justify-center items-center py-7">
            <ContactForm />
          </div>
          <h1 className="text-3xl text-gray-700 mb-6">
            Connect <span className="text-violet-500">With Us</span> On
          </h1>
          <div className="flex justify-center mb-6">
            <a
              href="#"
              className="bg-white border-gray-200 rounded-full p-4 mx-5 shadow-lg transition-colors duration-300 hover:bg-violet-500"
            >
              <FaGoogle className="text-violet-500 text-2xl hover:text-white" />
            </a>
            <a
              href="#"
              className="bg-white rounded-full p-4 mx-5 shadow-lg transition-colors duration-300 hover:bg-violet-500"
            >
              <FaFacebookF className="text-violet-500 text-2xl hover:text-white" />
            </a>
            <a
              href="#"
              className="bg-white rounded-full p-4 mx-5 shadow-lg transition-colors duration-300 hover:bg-violet-500"
            >
              <FaTwitter className="text-violet-500 text-2xl hover:text-white" />
            </a>
            <a
              href="#"
              className="bg-white rounded-full p-4 mx-5 shadow-lg transition-colors duration-300 hover:bg-violet-500"
            >
              <FaLinkedinIn className="text-violet-500 text-2xl hover:text-white" />
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Contact;


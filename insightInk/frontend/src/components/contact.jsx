import { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaMobileAlt,
  FaEnvelopeOpenText,
  FaMapMarkerAlt,
  FaGoogle,
  FaLinkedinIn,
} from "react-icons/fa";
import Navbar from "./header/navbar";
import { Link } from "react-router-dom";
import ContactImg from "./contactImg";

function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a6d9de53-9255-483d-85f1-933a2178d960");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      <Navbar />
      <form onSubmit={onSubmit}>
        <div className="w-screen h-screen bg-white flex justify-center items-start">
          <div className="h-4/5 w-full bg-white">
            <div className="h-40 w-full bg-violet-500 flex justify-center">
              <h1 className="text-white flex items-center justify-center text-3xl">
                Contact
              </h1>
            </div>

            <div className="w-full h-4/5 bg-white flex m-auto left-0 right-0 top-0 bottom-0">
              <div className="bg-white h-full w-4/5 flex m-auto left-0 right-0 top-0 bottom-0">
                <div className="h-full w-full bg-white justify-center">
                  <div className="w-full h-52 bg-white flex items-center space-x-5 justify-center">
                    <div className="bg-gray-50 h-40 w-56 rounded-2xl drop-shadow-xl">
                      <a href="a" className="flex justify-center py-5">
                        <FaMobileAlt className="h-10 w-10 text-violet-500" />
                      </a>
                      <p className="text-gray-700 items-center justify-center flex text-center  p-2">
                        +454484584848
                      </p>
                    </div>
                    <div className="bg-gray-50 h-40 w-56 rounded-2xl drop-shadow-xl">
                      <a href="a" className="flex justify-center py-5">
                        <FaEnvelopeOpenText className="h-10 w-10 text-violet-500" />
                      </a>
                      <p className="text-gray-700 items-center justify-center flex text-center  p-2">
                        example1@gmail.com
                      </p>
                    </div>
                    <div className="bg-gray-50 h-40 w-56 rounded-2xl drop-shadow-xl">
                      <a href="a" className="flex justify-center py-5">
                        <FaMapMarkerAlt className="h-10 w-10 text-violet-500" />
                      </a>
                      <p className="text-gray-700 items-center justify-center flex text-center p-2">
                        123 street, wiw38337-5565 apple-slot
                      </p>
                    </div>
                  </div>
                  <h1 className="text-gray-700 text-center p-2 text-3xl">
                    Write <span className="text-violet-500">To Us</span>
                  </h1>
                  <p className="text-gray-700 text-center flex-1 mb-5">
                    Have questions or feedback? We&apos;d love to hear from you!
                    Contact us using the information below, and our team will be
                    happy to assist you.
                  </p>
                  <div className="bg-white w-3/4 h-72 max-h-98 max-w-98 rounded-2xl shadow-2xl m-auto left-0 right-0 top-0 bottom-0 flex">
                    <div className="h-full w-full flex flex-col">
                      <div className="h-full w-full flex rounded-2xl">
                        <div className="h-full w-1/2 bg-violet-500 rounded-l-2xl flex">
                          <div className="h-full w-full items-center justify-center flex">
                            <ContactImg />
                          </div>
                        </div>
                        <div className="h-72 w-1/2 p-7 bg-white rounded-r-xl flex flex-col justify-center">
                          <div className="bg-gray-50 w-full p-2 mb-4 flex items-center rounded-xl text-gray-700 drop-shadow-md">
                            <input
                              type="text"
                              name="name"
                              placeholder="Your full name"
                              required
                              className="bg-transparent focus-none outline-none text-sm flex-1"
                            />
                          </div>

                          <div className="bg-gray-50 w-full p-2 mb-4 flex items-center rounded-xl text-gray-700 drop-shadow-md">
                            <input
                              type="text"
                              name="email"
                              placeholder="Your email here"
                              required
                              className="bg-transparent focus-none outline-none text-sm flex-1"
                            />
                          </div>

                          <textarea
                            className="textarea textarea bg-gray-50 w-full p-2 mb-4 flex items-start rounded-xl text-gray-700 outline-none text-sm drop-shadow-md"
                            name="message"
                            placeholder="Your message here"
                            required
                          />
                          <button
                            className="text-white border-2 border-white bg-violet-500 rounded-xl px-7 inline-block 
                font-semi-bold hover:bg-white hover:text-violet-500 hover:outline-none focus:outline-none text-sm hover:border-violet-500"
                            type="Submit"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-48 bg-white">
              <div className="bg-white h-20 w-96 flex m-auto left-0 right-0 top-0 bottom-0">
                <h1 className="text-3xl text-gray-700 m-auto left-0 right-0 top-0 bottom-0 flex">
                  <span className="text-violet-500">Connect&nbsp;</span>{" "}
                  With Us On
                </h1>
              </div>
              <div className="flex justify-center my-2">
                <a
                  href="a"
                  className="bg-white border-gray-200 rounded-full p-4 mx-5 drop-shadow-lg"
                >
                  <FaGoogle className="text-2xl text-violet-500" />
                </a>
                <a
                  href="a"
                  className="bg-white border-gray-200 rounded-full p-4 mx-5 drop-shadow-lg"
                >
                  <FaFacebookF className="text-2xl text-violet-500" />
                </a>
                <a
                  href="a"
                  className="bg-white border-gray-200 rounded-full p-4 mx-5 drop-shadow-lg"
                >
                  <FaTwitter className="text-2xl text-violet-500" />
                </a>
                <a
                  href="a"
                  className="bg-white border-gray-200 rounded-full p-4 mx-5 drop-shadow-lg"
                >
                  <FaLinkedinIn className="text-2xl text-violet-500" />
                </a>
              </div>
            </div>
            <div>
              <footer
                style={{
                  bottom: "0",
                  left: "0",
                  right: "0",
                  background: "#8b5cf6",
                  height: "auto",
                  width: "100vw",
                  paddingTop: "10px",
                  color: "#fff",
                }}
              >
                <div
                  className="footer-content"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    textAlign: "center",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "2.1rem",
                      fontWeight: "300",
                      textTransform: "capitalize",
                      lineHeight: "3rem",
                    }}
                  >
                    InsightInk
                  </h3>
                  <p
                    style={{
                      maxWidth: "900px",
                      margin: "10px auto",
                      lineHeight: "25px",
                      fontSize: "16px",
                      color: "#fff",
                    }}
                  >
                    Unlock the power of collaboration and creativity with
                    InsightInk. Whether you&apos;re an aspiring author with a
                    story to tell or a seasoned publisher seeking fresh talent,
                    our platform is your gateway to success in the dynamic world
                    of publishing.
                  </p>
                  <ul
                    className="socials"
                    style={{
                      listStyle: "none",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "1rem 0 1rem 0",
                    }}
                  >
                    <a href="a" className="px-7">
                      <FaFacebookF className="text-lg text-white" />
                    </a>
                    <a href="a" className="px-7">
                      <FaTwitter className="text-lg text-white" />
                    </a>
                    <a href="a" className="px-7">
                      <FaInstagram className="text-lg text-white" />
                    </a>
                    <a href="a" className="px-7">
                      <FaYoutube className="text-lg text-white" />
                    </a>
                  </ul>
                  <ul
                    className="menu"
                    style={{
                      position: "relative",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      margin: "5px 0",
                      flexWrap: "wrap",
                    }}
                  >
                    <li className="menu__item">
                      <Link
                        className="menu__link"
                        href="#"
                        style={{
                          fontSize: "1rem",
                          color: "#fff",
                          margin: "0 40px",
                          display: "inline-block",
                          transition: "0.5s",
                          textDecoration: "none",
                          opacity: "100",
                          fontWeight: "400",
                        }}
                        to="/"
                      >
                        Home
                      </Link>
                    </li>
                    <li className="menu__item">
                      <Link
                        className="menu__link"
                        style={{
                          fontSize: "1rem",
                          color: "#fff",
                          margin: "0 40px",
                          display: "inline-block",
                          transition: "0.5s",
                          textDecoration: "none",
                          opacity: "100",
                          fontWeight: "400",
                        }}
                        to="/about"
                      >
                        About
                      </Link>
                    </li>
                    <li className="menu__item">
                      <Link
                        className="menu__link"
                        href="#"
                        style={{
                          fontSize: "1rem",
                          color: "#fff",
                          margin: "0 40px",
                          display: "inline-block",
                          transition: "0.5s",
                          textDecoration: "none",
                          opacity: "100",
                          fontWeight: "400",
                        }}
                        to="/plans"
                      >
                        Plans
                      </Link>
                    </li>
                    <li className="menu__item">
                      <Link
                        className="menu__link"
                        href="#"
                        style={{
                          fontSize: "1rem",
                          color: "#fff",
                          margin: "0 40px",
                          display: "inline-block",
                          transition: "0.5s",
                          textDecoration: "none",
                          opacity: "100",
                          fontWeight: "400",
                        }}
                        to="/contact"
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                  <p
                    style={{
                      color: "#fff",
                      margin: "15px 0 10px 0",
                      fontSize: "1rem",
                      fontWeight: "300",
                    }}
                  />
                </div>
                <div
                  className="footer-bottom"
                  style={{
                    background: "#fff",
                    width: "100vw",
                    padding: "5px",
                    paddingBottom: "5px",
                    textAlign: "center",
                  }}
                >
                  <p
                    style={{
                      float: "center",
                      fontSize: "14px",
                      wordSpacing: "2px",
                      textTransform: "capitalize",
                    }}
                  >
                    <p
                      style={{
                        color: "#2F2F2F",
                        fontSize: "10px",
                        textDecoration: "none",
                      }}
                    >
                      &copy;2024 InsightInk. All Rights Reserved
                    </p>
                  </p>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </form>
      <span>{result}</span>
    </>
  );
}

export default Contact;

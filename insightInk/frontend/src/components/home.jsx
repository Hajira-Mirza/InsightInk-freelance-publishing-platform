import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./header/navbar";
import Component4 from "./component4";
import Component5 from "./component5";
import MyComponent1 from "./myComponent1";
import Testimonials from "./testimonials";
//import Footer from './footer/footer' // Adjust the import path as needed

function Home() {
  const navigate = useNavigate();

  const btn1 = () => {
    navigate("/register");
  };

  return (
    <>
      <Navbar />
      <div className="w-screen h-screen bg-white flex justify-center items-start">
        <div className="w-full h-4/5 bg-white">
          <div className="h-full w-4/5 flex m-auto left-0 right-0 top-0 bottom-0">
            {/* this is text container */}
            <div className="w-1/2 h-full bg-white justify-center items-start text-start flex flex-col">
              <h1 className="text-gray-700 text-4xl px-6 py-5 text-start font-semibold">
                Your{" "}
                <span className="text-violet-500">Ultimate Destination</span>{" "}
                For Authors And Publishers Under One Roof!
              </h1>
              <p className="text-gray-700 px-6 py-7 text-start">
                Whether you&apos;re an aspiring author or an established
                publisher, we are your gateway to success in the dynamic world
                of publishing. Join us today and embark on your journey to
                literary excellence!
              </p>
              <div className="flex justify-end items-end space-x-3 text-end">
                <button
                  className="text-white border-2 border-white bg-violet-500 rounded-full px-8 inline-block 
                font-semi-bold hover:bg-white hover:text-violet-500 hover:outline-none focus:outline-none text-md hover:border-violet-500 ml-4"
                  type="Submit"
                  onClick={btn1}
                >
                  Get started
                </button>
              </div>
            </div>

            <div className="w-1/2 h-full bg-white items-center justify-end flex">
              <div className="h-full w-full items-center justify-end flex">
                <Component4 />
              </div>
            </div>
          </div>

          <div className="w-full h-4/5 bg-white">
            <div className="bg-white h-full w-4/5 flex m-auto left-0 right-0 top-0 bottom-0">
              <div className="h-full w-1/2 bg-white items-center justify-start flex">
                <MyComponent1 />
              </div>
              
              <div className="h-full w-1/2 bg-white justify-center items-center flex">
                <div className="p-6">
                  <h1 className="text-gray-700 text-3xl font-semibold my-3">
                    For <span className="text-violet-500">Authors</span>
                  </h1>
                  <p className="text-gray-700">
                    Are you ready to share your stories with the world? Our
                    platform provides you with the tools and resources you need
                    to bring your literary vision to life. Here&apos;s what you
                    can expect:
                  </p>
                  <div className="flex my-3 text-sm items-center">
                    <p className="border-2 rounded-full p-3 h-8 w-8 text-gray-700 flex justify-center items-center">
                      1
                    </p>
                    <p className="text-gray-700 ml-3">
                      Personalized Profile: Build your profile showcasing your
                      work to attract publishers and get recognition
                    </p>
                  </div>
                  <div className="flex my-3 text-sm items-center">
                    <p className="border-2 rounded-full p-3 h-8 w-8 text-gray-700 flex justify-center items-center">
                      2
                    </p>
                    <p className="text-gray-700 ml-3">
                      Affordable Options: Find pricing plans that won&apos;t
                      break the bank, so you can focus on your passion without
                      worrying about cost.
                    </p>
                  </div>
                  <div className="flex my-3 text-sm items-center">
                    <p className="border-2 rounded-full p-3 h-8 w-8 text-gray-700 flex justify-center items-center">
                      3
                    </p>
                    <p className="text-gray-700 ml-3">
                      Get Feedback: Share your work with others and get friendly
                      feedback to help you improve, no pressure.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-4/5 bg-white">
            <div className="bg-white h-full w-4/5 flex m-auto left-0 right-0 top-0 bottom-0">
              <div className="h-full w-1/2 bg-white justify-center items-center flex">
                <div className="p-6">
                  <h1 className="text-gray-700 text-3xl font-semibold my-3">
                    For <span className="text-violet-500">Publishers</span>
                  </h1>
                  <p className="text-gray-700">
                    Are you on the lookout for fresh talent and captivating
                    stories? Our platform simplifies the process of discovering
                    and acquiring manuscripts. Here&apos;s how we can assist
                    you:
                  </p>
                  <div className="flex my-3 text-sm items-center">
                    <p className="border-2 rounded-full p-3 h-8 w-8 text-gray-700 flex justify-center items-center">
                      1
                    </p>
                    <p className="text-gray-700 ml-3">
                      Personalized Profile: Easily create an attractive profile
                      for your publishing business
                    </p>
                  </div>
                  <div className="flex my-3 text-sm items-center">
                    <p className="border-2 rounded-full p-3 h-8 w-8 text-gray-700 flex justify-center items-center">
                      2
                    </p>
                    <p className="text-gray-700 ml-3">
                      Talent Discovery: Find creatives that fit your preferences
                      effortlessly.
                    </p>
                  </div>
                  <div className="flex my-3 text-sm items-center">
                    <p className="border-2 rounded-full p-3 h-8 w-8 text-gray-700 flex justify-center items-center">
                      3
                    </p>
                    <p className="text-gray-700 ml-3">
                      Tailored Solutions: Select the package that best aligns
                      with your budget and requirements, ensuring you get the
                      most value for your investment.
                    </p>
                  </div>
                </div>
              </div>
              <div className="h-full w-1/2 bg-white items-center justify-center flex">
                <Component5 />
              </div>
            </div>
          </div>
          <div className="w-full h-4/5 bg-white">
            <div className="bg-white h-full w-4/5 flex m-auto left-0 right-0 top-0 bottom-0">
              <Testimonials />
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
    </>
  );
}

export default Home;

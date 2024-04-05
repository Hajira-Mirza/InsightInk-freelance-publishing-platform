import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import Navbar from "./header/navbar";
import { Link } from "react-router-dom";
import Component6 from "./component6";
import Component7 from "./component7";
import Component8 from "./component8";
import Component9 from "./component9";
function About() {
  return (
    <>
      <Navbar />
      <div className="w-screen h-screen bg-white flex justify-center items-start">
        <div className="h-full w-full bg-white">
          <div className="h-40 w-full bg-violet-500 flex justify-center">
            <h1 className="text-white flex items-center justify-center text-3xl">
              About
            </h1>
          </div>

          <div className="w-full h-3/5 bg-white">
            <div className="bg-white h-full w-4/5 flex m-auto left-0 right-0 top-0 bottom-0">
              <div className="w-1/2 h-full bg-white justify-center items-start text-start flex flex-col">
                <h1 className="text-3xl text-gray-700 font-semibold">
                  Our<span className="text-violet-500">&nbsp;Story</span>
                </h1>
                <p className="text-gray-700 py-7 text-start">
                  At InsightInk, we are driven by a set of core values that
                  guide everything we do. Our mission is to empower Pakistani
                  writers of all backgrounds to share their stories with the
                  world and to foster a vibrant community of literary
                  enthusiasts. We are a community of storytellers, dreamers, and
                  changemakers. Join us on our mission to inspire, educate, and
                  entertain the world, one story at a time.
                </p>
              </div>
              <div className="w-1/2 h-full bg-white items-center justify-end flex">
                <div className="h-full w-full items-center justify-end flex">
                  <Component6 />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-4/5 bg-white">
            <div className="bg-white h-full w-4/5 flex m-auto left-0 right-0 top-0 bottom-0">
              <div className="w-1/2 h-full bg-white items-center justify-end flex">
                <div className="h-full w-full items-center justify-end flex">
                  <Component7 />
                </div>
              </div>
              <div className="w-1/2 h-full bg-white justify-center items-start text-start flex flex-col">
                <h1 className="text-3xl text-gray-700 font-semibold">
                  Our<span className="text-violet-500">&nbsp;Values</span>
                </h1>
                <div className="text-gray-700 mt-7 text-start">
                  <span className="font-bold">Accessibility:&nbsp;</span>
                  We are passionate about making the publishing process
                  accessible to everyone, regardless of their financial status
                  or geographical location. Our platform is designed to be
                  user-friendly and affordable, ensuring that aspiring authors
                  have the tools and resources they need to succeed.
                  <div className="text-gray-700 mt-3 text-start">
                    <span className="font-bold">&nbsp;Creativity:</span> We
                    celebrate creativity in all its forms and believe that every
                    individual has a unique story to tell. We strive to create
                    an environment that encourages experimentation, innovation,
                    and artistic expression.
                  </div>
                  <div className="text-gray-700 mt-3 text-start">
                    <span className="font-bold">&nbsp;Inclusivity:</span> We are
                    committed to fostering an inclusive community where writers
                    from diverse backgrounds feel welcomed, respected, and
                    supported. We believe in the power of storytelling to bridge
                    cultural divides and promote empathy and understanding.
                  </div>
                  <div className="text-gray-700 mt-3 text-start">
                    <span className="font-bold">&nbsp;Quality:</span> We uphold
                    the highest standards of quality in everything we do, from
                    manuscript editing and formatting to distribution and
                    marketing. We believe that every book deserves to be
                    polished to perfection before it reaches readers&apos;
                    hands.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-2/5 bg-white">
            <div className="bg-white h-full w-4/5 flex m-auto left-0 right-0 top-0 bottom-0">
              <div className="w-1/2 h-full bg-white justify-center items-start text-start flex flex-col">
                <h1 className="text-3xl text-gray-700 font-semibold">
                  Our<span className="text-violet-500">&nbsp;Mission</span>
                </h1>
                <div className="text-gray-700 mt-7 text-start">
                  Our mission is to empower writers to fulfill their publishing
                  dreams by providing them with the necessary tools, support,
                  and resources. We believe that every story matters and
                  deserves to be shared with the world. Through our platform, we
                  aim to remove barriers to entry and give aspiring authors a
                  chance to shine.
                </div>
              </div>
              <div className="w-1/2 h-full bg-white items-center justify-end flex">
                <div className="h-full w-full items-center justify-end flex">
                  <Component9 />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-4/5 bg-white">
            <div className="bg-white h-full w-4/5 flex m-auto left-0 right-0 top-0 bottom-0">
              <div className="w-1/2 h-full bg-white items-center justify-end flex">
                <div className="h-full w-full items-center justify-end flex">
                  <Component8 />
                </div>
              </div>
              <div className="w-1/2 h-full bg-white justify-center items-start text-start flex flex-col">
                <h1 className="text-3xl text-gray-700 font-semibold">
                  Our<span className="text-violet-500">&nbsp;Goals</span>
                </h1>
                <div className="text-gray-700 mt-7 text-start">
                  <span className="font-bold">Empowerment:&nbsp;</span>
                  We strive to empower writers to take control of their
                  publishing journey and to make informed decisions about their
                  work. We provide comprehensive resources and guidance to help
                  authors navigate the complexities of the publishing industry.
                  <div className="text-gray-700 mt-3 text-start">
                    <span className="font-bold">&nbsp;Innovation:</span> We are
                    committed to continuous innovation and improvement, both in
                    terms of technology and services. We leverage cutting-edge
                    tools and techniques to enhance the publishing experience
                    and to stay ahead of industry trends.
                  </div>
                  <div className="text-gray-700 mt-3 text-start">
                    <span className="font-bold">&nbsp;Impact:</span> We measure
                    our success not only by financial metrics but also by the
                    impact we have on the lives of our users. We are dedicated
                    to making a positive difference in the world by amplifying
                    diverse voices and promoting literacy and education.
                  </div>
                </div>
              </div>
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

export default About;

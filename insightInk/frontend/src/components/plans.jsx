import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "./header/navbar";
function Plans() {
  return (
    <>
      <Navbar />
      <div className="w-screen h-screen bg-white flex justify-center items-start">
        <div className="h-4/5 w-full bg-white">
          <div className="h-40 w-full bg-violet-500 flex justify-center">
            <h1 className="text-white flex items-center justify-center text-3xl">
              Plans
            </h1>
          </div>

          <div className="w-full h-full bg-white flex flex-col">
            <div className="bg-white h-full w-4/5 flex m-auto left-0 right-0 top-0 bottom-0">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
  <div className="relative z-10 mx-auto max-w-md lg:max-w-5xl">
    <div className="mt-16 rounded-lg bg-violet-500 px-6 py-8 shadow-2xl shadow-violet-600/10 sm:p-10 lg:flex lg:items-center">
      <div className="lg:w-0 lg:flex-1">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Pricing Plans
        </h2>
        <p className="mt-4 max-w-3xl text-lg text-gray-300">
          Choose the plan that works best for you and your team.
        </p>
      </div>
      <div className="mt-12 sm:mt-16 lg:mt-0 lg:ml-8 lg:flex-shrink-0">
        <div className="flex rounded-full shadow-sm">
          <button
            type="button"
            className="relative inline-flex items-center rounded-l-full border border-transparent bg-gradient-to-r from-violet-500 to-indigo-600 px-6 py-3 text-sm font-medium text-white hover:from-violet-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
          >
            Monthly
          </button>
          <button
            type="button"
            className="relative inline-flex items-center rounded-r-full border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
          >
            Yearly
          </button>
        </div>
      </div>
    </div>
    <div className="mt-8 rounded-lg bg-white pb-12 shadow sm:mt-12 sm:pb-16 lg:rounded-none lg:pb-0 lg:shadow-none lg:ring-1 lg:ring-black lg:ring-opacity-5">
      <div className="relative mx-auto max-w-md px-6 sm:max-w-3xl sm:px-4 lg:max-w-7xl lg:px-8">
        <div className="relative mt-8 mx-auto max-w-md space-y-4 lg:grid lg:max-w-5xl lg:grid-cols-2 lg:gap-5 lg:space-y-0">
          <div className="flex flex-col rounded-lg">
            <div className="px-6 py-8 sm:p-10 sm:pb-6">
              <div>
                <span className="inline-flex rounded-full bg-violet-100 px-3 py-1 text-sm font-semibold text-violet-600">
                  Standard
                </span>
              </div>
              <div className="mt-4 flex items-baseline text-6xl font-extrabold">
                $49
                <span className="ml-1 text-2xl font-medium text-gray-500">
                  /mo
                </span>
              </div>
              <p className="mt-5 text-lg text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit
                distinctio!
              </p>
              <button
                type="button"
                className="mt-8 block w-full rounded-md bg-gradient-to-r from-violet-600 to-indigo-600 py-3 px-5 font-medium text-white shadow hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-violet-200"
              >
                Buy Standard
              </button>
            </div>
            <div className="flex flex-1 flex-col justify-between rounded-b-lg bg-gray-50 p-6 sm:p-10 sm:pb-6">
              <ul role="list" className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="ml-3 text-sm text-gray-700">
                    Pariatur quod similique
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="ml-3 text-sm text-gray-700">
                    Veritatis expedita eligendi
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="ml-3 text-sm text-gray-700">
                    Accusamus quia totam
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col rounded-lg">
            <div className="px-6 py-8 sm:p-10 sm:pb-6">
              <div>
                <span className="inline-flex rounded-full bg-violet-100 px-3 py-1 text-sm font-semibold text-violet-600">
                  Premium
                </span>
              </div>
              <div className="mt-4 flex items-baseline text-6xl font-extrabold">
                $99
                <span className="ml-1 text-2xl font-medium text-gray-500">
                  /mo
                </span>
              </div>
              <p className="mt-5 text-lg text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit
                distinctio!
              </p>
              <button
                type="button"
                className="mt-8 block w-full rounded-md bg-gradient-to-r from-violet-600 to-indigo-600 py-3 px-5 font-medium text-white shadow hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-violet-200"
              >
                Buy Premium
              </button>
            </div>
            <div className="flex flex-1 flex-col justify-between rounded-b-lg bg-gray-50 p-6 sm:p-10 sm:pb-6">
              <ul role="list" className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="ml-3 text-sm text-gray-700">
                    Pariatur quod similique
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="ml-3 text-sm text-gray-700">
                    Veritatis expedita eligendi
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="ml-3 text-sm text-gray-700">
                    Accusamus quia totam
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="ml-3 text-sm text-gray-700">
                    Reiciendis adipisci illum
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
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

export default Plans;

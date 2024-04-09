import Footer from "../footer/footer";
import Navbar from "../header/navbar";
import Component6 from "../images Components/component6";
import Component7 from "../images Components/component7";
import Component8 from "../images Components/component8";
import Component9 from "../images Components/component9";

function About() {
  return (
    <>
    <Navbar />
      <div className="w-full min-h-screen bg-white flex flex-col justify-center items-center">
        <div className="h-24 sm:h-40 w-full bg-violet-500 flex justify-center items-center sm:w-full">
          <h1 className="text-white text-3xl">About</h1>
        </div>

        <div className="flex flex-col sm:flex-row w-full bg-white py-7">
          <div className="w-full sm:w-1/2 bg-white flex justify-center order-2 sm:order-1">
            <div className="w-11/12 sm:w-4/5">
              <h1 className="text-3xl text-gray-700 font-semibold">
                Our<span className="text-violet-500">&nbsp;Story</span>
              </h1>
              <p className="text-gray-700 py-7">
                At InsightInk, we are driven by a set of core values that guide
                everything we do. Our mission is to empower Pakistani writers of
                all backgrounds to share their stories with the world and to
                foster a vibrant community of literary enthusiasts. We are a
                community of storytellers, dreamers, and changemakers. Join us
                on our mission to inspire, educate, and entertain the world, one
                story at a time.
              </p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 bg-white order-1 sm:order-2">
            <div className="h-full w-full flex items-center p-7">
              <Component6 />
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row w-full bg-white py-7">
          <div className="w-full sm:w-1/2 bg-white">
            <div className="h-full w-full flex items-center p-7">
              <Component7 />
            </div>
          </div>
          <div className="w-full sm:w-1/2 bg-white flex justify-center">
            <div className="w-11/12 sm:w-4/5">
              <h1 className="text-3xl text-gray-700 font-semibold">
                Our<span className="text-violet-500">&nbsp;Values</span>
              </h1>
              <div className="text-gray-700 mt-7">
                <span className="font-bold">Accessibility:&nbsp;</span>
                We are passionate about making the publishing process accessible
                to everyone, regardless of their financial status or
                geographical location. Our platform is designed to be
                user-friendly and affordable, ensuring that aspiring authors
                have the tools and resources they need to succeed.
                <div className="mt-3">
                  <span className="font-bold">Creativity:</span> We celebrate
                  creativity in all its forms and believe that every individual
                  has a unique story to tell. We strive to create an environment
                  that encourages experimentation, innovation, and artistic
                  expression.
                </div>
                <div className="mt-3">
                  <span className="font-bold">Inclusivity:</span> We are
                  committed to fostering an inclusive community where writers
                  from diverse backgrounds feel welcomed, respected, and
                  supported. We believe in the power of storytelling to bridge
                  cultural divides and promote empathy and understanding.
                </div>
                <div className="mt-3">
                  <span className="font-bold">Quality:</span> We uphold the
                  highest standards of quality in everything we do, from
                  manuscript editing and formatting to distribution and
                  marketing. We believe that every book deserves to be polished
                  to perfection before it reaches readers&apos; hands.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row w-full bg-white items-center">
          <div className="w-full sm:w-1/2 bg-white flex justify-center order-2 sm:order-1">
            <div className="w-11/12 sm:w-4/5">
              <h1 className="text-3xl text-gray-700 font-semibold">
                Our<span className="text-violet-500">&nbsp;Mission</span>
              </h1>
              <div className="text-gray-700 mt-7">
                Our mission is to empower local writers to fulfill their
                publishing dreams by providing them with the necessary support.
                We believe that every story matters and deserves to be shared
                with the world. Through our platform, we aim to remove barriers
                to entry and give aspiring authors a chance to shine.
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 bg-white py-7 order-1 sm:order-2">
            <div className="h-full w-full flex items-center">
              <Component9 />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row w-full bg-white items-center">
          <div className="w-full sm:w-1/2 bg-white">
            <div className="h-full w-full items-center">
              <Component8 />
            </div>
          </div>
          <div className="w-full sm:w-1/2 bg-white flex justify-center">
            <div className="w-11/12 sm:w-4/5 py-7">
              <h1 className="text-3xl text-gray-700 font-semibold">
                Our<span className="text-violet-500">&nbsp;Goals</span>
              </h1>
              <div className="text-gray-700 mt-7">
                <span className="font-bold">Empowerment:&nbsp;</span>
                We strive to empower writers to take control of their publishing
                journey and to make informed decisions about their work. We
                provide comprehensive resources and guidance to help authors
                navigate the complexities of the publishing industry.
                <div className="mt-3">
                  <span className="font-bold">Innovation:</span> We are
                  committed to continuous innovation and improvement, both in
                  terms of technology and services. We leverage cutting-edge
                  tools and techniques to enhance the publishing experience and
                  to stay ahead of industry trends.
                </div>
                <div className="mt-3">
                  <span className="font-bold">Impact:</span> We measure our
                  success not only by financial metrics but also by the impact
                  we have on the lives of our users. We are dedicated to making
                  a positive difference in the world by amplifying diverse
                  voices and promoting literacy and education.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;

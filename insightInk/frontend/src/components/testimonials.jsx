import { useState } from "react";

function Testimonials() {
  const testimonials = [
    {
      name: "Person One",
      image: "images/a1.jpg",
      designation: "Blogger",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cupiditate recusandae quam amet enim voluptates alias accusantium sapiente! Adipisci vero fugiat aliquid explicabo quas eius!",
    },
    {
      name: "Person Two",
      image: "images/a2.jpg",
      designation: "Publisher",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cupiditate recusandae quam amet enim voluptates alias accusantium sapiente! Adipisci vero fugiat aliquid explicabo quas eius!",
    },
    {
      name: "Person Three",
      image: "images/a3.jpg",
      designation: "Writer",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cupiditate recusandae quam amet enim voluptates alias accusantium sapiente! Adipisci vero fugiat aliquid explicabo quas eius!",
    },
    {
      name: "Person Four",
      image: "images/a4.jpg",
      designation: "Entrepreneur",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cupiditate recusandae quam amet enim voluptates alias accusantium sapiente! Adipisci vero fugiat aliquid explicabo quas eius!",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="relative w-full max-w-5xl">
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 text-violet-500 focus:outline-none bg-transparent hover:bg-gray-200 rounded-full"
          onClick={handlePrev}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 text-violet-500 focus:outline-none bg-transparent hover:bg-gray-200 rounded-full"
          onClick={handleNext}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
        <div className="carousel">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <h1 className="text-gray-700 text-4xl font-semibold mb-6 text-center">
              What Others <span className="text-violet-500">Say</span> About Us
            </h1>

            <div className="px-6 py-8">
              <div className="text-center">
                <img
                  className="w-20 h-20 mx-auto rounded-full"
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].name}
                />
                <h2 className="mt-4 text-xl font-semibold text-gray-800">
                  {testimonials[activeIndex].name}
                </h2>
                <p className="mt-2 text-gray-700">
                  {testimonials[activeIndex].designation}
                </p>
                <p className="mt-2 text-gray-700">
                  {testimonials[activeIndex].text}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;

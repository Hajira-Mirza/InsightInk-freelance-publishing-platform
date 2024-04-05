import { useState } from "react";
import axios from "axios";

import PropTypes from "prop-types";

const Publisher = ({ publisher }) => {
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [bookDetails, setBookDetails] = useState({
    name: "",
    info: "",
    authorName: "",
    document: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setBookDetails((prevState) => ({
      ...prevState,
      document: file,
    }));
  };

  const handleBookPublisher = () => {
    setShowBookingModal(true);
  };

  const handleSubmitBooking = async () => {
    const authorName = bookDetails.authorName;
    const publisherName = publisher.name;
    const bookName = bookDetails.name;
    const bookInfo = bookDetails.info;

    try {
      const { data } = await axios.post(
        "http://localhost:7000/order/createOrder",
        {
          publisherName,
          authorName,
          bookInfo,
          bookName,
        },
        {
          withCredentials: true,
        }
      );

      if (data.error) {
        return alert("Unable to create Order");
      }

      // Redirect to the checkout session URL
      window.location.href = data.response;
    } catch (error) {
      console.error("Error creating order:", error);
      alert("An error occurred while creating the order.");
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
        <img
          src={publisher.image}
          alt="Publisher"
          className="w-24 h-24 rounded-full mb-4"
        />
        <div className="text-center">
          <h2 className="text-xl text-black font-bold">{publisher.name}</h2>
          <p className="text-gray-600">{publisher.address}</p>
          <p className="text-gray-600">
            Published Books: {publisher.publishedBooks}
          </p>
          <div className="mt-2">
            {[...Array(Math.floor(publisher.rating))].map((_, index) => (
              <span key={index} className="text-yellow-500">
                &#9733;
              </span>
            ))}
          </div>
        </div>
        <button
          onClick={handleBookPublisher}
          className="bg-blue-500 text-white rounded-md px-4 py-2 mt-4 hover:bg-blue-700"
        >
          Book this Publisher
        </button>
      </div>

      {/* Booking Modal */}
      {showBookingModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
            &#8203;
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-gray-700 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-white">
                      Book {publisher.name}
                    </h3>
                    <div className="mt-2">
                      <div className="mb-4">
                        <label
                          htmlFor="authorName"
                          className="block text-white text-sm font-bold mb-2"
                        >
                          Author Name
                        </label>
                        <input
                          type="text"
                          id="authorName"
                          name="authorName"
                          value={bookDetails.authorName}
                          onChange={handleInputChange}
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-white focus:outline-none focus:shadow-outline"
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="bookName"
                          className="block text-white text-sm font-bold mb-2"
                        >
                          Book Name
                        </label>
                        <input
                          type="text"
                          id="bookName"
                          name="name"
                          value={bookDetails.name}
                          onChange={handleInputChange}
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-white focus:outline-none focus:shadow-outline"
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="bookInfo"
                          className="block text-white text-sm font-bold mb-2"
                        >
                          Book Info
                        </label>
                        <textarea
                          id="bookInfo"
                          name="info"
                          value={bookDetails.info}
                          onChange={handleInputChange}
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-white leading-tight focus:outline-none focus:shadow-outline"
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="bookDocument"
                          className="block text-white text-sm font-bold mb-2"
                        >
                          Attach Document
                        </label>
                        <input
                          type="file"
                          id="bookDocument"
                          name="document"
                          onChange={handleFileChange}
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-white  leading-tight focus:outline-none focus:shadow-outline"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  onClick={handleSubmitBooking}
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Submit
                </button>
                <button
                  onClick={() => setShowBookingModal(false)}
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

Publisher.propTypes = {
  publisher: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    publishedBooks: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};

export default Publisher;

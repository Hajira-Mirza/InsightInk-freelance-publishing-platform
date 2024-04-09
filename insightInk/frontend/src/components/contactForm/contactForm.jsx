import { useState } from "react";
import Component3 from "../images Components/component3";

function ContactForm() {
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
      <form onSubmit={onSubmit}>
      <div className="flex flex-col md:flex-row justify-between items-center bg-white py-7 px-20 mx-auto min-w-0">
  <div className="h-full w-full flex flex-col sm:flex-row drop-shadow-lg">
    <div className="h-full w-full sm:w-1/2 min-w-0  sm:rounded-l-2xl flex items-center justify-center">
      <Component3 />
    </div>
    <div className="h-auto w-full sm:w-1/2 p-5 sm:p-10 bg-white sm:rounded-xl flex flex-col justify-center my-4">
      <p className="text-gray-700 text-xl pb-9">We&apos;d love to hear from you!</p>
      <div className="mb-6">
        <input
          type="text"
          name="name"
          placeholder="Your full name"
          required
          className="bg-gray-50 w-full p-2 rounded-xl text-gray-700 focus:outline-none focus:ring-none focus:border-violet-500 drop-shadow-md"
        />
      </div>
      <div className="mb-6">
        <input
          type="text"
          name="email"
          placeholder="Your email here"
          required
          className="bg-gray-50 w-full p-2 rounded-xl text-gray-700 focus:outline-none focus:ring-none focus:border-violet-500 drop-shadow-md"
        />
      </div>
      <textarea
        className="textarea bg-gray-50 w-full p-2 mb-6 rounded-xl text-gray-700 outline-none focus:ring-none focus:border-violet-500 drop-shadow-md"
        name="message"
        placeholder="Your message here"
        required
      />
      <button
        className="text-white bg-violet-500 border border-white rounded-xl px-7 py-2 inline-block font-semibold hover:bg-white hover:text-violet-500 hover:border-violet-500 focus:outline-none focus:ring focus:border-violet-500"
        type="submit"
      >
        Submit
      </button>
    </div>
  </div>
</div>


      </form>
      <span>{result}</span>
    </>
  );
}

export default ContactForm;

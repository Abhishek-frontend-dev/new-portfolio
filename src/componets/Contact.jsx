import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "@abhiPortfolioID01", // Replace with your Service ID
        "template_nhq7kui", // Replace with your Template ID
        formData,
        "GnMKbfdm5RngkiQqK" // Replace with your Public Key
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setSuccessMessage("Your message has been sent successfully!");
          setFormData({
            user_name: "",
            user_email: "",
            message: "",
          });
        },
        (error) => {
          console.error("Error sending email:", error.text);
        }
      );
  };

  return (
    <div className="contact-section bg-gradient-to-r from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900">
      <h2 className="text-4xl font-bold text-center  p-5 mb-12 text-gray-800 dark:text-gray-200">
        Contact Me
      </h2>
      <div className="flex flex-col lg:flex-row items-center gap-10 max-w-6xl mx-auto">
        {/* Right Side: Vector + Welcome Message */}
        <div className="relative overflow-hidden rounded-lg shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <img
              src="src/assets/contactImg.png"

              alt="Contact Illustration"
              className="max-w-full h-96 transition-transform duration-500 ease-in-out transform hover:rotate-3"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 flex justify-center items-center transition-all duration-300">
              <p className="text-white text-lg font-semibold">Let's Connect!</p>
            </div>
            <h2 className="dark:text-white text-lg font-semibold">Let's Connect!</h2>
             <p className="text-gray-600 dark:text-gray-400 mb-3">
            Feel free to reach out to me with any queries, collaborations, or
            just to say hello!
          </p>
          </div>

        {/* Left Side: Contact Form */}
        <div className="flex-1">
          <form
            onSubmit={handleSubmit}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg space-y-4"
          >
            <div>
              <label
                htmlFor="user_name"
                className="block text-lg font-semibold text-gray-700 dark:text-gray-300"
              >
                Name
              </label>
              <input
                type="text"
                id="user_name"
                name="user_name"
                value={formData.user_name}
                onChange={handleChange}
                className="w-full p-2 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-300"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="user_email"
                className="block text-lg font-semibold text-gray-700 dark:text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                id="user_email"
                name="user_email"
                value={formData.user_email}
                onChange={handleChange}
                className="w-full p-2 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-300"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-lg font-semibold text-gray-700 dark:text-gray-300"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-300"
                rows="5"
                placeholder="Enter your message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-all dark:bg-blue-400 dark:hover:bg-blue-500"
            >
              Send Message
            </button>
          </form>
          {successMessage && (
            <p className="mt-4 text-green-600 dark:text-green-400 font-semibold">
              {successMessage}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

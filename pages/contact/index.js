import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // Prevent page refresh
    
    emailjs
      .sendForm(
        "service_bcxbvi7", // Replace with your EmailJS service ID
        "template_0w03opt", // Replace with your EmailJS template ID
        form.current,
        "dxH4XKk8KbwHkWcEl" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
        },
        (error) => {
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="h-screen bg-#000000 px-5 py-20 flex flex-col xl:flex-row justify-between">
      {/* Left Side: Heading and Image */}
      <motion.div
        key="left-side"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col items-center xl:items-start"
      >
        {/* Heading */}
        <h2 className="text-3xl font-bold text-red-700 mb-6 text-center py-10 xl:text-left">
          LETS WORK AND GROW TOGETHER
        </h2>
        {/* Image */}
        <motion.img
          key="image"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          src="/bulb.png"  // Corrected image path
          alt="Motivational Visual"
          className="w-80 h-auto object-contain"
        />
      </motion.div>

      {/* Right Side: Form */}
      <motion.div
        key="right-side"
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full xl:w-1/2 px-8 py-10 bg-black shadow-xl rounded-lg p-20 border-l-4 border-red-800 shadow-red-400/50 mt-10 xl:mt-0"
      >
        <h2 className="text-2xl font-bold text-gray-500 mb-6">Contact Me</h2>
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          {/* Name Field */}
          <div key="name-field">
            <label htmlFor="name" className="block text-sm font-semibold text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="user_name"
              placeholder="Enter your name"
              className="w-full px-4 py-2 mt-2 text-black border rounded-md shadow-lg shadow-red-400/50 focus:outline-none focus:ring-2 focus:ring-red-300"
              required
            />
          </div>
          {/* Email Field */}
          <div key="email-field">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="user_email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 mt-2 text-black border rounded-md shadow-lg shadow-red-500/50 focus:outline-none focus:ring-2 focus:ring-red-300"
              required
            />
          </div>
          {/* Message Field */}
          <div key="message-field">
            <label htmlFor="message" className="block text-sm font-semibold text-black-600">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Enter your message"
              className="w-full px-4 py-2 mt-2 text-black border rounded-md shadow-lg shadow-red-500/50 focus:outline-none focus:ring-1 focus:ring-red-400"
              required
            ></textarea>
          </div>
          {/* Send Mail Button */}
          <div key="submit-button">
            <button
              type="submit"
              className="w-full bg-red-500 text-white font-semibold py-2 rounded-md shadow-lg hover:bg-red-600 focus:outline-none focus:ring-4 focus:ring-red-400"
            >
              Send Mail
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;



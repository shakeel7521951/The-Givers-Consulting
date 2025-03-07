import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import contact from '../assets/contactUs.jpg';

function Contact() {
  const { profile } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    contactNumber: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const formRef = useRef();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
  
    setLoading(true);
    emailjs
      .sendForm(
        "service_4925dkm", //service id
        "template_x7ptg1s", // template id
        formRef.current,
        "CATV0IGSvyAOkLsMm" //public key
      )
      .then(
        () => {
          toast.success("Email sent successfully!", { position: "top-center" });
          navigate("/")
          setFormData({
            name: "",
            contactNumber: "",
            email: "",
            message: "",
            to_name: "thegiversconsulting Team",
          });
          setLoading(false);
        },
        (error) => {
          toast.error("Failed to send email. Please try again.", {
            position: "top-center",
          });
          setLoading(false);
        }
      );
  };
  

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen p-0 sm:p-6">
      {/* Image Section */}
      <div className="lg:w-1/2 w-full h-full sm:h-[620px] flex justify-center lg:justify-end mb-8 lg:mb-0">
        <img
          src={contact}
          alt="Contact Us"
          className="rounded-lg shadow-lg object-cover w-full h-full lg:h-auto"
        />
      </div>

      {/* Form Section */}
      <div className="lg:w-1/2 w-full bg-white p-8 rounded-lg shadow-lg flex items-center h-full">
        <form ref={formRef} className="space-y-4 w-full" onSubmit={sendEmail}>
          <h2 className="text-4xl font-bold mb-6 text-blue-600 text-center">
            Contact Us
          </h2>
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-gray-700 mb-2 text-lg">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="from_name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Contact Number */}
          <div>
            <label
              htmlFor="contactNumber"
              className="block text-gray-700 mb-2 text-lg"
            >
              Contact Number
            </label>
            <input
              type="tel"
              id="contactNumber"
              name="contact_number"
              value={formData.contactNumber}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your contact number"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-gray-700 mb-2 text-lg">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="user_email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email address"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-gray-700 mb-2 text-lg"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your message"
              rows="4"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className={`w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 text-lg ${
                loading ? "cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;

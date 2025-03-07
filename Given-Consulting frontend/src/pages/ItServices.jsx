import React from "react";
import eCommerce from "../assets/services/ecommerce.png";
import payment from "../assets/services/payment.png";
import security from "../assets/services/security.png";
import cloud from "../assets/services/cloud.png";
import web from "../assets/services/webDevelopment.png";
import digitalMarketing from "../assets/services/digitalMarketing.jpg";
import graphDesigning from "../assets/services/graphDesigning.jpg";
import webDevelopment from "../assets/services/webDevelopment.png";
import ai from "../assets/services/ai.png";
import sdlc from "../assets/sdlc.png";

const ItServices = () => {
  const services = [
    {
      id: 1,
      title: "AI-Based Solutions",
      image: ai,
      description:
        "Automation tools and predictive analytics for businesses. Machine learning models to optimize operations and decision-making. AI-driven chatbots, virtual assistants, and recommendation engines.",
    },
    {
      id: 2,
      title: "Web and Application Development",
      image: webDevelopment,
      description:
        "Responsive and high-performing websites tailored to business needs. Scalable mobile and web applications with robust user experiences.",
    },
    {
      id: 3,
      title: "eCommerce Development",
      image: eCommerce,
      description:
        "Custom eCommerce platforms to meet diverse business requirements. Seamless shopping cart systems, product management, and inventory control",
    },
    {
      id: 4,
      title: "Payment Integrations",
      image: payment,
      description:
        "Secure and user-friendly payment gateways for global transactions.Integration of multi-currency and digital wallets for seamless transactions.",
    },
    {
      id: 5,
      title: "Security Solutions",
      image: security,
      description:
        "Advanced cybersecurity measures to protect digital assets. Data encryption, firewalls, and penetration testing to ensure system integrity",
    },
    {
      id: 6,
      title: "Cloud Computing and Data Management",
      image: cloud,
      description:
        "Scalable cloud solutions for businesses of all sizes. Big data analytics to extract actionable insights.",
    },
    {
      id: 7,
      title: "Graph Design and Visualization",
      image: graphDesigning,
      description:
        "Create visually appealing and interactive graph designs tailored for data analysis and decision-making.",
    },
    {
      id: 8,
      title: "Blogging Platforms Development",
      image: web,
      description:
        "Build modern blogging sites with user-friendly interfaces, customizable themes, and SEO optimization for better reach.",
    },
    {
      id: 9,
      title: "Digital Marketing Strategies",
      image: digitalMarketing,
      description:
        "Craft data-driven marketing strategies to enhance brand visibility, engagement, and conversions across digital channels.",
    },
  ];

  return (
    <div>
      {/* Heading Section */}
      <div className="p-9 bg-white py-10 px-8 text-center mt-9 rounded-md sm:mx-8">
        <h1 className="text-black font-bold text-xl sm:text-2xl mb-4">
          OUR CORE CUSTOM SOFTWARE DEVELOPMENT SERVICES
        </h1>
        <p className="text-gray-700 max-w-4xl mx-auto">
          From IT strategy consulting and comprehensive technology roadmaps to
          the end-to-end development of scalable solutions, Intellectsoft
          delivers a full-cycle software development services that adapt
          seamlessly to your project requirements and business needs.
        </p>
      </div>

      {/* Services Section */}
      <div className=" rounded-lg mt-2 mb-2 sm:mx-8 pt-10">
        <h2 className="font-bold text-2xl text-center">IT-Enabled Services</h2>
        <p className="text-center px-4 text-gray-600 leading-relaxed mt-3 sm:px-20">
          Our IT-enabled services utilize cutting-edge technologies to provide
          comprehensive and innovative solutions to meet the evolving demands of
          the digital age
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-8  ">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col items-center p-2 bg-white py-5 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer "
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-18 h-20 mb-4 "
              />
              <h2 className="text-lg text-center font-semibold">
                {service.title}
              </h2>
              <p className="px-4 text-center text-gray-600 leading-relaxed my-3">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Software Development Lifecycle Section */}
      <div className=" p-10 md:mx-8 rounded text-center ">
        <h2 className="text-md sm:text-xl font-bold mb-4">
          CUSTOM SOFTWARE DEVELOPMENT LIFECYCLE
        </h2>
        <p className="text-gray-600 mb-6">
          We employ best-practice processes and development methodologies to
          functionally build a cutting-edge technology solution in a structured
          and methodical way.
        </p>
        <img
          src={sdlc} // Replace with lifecycle image URL
          alt="SDLC Process"
          className="mx-auto"
        />
      </div>
    </div>
  );
};

export default ItServices;

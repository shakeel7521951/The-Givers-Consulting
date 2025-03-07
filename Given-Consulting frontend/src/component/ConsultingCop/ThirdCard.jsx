import React from "react";
import businessplanning from '../../assets/consultingimages/businessplanning.png';
import marketAnalysis from '../../assets/consultingimages/marketAnalysis.png';
import businessAcquism from '../../assets/consultingimages/businessAcquism.png';
import oppertunityDevelopment from '../../assets/consultingimages/oppertunityDevelopment.png';
import riskManagement from '../../assets/consultingimages/riskManagement.png';
import { Link } from "react-router-dom";

const ThirdCard = () => {
  const cards = [
    {
      id: 1,
      image: businessplanning,
      title: "Business Strategy and Planning",
      description: "Develop robust plans for market entry, growth, and sustainability.",
    },
    {
      id: 2,
      image: marketAnalysis,
      title: "Market Research and Analysis",
      description: "Deliver in-depth insights to help businesses make informed decisions.",
    },
    {
      id: 3,
      image: businessAcquism,
      title: "Business Acquisition Services",
      description:
        "Identify acquisition opportunities that align with your strategic goals. Conduct due diligence, valuation, and negotiation support. Facilitate seamless integration of acquired businesses.",
    },
    {
      id: 4,
      image: oppertunityDevelopment,
      title: "Opportunity Development",
      description:
        "Provide access to partnerships, investment opportunities, and expansion avenues. Help businesses identify untapped markets and sectors.",
    },
    {
      id: 5,
      image: riskManagement,
      title: "Compliance and Risk Management",
      description:
        "Ensure adherence to legal standards and regulations. Mitigate business risks through proactive planning and monitoring strategies.",
    },
    {
      id: 6,
      image: marketAnalysis,
      title: "Operations Optimization",
      description:
        "Streamline workflows, enhance efficiency, and improve overall operational performance to maximize profitability and customer satisfaction.",
    },
  ];
  

  return (
    <div className="">
      {/* Heading Section */}
      <div className="text-center mb-4 sm:mb-12 px-2 ">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Consultancy Services</h1>
        <p className="text-md sm:text-lg text-gray-600 sm:px-20">
          We provide tailored consultancy solutions to help businesses
          streamline operations, enhance productivity, and achieve sustainable
          growth
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 max-w-5xl mx-auto">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer"
          >
            <img src={card.image} className="text-yellow-500 mb-4 w-20 h-20 mx-auto flex items-center justify-center" />
            <h2 className="text-md sm:text-xl font-semibold mb-2">{card.title}</h2>
            <p className="text-gray-600 text-center leading-relaxed">{card.description}</p>
          </div>
        ))}
      </div>

      {/* Centered Button */}
      <div className="flex justify-center my-4">
        <Link
          to="/contact"
          className="px-6 py-3 bg-[#DBFB1C] text-black rounded-full hover:bg-yellow-400 transition"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default ThirdCard;

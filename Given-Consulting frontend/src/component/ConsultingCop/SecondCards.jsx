import React from "react";
import card3pic from "../../assets/consultingimages/card3pic.jpg";

const SecondCards = () => {
  return (
    <>
      {/* 2 CARD SECTION*/}
      <div className="flex flex-wrap items-center justify-center h-auto px-6 sm:text-1xl mt-4 md:my-8 mb-3 sm:mb-6">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
          <img
            src={card3pic}
            alt="Hero"
            className="rounded-lg shadow-lg sm:w-[497px] sm:h-[537px] "
          />
        </div>

        {/* Right Side - Content */}
        <div className="w-full md:w-1/2 text-center md:text-left md:text-2xl">
          <h1 className="mx-5">Discover Our Expertise</h1>
          <h1 className="text-2xl font-bold mb-4 sm:mx-5 md:text-4xl">
            Navigating the Evolving Busi...
          </h1>
          <p className="text-md sm:text-lg text-gray-600 mb-6 text-center sm:px-7">
            In today's fast-paced, ever-changing business environment, staying
            ahead of the curve is crucial. Our consultants are deeply immersed
            in the latest industry trends, emerging technologies,a... Whether
            you're seeking to expand into new markets, optimize your operations,
            or implement cutting-edge digital solutions, we have the expertise
            to help you navigate the complexities of your industry and achieve
            sustained competitive advantage From strategic planning and
            organizational design to process improvement and change management,
            our comprehensive solutions are designed to propel your business
            forward, emp
          </p>
          <button className="px-4 sm:mx-4 py-2 bg-[#F2FF05] text-black rounded-full hover:bg-[#f1fa43] transition">
            Get it Touch
          </button>
        </div>
      </div>
    </>
  );
};

export default SecondCards;

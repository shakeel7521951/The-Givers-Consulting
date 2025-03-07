import React from "react";
import { FaArrowRight } from "react-icons/fa";
import heroresorce from "../../assets/consultingimages/heropic.jpg";

const TwoResorce = () => {
  return (
    <div>
      <h1 className="text-[22px] sm:text-[30px] text-center font-[700] mb-4 mt-10">
        Recruitment
      </h1>

      {/* SECOND SECTION */}
      <div className="flex justify-center items-center ">
        <div className="flex items-center justify-center top-20 py-16 px-6 bg-white gap-12 max-w-[2000px] lg:flex-row md:flex-col flex-col sm:text-center shadow-lg border-3 border-gray-700 md:mx-10 rounded-lg">
          {/* Left side image */}
          <div>
            <img
              src={heroresorce}
              alt="Description"
              className="rounded md:w-[90%]"
            />
          </div>

          {/* Right side content */}
          <div className="max-w-lg text-black flex flex-col items-center justify-center xl:left-72">
            <h2 className="text-[20px] font-[700] mb-4 md:text-[30px] sm:text-[20px]">
              Dream Jobs Made Simple
            </h2>
            <p className="text-md sm:text-lg justify-items mb-6 text-center">
              Our priority is matching you with the company that suits your
              professional goals, growth, and happiness. Integrity, personal
              connection, and deep knowledge in the field of medical sales means
              the stage is set for your success. We will coach you throughout
              the process so your job search can run flawlessly.
            </p>
            <button className="flex items-center bg-[#FFFF00] text-black px-6 py-2 rounded-full hover:bg-[#fafa45] transition">
              <span className="mr-2">Looking for Recruitment</span>
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoResorce;

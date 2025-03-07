import React from "react";
import developmentMap from "../assets/development_Marketing/developmentMap.jpeg";
import maymentPlan from "../assets/development_Marketing/maymentPlan.jpg";
import maryLandPost from "../assets/development_Marketing/maryLandPost.jpg";

const MediaPage = () => {
  return (
    <div className="flex flex-col items-center min-h-screen rounded-lg">
      {/* Video Section */}
      <video
        className="w-full max-h-[470px] object-cover rounded-lg"
        controls
        src="/River_Site_Lodges.mp4"
        alt="Main Video"
      ></video>

      {/* Title and Description Section */}
      <div className="text-center mt-8 px-4">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
          Development and Marketing
        </h1>
        <p className="text-gray-600 mt-4 text-sm md:text-base">
          Experience the strategic growth journey through development and
          marketing. This video showcases innovative strategies, project plans,
          and unique insights that elevate the value of your business or
          property to new heights.
        </p>
      </div>

      {/* Card Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-8 px-4">
        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col h-auto">
          <img
            src={maryLandPost}
            alt="Maryland Weekend Vibes"
            className="w-full h-48 md:h-56 object-fill"
          />
          <hr className="h-1 bg-black"/>
          <div className="p-4">
            <h2 className="text-lg font-bold text-gray-800">
              Maryland Weekend Vibes
            </h2>
            <p className="text-gray-600 mt-2 text-sm md:text-base">
              Discover the charm of Maryland weekends through this vibrant
              depiction. From scenic beauty to exciting events, this image
              captures the heart of relaxation and joy in a perfect weekend
              getaway.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col h-auto">
          <img
            src={maymentPlan}
            alt="Payment Plan Details"
            className="w-full h-48 md:h-56 object-fill"
          />
                    <hr className="h-1 bg-black"/>
          <div className="p-4">
            <h2 className="text-lg font-bold text-gray-800">
              Payment Plan Details
            </h2>
            <p className="text-gray-600 mt-2 text-sm md:text-base">
              Explore a tailored payment plan that provides ease and
              flexibility. Designed to meet diverse financial needs, this plan
              ensures affordability without compromising on the quality of
              services provided.
            </p>
          </div>
        </div>
      </div>

      {/* Full-Width Image Section */}
      <div className="w-full min-w-screen my-8 px-4">
        <img
          src={developmentMap}
          alt="Development Map"
          className="w-full h-[500px] rounded-lg object-fill"
        />
      </div>
    </div>
  );
};

export default MediaPage;

import React from "react";
import investment from "../../assets/HumanResurces/investment.png";
import minrals from "../../assets/HumanResurces/minrals.png";
import bulkMinrals from "../../assets/HumanResurces/bulkMinrals.png";
import coal from "../../assets/HumanResurces/coal.png";
import miningOperations from "../../assets/HumanResurces/miningOperations.png";
import minralsRefining from "../../assets/HumanResurces/minralsRefining.png";

const MiningMinralsResource = () => {
  const Resources = [
    {
      id: 1,
      image: investment,
      tilte: " Investment Opportunities in Mining",
      description:
        "We offer opportunities for local and international investors to partner in exploration and development projects. Support is provided for mining licenses, feasibility studies, and financial planning. There is potential for joint ventures in mineral extraction and exportation.",
    },
    {
        id:2,
        image:minrals,
        tilte:'Mineral Exploration',
        description:"We explore and extract a wide range of minerals, including Himalayan Pink Salt, Copper, Chromite, Manganese, Antimony, Lithium, Zinc, Lead, Crystal,Mica, Fluoride, Nephrite, Emerald, and other valuable minerals. We conduct comprehensive geological surveys and employ advanced technologies to identify and extract high-quality minerals."
    },
    {
        id:3,
        image:bulkMinrals,
        tilte:'Bulk and Packaged Mineral Exports',
        description:'Export minerals in bulk or packaged forms to meet the diverse needs of international clients.Provide custom packaging solutions for a wide range of industrial and consumer uses. Compliance with international standards for mineral exports.'
    },
    {
        id:4,
        image:coal,
        tilte:'Supply of Coal',
        description:'High-quality local coal sourced from domestic markets. Imported coal from Afghanistan and South Africa for diverse industrial applications'
    },{
        id:5,
        image:miningOperations,
        tilte:'Mining Operations and Management',
        description:'Efficient management of mining sites with an emphasis on safety and environmental responsibility. Implementing sustainable mining practices. Facilitating logistics for mineral transportation and export.'
    },
    {
        id:6,
        image:minralsRefining,
        tilte:'Mineral Processing and Refining',
        description:'Offering advanced mineral processing services to enhance the quality and value of extracted minerals.'
    }
  ];
  return (
    <div className=" p-6 my-10 md:mx-4">
      <h2 className="text-center text-xl sm:text-2xl md:text-3xl mx-5 sm:mx-0 font-extrabold text-gray-800 mb-4">
        Mining and Mineral Resources
      </h2>
      <p className="text-center text-gray-600 md:px-10 mb-6 leading-relaxed">
        We are actively involved in mining and mineral exploration, offering
        investment opportunities and export services for a wide range of
        minerals. Our mining operations focus on sustainability, quality, and
        global market access.
      </p>
      <div className="flex justify-center flex-wrap gap-4">
        {Resources.map((data) => (
          <div
            key={data.id}
            className="bg-white shadow-lg p-6 rounded-lg md:w-1/2 lg:w-1/3 max-w-[350px] cursor-pointer transform transition-transform duration-300 hover:scale-105"
          >
            <img
              src={data.image}
              className="w-24 h-24 mx-auto mb-4"
              alt="Investment Opportunities in Mining"
            />
            <h4 className="text-xl font-semibold text-center text-gray-800 mb-3">
              {data.tilte}
            </h4>
            <p className="text-gray-600 text-center leading-relaxed">
              {data.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MiningMinralsResource;

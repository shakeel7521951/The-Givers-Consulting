import React, { useState } from "react";
import Director from "../assets/About/Director.jpg";
import adnan from "../assets/About/adnan.jpg";
import Director2 from "../assets/About/Director2.jpg";

const Team = () => {
  const [expandedCardId, setExpandedCardId] = useState(null);

  const Team = [
    {
      id: 3,
      name: "Mr. Muhammad Azam Khan",
      country: "(Pakistan)",
      role: "Managing Director",
      image: Director2,
      description:
        "A visionary leader with over 15 years of experience in business management and IT, Mr. Azam has been the driving force behind The Givers’ success. His strategic insights and exceptional business acumen have guided the company through various stages of growth, from its humble beginnings as a consultancy firm to its current standing as a global solutions provider. His ability to foster international business relations, coupled with a keen eye for market trends, has played a critical role in expanding The Givers’ reach across diverse sectors. With a leadership style focused on innovation, integrity, and collaboration, Mr. Azam remains committed to driving progress and shaping a sustainable future for the organization and its stakeholders.",
    },
    {
      id: 2,
      name: "Colonel Muhammad Adnan Ul Haque (Retired)",
      country: "(Pakistan)",
      role: "Director",
      image: adnan,
      description:
        "A retired military officer, Colonel Adnan brings a unique blend of leadership, discipline, and operational efficiency to The Givers. His extensive background in the military has equipped him with the ability to lead teams through complex and high-pressure situations with clarity and precision. In his role as Director, he has significantly contributed to the company’s mining and export ventures, ensuring that all operations are executed with the highest standards of discipline, safety, and efficiency. Colonel Adnan's strategic oversight in these areas has driven remarkable growth in The Givers’ industrial sector, laying the foundation for future expansion.",
    },
    {
      id: 1,
      name: "Mr. Muhammad Asif Khaliq ",
      country: "(South Africa)",
      role: "Director",
      image: Director,
      description:
        "With a strong background in business development operations especially in South Africa, Mr. Asif has been an integral part of The Givers’ leadership team. His expertise in streamlining operations and managing human capital has ensured that the company runs efficiently and remains focused on client satisfaction. Mr. Asif’s leadership philosophy revolves around empowerment, ensuring that every team member is equipped with the tools and knowledge to succeed. His commitment to excellence is evident in every aspect of the business, from optimizing internal processes to enhancing client relationships. He plays a pivotal role in shaping the company’s internal culture, driving operational excellence, and building long-term value for clients.",
    },
  ];

  const toggleDescription = (id) => {
    setExpandedCardId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="rounded mt-5 md:mt-10">
      <div className="container mx-auto">
        <section className="py-5 pb-10">
          <h3 className="text-2xl sm:text-4xl font-semibold text-gray-800 mb-6 sm:mb-12 text-center">
            Meet With Our Team
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {Team.map((member) => (
              <div
                key={member.id}
                className="bg-white mx-2 sm:mx-0 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
              >
                <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-lg font-semibold text-gray-800">
                  {member.name}
                </h4>
                <p className="text-sm text-gray-600 mb-2">{member.role}</p>
                <p className="text-sm text-center text-gray-500 mb-4">
                  {expandedCardId === member.id
                    ? member.description
                    : `${member.description.slice(0, 100)}...`}
                </p>
                <button
                  className="text-blue-900 underline px-4 py-2 rounded-full text-md"
                  onClick={() => toggleDescription(member.id)}
                >
                  {expandedCardId === member.id ? "Show Less" : "Read More"}
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default Team;

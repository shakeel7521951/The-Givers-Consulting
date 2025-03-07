import React from "react";
import importimage from '../../assets/import&export/import.jpg';
import exportImage from '../../assets/import&export/export.jpg';
import gts from '../../assets/import&export/gts.png';

export default function ConnectWorld() {
  const services = [
    {
      id: 1,
      category: "Import Services",
      icon: importimage,
      description:
        "Assistance with customs clearance, guidance on compliance, and facilitation of procedural issues for smooth import operations.",
      details: [
        "Assistance with customs clearance to expedite shipments.",
        "Guidance on compliance with import regulations and documentation.",
        "Facilitation of procedural issues to ensure smooth import operations.",
      ],
    },
    {
      id: 2,
      category: "Export Services",
      icon: exportImage, 
      description:
        "IT products and services, as well as the export of goods across industries, including textiles, food products, and more.",
      details: [
        "Software development, enterprise solutions, and mobile applications.",
        "Digital marketing, cloud computing, and data analytics solutions.",
        "High-quality goods across industries: textiles, food products, industrial materials.",
      ],
    },
    {
      id: 3,
      category: "Global Trade Solutions",
      icon: gts, 
      description:
        "End-to-end logistics support and consultation on trade compliance, helping businesses enter international markets.",
      details: [
        "End-to-end logistics support.",
        "Consultation on trade compliance and international market entry strategies.",
      ],
    },
  ];

  return (
    <div className="min-h-[80vh] rounded-lg my-10 p-8 w-full">
      <h1 className="text-center text-xl sm:text-3xl mx-5 sm:mx-0 font-extrabold text-gray-800 mb-6">
        Import and Export Services
      </h1>
      <p className="text-gray-600 text-center leading-relaxed sm:mx-10 mb-8">
        We specialize in IT services and products as well as the export and import of goods, streamlining global trade.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map(({ id, category, icon, description, details }) => (
          <div
            key={id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transform transition-all duration-300 hover:scale-105"
          >
            <div className="flex items-center justify-center bg-gray-200">
              <img
                src={icon}
                alt={`${category} Icon`} 
                className="w-full h-52"
              />
            </div>
            <div className="p-5">
              <h2 className="text-lg font-bold text-gray-800 mb-3 text-center">{category}</h2>
              <p className="text-gray-600 text-justify leading-relaxed mb-4">{description}</p>
              <ul className="list-disc pl-5 text-gray-600">
                {details.map((detail, index) => (
                  <li key={index} className="mb-2">
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

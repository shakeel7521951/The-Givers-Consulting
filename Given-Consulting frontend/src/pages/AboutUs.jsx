import React, { useState } from "react";

import aboutBanner from "../assets/About/aboutBanner.jpg";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const [expanded, setExpanded] = useState({});


  const coreValues = [
    {
      title: "Integrity",
      description:
        "We maintain the highest standards of professionalism and ethics.",
    },
    {
      title: "Innovation",
      description:
        "Leveraging technology and creative thinking for transformative results.",
    },
    {
      title: "Customer Focus",
      description: "Tailoring our services to meet unique client needs.",
    },
    {
      title: "Global Reach",
      description:
        "Bridging gaps between businesses, talent, and markets worldwide.",
    },
    {
      title: "Sustainability",
      description:
        "Promoting responsible and environmentally friendly practices in all ventures.",
    },
    {
      title: "Excellence",
      description: "Striving for superior quality in everything we do.",
    },
  ];

  const toggleDescription = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <>
      <section>
        <img src={aboutBanner} alt="About Banner" className="w-full rounded" />
      </section>
      <section className="pt-16 rounded">
        <div className=" mx-auto px-4">
          {/* Company Overview */}
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
              The Givers (Pvt) LTD
            </h2>
            <p className="text-md sm:text-lg text-gray-600">
              A versatile and forward-thinking company offering a comprehensive
              suite of services aimed at empowering businesses and individuals
              across the globe. With a strong focus on consultancy, overseas
              employment, general order supplies, IT-enabled services,
              import/export, and mining and mineral resources, we provide
              innovative solutions that meet the evolving needs of our clients.
            </p>
          </div>

          {/* Vision Statement */}
          <div className="mb-12 text-center">
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-2">
              Vision Statement
            </h3>
            <p className="text-md sm:text-lg text-gray-600">
              To become a global leader in business solutions, workforce
              development, resource management, and IT services by fostering
              innovation and creating opportunities that empower communities and
              businesses.
            </p>
          </div>

          {/* Mission Statement */}
          <div className="mb-12 text-center">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Mission Statement
            </h3>
            <p className="text-lg text-gray-600">
              Our mission is to deliver efficient, customized, and sustainable
              solutions across diverse industries, ensuring client satisfaction
              and long-term success.
            </p>
          </div>

          {/* Core Values */}
          <div className="text-center p-5 rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Core Values
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreValues.map((value, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-lg shadow-lg bg-white`}
                >
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">
                    {value.title}
                  </h4>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;

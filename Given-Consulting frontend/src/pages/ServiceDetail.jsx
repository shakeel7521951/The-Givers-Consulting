// import React from 'react';
// import { useParams } from 'react-router-dom';
// import {
//   FaPlane,
//   FaSuitcase,
//   FaHotel,
//   FaMapSigns,
//   FaBriefcase,
//   FaLaptopCode,
//   FaCloud,
//   FaShieldAlt,
//   FaLightbulb,
//   FaTruck,
//   FaFileInvoice,
//   FaChartLine,
// } from 'react-icons/fa';

// const serviceDetails = {
//   1: {
//     title: 'Travelling',
//     description:
//       'We offer premium travel solutions including bookings, itineraries, and more.',
//     cards: [
//       {
//         title: 'Flight Booking',
//         description: 'Affordable and convenient flight booking services.',
//         icon: <FaPlane />,
//       },
//       {
//         title: 'Travel Packages',
//         description: 'Customizable travel packages for every destination.',
//         icon: <FaSuitcase />,
//       },
//       {
//         title: 'Hotel Reservations',
//         description: 'Seamless hotel booking for a stress-free stay.',
//         icon: <FaHotel />,
//       },
//       {
//         title: 'Guided Tours',
//         description: 'Explore destinations with our professional guides.',
//         icon: <FaMapSigns />,
//       },
//     ],
//   },
//   2: {
//     title: 'Employment',
//     description:
//       'Our employment services help connect job seekers and employers efficiently.',
//     cards: [
//       {
//         title: 'Resume Building',
//         description: 'Crafting impactful resumes to showcase your skills.',
//         icon: <FaBriefcase />,
//       },
//       {
//         title: 'Job Matching',
//         description: 'Finding the perfect job opportunities tailored to you.',
//         icon: <FaBriefcase />,
//       },
//       {
//         title: 'Interview Preparation',
//         description: 'Tips and coaching to ace your next interview.',
//         icon: <FaLightbulb />,
//       },
//       {
//         title: 'Recruitment Services',
//         description: 'Helping employers find the best candidates.',
//         icon: <FaBriefcase />,
//       },
//     ],
//   },
//   3: {
//     title: 'IT Services',
//     description:
//       'Comprehensive IT solutions including development, maintenance, and support.',
//     cards: [
//       {
//         title: 'Mobile App Development',
//         description:
//           'Creating user-friendly mobile applications for iOS and Android.',
//         icon: <FaLaptopCode />,
//       },
//       {
//         title: 'Web Development',
//         description:
//           'Building responsive and modern websites tailored to your needs.',
//         icon: <FaLaptopCode />,
//       },
//       {
//         title: 'Cloud Services',
//         description:
//           'Reliable and scalable cloud computing solutions for businesses.',
//         icon: <FaCloud />,
//       },
//       {
//         title: 'Cybersecurity',
//         description:
//           'Protecting your digital assets with advanced security solutions.',
//         icon: <FaShieldAlt />,
//       },
//       {
//         title: 'IT Consulting',
//         description:
//           'Strategic IT consulting to boost your business efficiency.',
//         icon: <FaLightbulb />,
//       },
//     ],
//   },
//   4: {
//     title: 'Consultant',
//     description: 'Expert consulting services tailored to your business needs.',
//     cards: [
//       {
//         title: 'Business Strategy',
//         description: 'Developing winning strategies for your business.',
//         icon: <FaChartLine />,
//       },
//       {
//         title: 'Market Research',
//         description: 'In-depth analysis to drive your decisions.',
//         icon: <FaLightbulb />,
//       },
//       {
//         title: 'Financial Planning',
//         description: 'Optimizing resources with professional financial advice.',
//         icon: <FaChartLine />,
//       },
//       {
//         title: 'Process Improvement',
//         description: 'Streamlining workflows for better productivity.',
//         icon: <FaLightbulb />,
//       },
//     ],
//   },
//   5: {
//     title: 'Import & Export',
//     description:
//       'Global import and export services to expand your business reach.',
//     cards: [
//       {
//         title: 'Customs Clearance',
//         description: 'Hassle-free customs clearance for your goods.',
//         icon: <FaFileInvoice />,
//       },
//       {
//         title: 'Logistics Management',
//         description: 'Efficient logistics to streamline your operations.',
//         icon: <FaTruck />,
//       },
//       {
//         title: 'Export Documentation',
//         description: 'Comprehensive documentation for seamless exports.',
//         icon: <FaFileInvoice />,
//       },
//       {
//         title: 'Trade Consulting',
//         description: 'Expert advice on international trade regulations.',
//         icon: <FaLightbulb />,
//       },
//     ],
//   },
// };

// const ServiceDetail = () => {
//   const { id } = useParams();
//   const service = serviceDetails[id];

//   if (!service) {
//     return <h1>Service not found!</h1>;
//   }

//   return (
//     <section className='bg-gradient-to-b from-white to-[#A5B5DD] p-6'>
//       <h1 className='font-judson text-4xl text-center my-12'>
//         {service.title}
//       </h1>
//       <p className='font-roboto text-lg text-center'>{service.description}</p>

//       {service.cards && service.cards.length > 0 && (
//         <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
//           {service.cards.map((card, index) => (
//             <div
//               key={index}
//               className='bg-gradient-to-r from-blue-50 to-blue-100 shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transform hover:scale-105 transition-transform duration-300'
//             >
//               <div className='text-blue-500 text-4xl mb-4'>{card.icon}</div>
//               <h2 className='font-judson text-2xl mb-2'>{card.title}</h2>
//               <p className='font-roboto text-base text-gray-700'>
//                 {card.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       )}
//     </section>
//   );
// };

// export default ServiceDetail;

import React from 'react';
// import card2pic from "../../assets/card2pic.png";
// import card3pic from "../../assets/card3pic.png";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaDatabase,
  FaFigma,
} from 'react-icons/fa';
// import cardImage1 from "../../assets/cardfot1.png";
// import cardImage2 from "../../assets/cardfot2.png";
// import cardImage3 from "../../assets/cardfot3.png";

const HeroSection = () => {
  const cards = [
    {
      icon: <FaReact size={40} />,
      title: 'Discover our Expertise',
      description: 'Unlocking Your potentail',
    },
    {
      icon: <FaHtml5 size={40} />,
      title: 'Innovative Solutions',
      description: 'Driving Measurable Outcomes',
    },
    {
      icon: <FaCss3Alt size={40} />,
      title: 'Tailored Strategies',
      description: 'Sustainable Transformation',
    },
    {
      icon: <FaNodeJs size={40} />,
      title: 'Empowering Your Success',
      description: 'Comprehensive Consulting Solutions',
    },
    {
      icon: <FaDatabase size={40} />,
      title: 'Trusted Partnerships',
      description: 'Lasting Impact',
    },
    {
      icon: <FaFigma size={40} />,
      title: 'Personalized Approach',
      description: 'Cultivating Long-Term Growth',
    },
  ];

  // FOOTER CRAD END

  // const cardFooter = [
  //     { image: cardImage1, title: "Our Consultants", description: "Unparalleled Expertise" },
  //     { image: cardImage2, title: "Proven Track Record", description: "Collaborative Approach" },
  //     { image: cardImage3, title: "Trusted Advisors", description: "Transformative Impact" },
  // ];

  return (
    <>
      <div className='flex flex-wrap items-center justify-center h-screen px-6'>
        {/* Left Side - Content */}
        <div className='w-full md:w-1/2 text-center md:text-left p-32'>
          <h1>Our Services</h1>
          <h1 className='text-5xl font-bold mb-4'>
            Consulting <br></br> for your...
          </h1>
          <p className=' text-gray-600 mb-6'>
            At our consulting firm, we offer a comprehensive suite of services
            designed to address the diverse needs of businesses across
            industries. From strategic planning and organizational
            transformation to digital optimization and op...
          </p>
          <button className='px-6 py-3 bg-[#F2FF05] text-black rounded-full hover:bg-yellow-400 transition'>
            Learn More
          </button>
        </div>

        {/* Right Side - Image */}
        <div className='w-full md:w-1/2 flex justify-center mb-6 md:mb-0'>
          <img
            // src={card2pic}
            alt='Hero'
            className='rounded-lg shadow-lg w-[497px] h-[537px] '
          />
        </div>
      </div>

      {/* 2 CARD SECTION*/}
      <div className='flex flex-wrap items-center justify-center h-screen px-6 sm:text-1xl '>
        {/* Left Side - Image */}
        <div className='w-full md:w-1/2 flex justify-center mb-6 md:mb-0'>
          <img
            // src={card3pic}
            alt='Hero'
            className='rounded-lg shadow-lg w-[497px] h-[537px] '
          />
        </div>

        {/* Right Side - Content */}
        <div className='w-full md:w-1/2 text-center md:text-left md:text-2xl'>
          <h1>Discover Our Expertise</h1>
          <h1 className='text-4xl font-bold mb-4'>
            Navigating the Evolving Busi...
          </h1>
          <p className='text-lg text-gray-600 mb-6'>
            In today's fast-paced, ever-changing business environment, staying
            ahead of the curve is crucial. Our consultants are deeply immersed
            in the latest industry trends, emerging technologies, a... <br></br>
            <br></br>Whether you're seeking to expand into new markets, optimize
            your operations, or implement cutting-edge digital solutions, we
            have the expertise to help you navigate the complexities of your
            industry and achieve sustained competitive advantage <br></br>
            <br></br>From strategic planning and organizational design to
            process improvement and change management, our comprehensive
            solutions are designed to propel your business forward, empo
          </p>
          <button className='px-6 py-3 bg-[#F2FF05] text-black rounded-full hover:bg-[#f1fa43] transition'>
            Get it Touch
          </button>
        </div>
      </div>

      {/* 3 CARD SECTION */}
      <div className='py-12'>
        {/* Heading Section */}
        <div className='text-center mb-12'>
          <h1>Our Proven Approach</h1>
          <h1 className='text-4xl font-bold mb-4'>Driving Meaningful Change</h1>
          <p className='text-lg text-gray-600'>
            At the heart of our consulting practice is a proven, iterative
            approach that ensures the success of every <br></br>engagement. We
            begin by deeply immersing ourselves in your business, working
            closely with your team to{' '}
          </p>
        </div>

        {/* Cards Section */}
        {/* Cards Section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-5xl mx-auto h-[25rem]'>
          {cards.map((card, index) => (
            <div
              key={index}
              className='bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition'
            >
              <div className='text-yellow-500 mb-4 flex items-center justify-center'>
                {card.icon}
              </div>
              <h2 className='text-xl font-semibold mb-2'>{card.title}</h2>
              <p className='text-gray-600'>{card.description}</p>
            </div>
          ))}
        </div>

        {/* Centered Button */}
        <div className='flex justify-center mt-12'>
          <button className='px-6 py-3 bg-[#DBFB1C] text-black rounded-full hover:bg-yellow-400 transition'>
            Contact Us
          </button>
        </div>
      </div>

      {/* FOOTER CRAD END */}
      <div className='py-12 px-6'>
        {/* Heading and Description */}
        <div className='text-center mb-8'>
          <h1 className='text-4xl font-bold mb-4'>Let's Discuss Your Goals</h1>
          <p className='text-lg text-gray-600'>
            At our consulting firm, we're passionate about empowering businesses
            like yours to reach new heights. We'd love <br></br>the opportunity
            to learn more about your unique challenges and explore how our
            comprehensive consulting servi
          </p>
        </div>

        {/* Cards Section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto'>
          {/* {cardFooter.map((card, index) => (
                        <div
                            key={index}
                            className=" p-6  hover:shadow-lg transition"
                        >
                            <img
                                src={card.image}
                                alt={card.title}
                                className="w-full h-80 object-cover rounded-md mb-4"
                            />
                            <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
                            <p className="text-gray-600">{card.description}</p>
                        </div>
                    ))} */}
        </div>
      </div>
    </>
  );
};

export default HeroSection;

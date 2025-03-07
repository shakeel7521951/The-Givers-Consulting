import uk from "../assets/InternationalPictures/UK.png";
import us from "../assets/InternationalPictures/US.png";
import Austra from "../assets/InternationalPictures/Australia.png";
import cana from "../assets/InternationalPictures/Canada.png";
import ireland from "../assets/InternationalPictures/Ireland.png";
import newzea from "../assets/InternationalPictures/New zealand.png";
import solution from "../assets/InternationalPictures/solution.png";
import workPermit from "../assets/import&export/workPermit.png";
import settlementServices from "../assets/import&export/settlementServices.jpg";
import candidateScracing from "../assets/import&export/candidateScracing.png";
import visa from "../assets/import&export/visa.webp";
import orientation from "../assets/import&export/orientation.jpg";

import { HeroBanner } from "../component";
import { GiMaterialsScience } from "react-icons/gi";
import { MdAccountBalance, MdEngineering } from "react-icons/md";

const International = () => {
  const CountryCards = [
    {
      id: 1,
      img: uk,
      title: "United Kingdom",
    },
    {
      id: 2,
      img: us,
      title: "United state",
    },
    {
      id: 3,
      img: Austra,
      title: "Australia",
    },
    {
      id: 4,
      img: cana,
      title: "Canada",
    },
    {
      id: 5,
      img: ireland,
      title: "Ireland",
    },
    {
      id: 6,
      img: newzea,
      title: "New Zealand",
    },
  ];

  const cards = [
    {
      id: 1,
      img: workPermit,
      title: "Work Permit Acquisition",
      description:
        "Assist candidates in navigating complex visa and work permit processes. Provide guidance on required documentation, compliance, and application procedures. Liaise with employers and government agencies for timely approvals.",
    },
    {
      id: 2,
      img: settlementServices,
      title: "Settlement Services",
      description:
        "Guidance on housing, banking, and community integration in the destination country. Post-arrival support to help expatriates adapt to their new environment with confidence.",
    },
    {
      id: 3,
      img: candidateScracing,
      title: "Candidate Screening and Selection",
      description:
        "Conduct thorough assessments to match candidates with the right opportunities. Focus on high-demand industries like healthcare, IT, construction, and engineering to ensure a perfect fit.",
    },
    {
      id: 4,
      img: visa,
      title: "Visa and Documentation Assistance",
      description:
        "Guide candidates and employers through visa filing, endorsements, and renewals. Ensure all documentation complies with immigration regulations for seamless processing.",
    },
    {
      id: 5,
      img: orientation,
      title: "Pre-departure Orientation",
      description:
        "Equip expatriates with essential information on cultural adaptation, travel arrangements, and professional expectations to ensure a smooth transition abroad.",
    },
  ];

  const Courses = [
    {
      id: 1,
      text: "Social Science",
      icons: <GiMaterialsScience className="text-black" />,
      desc: "Unlocking Your Potential",
    },
    {
      id: 2,
      text: "Accounting",
      icons: <MdAccountBalance className="text-black" />,
      desc: "Driving Measurable Outcomes",
    },
    {
      id: 3,
      text: "Engineering",
      icons: <MdEngineering className="text-black" />,
      desc: "Sustainable Transformation",
    },
  ];

  return (
    <>
      <HeroBanner
        img={solution}
        text={"Solutions crafted for success"}
        desc={"Here You meet with best consultants!! "}
      />
      <div className="main-par">
        <div className="mt-10">
          <h2 className="text-xl sm:text-3xl font-roboto">
            Your Dream Study Destination Awaits
          </h2>
          <div className="md:w-[15%] h-[7px] w-[15%] bg-black rounded-full"></div>
          <p className="text-sm sm:text-lg mt-3 font-judson">
            Begin an exciting academic journey in these varied and welcoming
            study locations!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 my-9 mx-5">
          {CountryCards.map((data) => {
            return (
              <div className="relative" key={data.id}>
                <img src={data.img} alt="" />
                <div className="absolute bottom-5 w-36 text-center left-1/2 -translate-x-1/2 text-lg font-semibold text-text-color font-roboto">
                  {data.title}
                </div>
              </div>
            );
          })}
        </div>

        <div className="min-h-[80vh] rounded-lg mt-5 p-6 w-full">
          <h1 className="text-left text-xl sm:text-3xl font-extrabold text-gray-800">
            Overseas Employment Services
          </h1>
          <div className="md:w-[15%] h-[7px] w-[15%] bg-black rounded-full"></div>
          <p className="text-gray-600 leading-relaxed mb-8 text-left">
            We specialize in connecting skilled professionals with global
            employment opportunities, with a strong emphasis on work permit
            acquisition and settlement abroad.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {cards.map((data) => (
              <div
                key={data.id}
                className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transform transition-all duration-300 hover:scale-105"
              >
                <img
                  src={data.img}
                  alt={data.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <h2 className="text-lg font-bold text-gray-800 mb-3 text-center">
                    {data.title}
                  </h2>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {data.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="font-roboto sm:mt-5">
          <h2 className="text-xl sm:text-3xl">
            Popular courses among Pakistani students
          </h2>
          <div className="md:w-[15%] h-[7px] w-[15%] bg-black rounded-full"></div>
          <div className="flex flex-wrap justify-center items-center gap-8 my-9">
            {Courses.map((course) => (
              <div className="bg-white flex flex-col items-center justify-center w-80 h-60 rounded">
                <p className="text-3xl bg-[#BCF20B] p-4 rounded-full">
                  {course.icons}
                </p>
                <h1 className="mt-4 text-[#656468] text-xl">{course.text}</h1>
                <p className="mt-2 text-[#868487]">{course.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default International;

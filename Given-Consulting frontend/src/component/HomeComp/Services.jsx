import consultancy from '../../assets/HomePictures/consultancy.png';
import employment from '../../assets/HomePictures/employment.png';
import it from '../../assets/HomePictures/it.png';
import mining from '../../assets/HomePictures/miningOperations.png';
import importAndExport from '../../assets/HomePictures/imort.png';
import orderSupplies from '../../assets/HomePictures/orderSupplies.png';
import { useNavigate } from "react-router-dom";

const ourServices = [
  {
    id: 1,
    link: "consultancy",  // Consultancy Services
    image: consultancy,
    title: "Consultancy Services",
    description: "Expert guidance to enhance your business strategies, operations, and efficiency."
  },
  {
    id: 2,
    image: employment,
    link: "employment",  // Overseas Employment Services
    title: "Overseas Employment Services",
    description: "Providing top-tier job placement services across international markets to meet your career goals."
  },
  {
    id: 3,
    image: it,
    link: "it",  // IT-Enabled Services
    title: "IT-Enabled Services",
    description: "Advanced IT solutions tailored to boost your business with cutting-edge technology."
  },
  {
    id: 4,
    image: mining,
    link: "mining",  // Mining and Mineral Resources
    title: "Mining and Mineral Resources",
    description: "Sustainable and efficient management of mining resources for a greener future."
  },
  {
    id: 5,
    image: importAndExport,
    link: "import-export",  // Import & Export
    title: "Import & Export",
    description: "End-to-end services in the import and export sector to expand your global reach."
  },
  {
    id: 6,
    image: orderSupplies,  // General Order Supplies
    link: "order-supplies",  // General Order Supplies
    title: "General Order Supplies",
    description: "Reliable supplies and services for businesses across various industries."
  },
];

const Services = () => {
  const navigate = useNavigate();

  const handleCardClick = (link) => {
    navigate(`/${link}`);
  };

  return (
    <section className=" rounded-lg my-16 pt-6 pb-10 px-6">
      <h1 className="font-judson text-4xl font-bold text-center text-gray-800 mb-7">Our Services</h1>
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ourServices?.map((item) => {
          return (
            <div
              key={item?.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl cursor-pointer py-5"
              onClick={() => handleCardClick(item.link)}
            >
              <div className="relative">
                <img src={item.image} alt={item.title} className="w-20 h-20 mx-auto my-2" />
              </div>
              <div className="p-6">
                <h1 className="font-roboto text-center text-xl font-semibold text-gray-800">{item?.title}</h1>
                <p className="text-gray-600 text-center mt-2">{item?.description}</p>
              </div>
            </div>
          );
        })}
      </main>
    </section>
  );
};

export default Services;

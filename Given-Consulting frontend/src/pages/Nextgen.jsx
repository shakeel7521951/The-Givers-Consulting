import React from "react";

const App = () => {
  const cards = [
    {
      id: 1,
      image:
        "https://img.freepik.com/premium-vector/human-resources-manager-concept_277904-9483.jpg?ga=GA1.1.453590991.1730831293&semt=ais_hybrid",
      title: "Recruitment & Staffing",
      description:
        "Find the right talent with our tailored recruitment strategies.",
    },
    {
      id: 2,
      image:
        "https://img.freepik.com/premium-vector/payroll-system-concept-vector-illustration-online-income-calculation-automatic-payment_675567-7307.jpg?ga=GA1.1.453590991.1730831293&semt=ais_hybrid",
      title: "Payroll & Benefits Administration",
      description:
        "Accurate and timely payroll management with benefits solutions.",
    },
    {
      id: 3,
      image:
        "https://img.freepik.com/premium-vector/office-team-praises-employees-business-success-professional-recognition-concept_923732-826.jpg?ga=GA1.1.453590991.1730831293&semt=ais_hybrid",
      title: "Employee Relations & Engagement",
      description:
        "Foster a positive work environment with proactive employee relations.",
    },
    {
      id: 4,
      image:
        "https://img.freepik.com/free-vector/hand-drawn-flat-design-benchmark-illustration_23-2149331621.jpg?ga=GA1.1.453590991.1730831293&semt=ais_hybrid",
      title: "Compliance & Risk Management",
      description:
        "Stay ahead of labor laws and regulations with our compliance expertise.",
    },
    {
      id: 5,
      image:
        "https://img.freepik.com/free-vector/workplace-culture-abstract-concept-illustration-shared-values-belief-systems-attitude-work-company-team-corporate-culture-high-performance-employee-health_335657-1098.jpg?ga=GA1.1.453590991.1730831293&semt=ais_hybrid",
      title: "Training & Development",
      description:
        "Enhance employee skills and productivity with customized training programs.",
    },
    {
      id: 6,
      image:
        "https://img.freepik.com/premium-vector/hr-manager-is-interviewing-job-seeker-manager-reads-candidates-data-job-interview-concept-flat-vector-illustration_923732-4942.jpg?ga=GA1.1.453590991.1730831293&semt=ais_hybrid",
      title: "HR Consulting",
      description: "Expert advice to optimize your HR policies and practices.",
    },
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <div
        className="bg-cover bg-center h-[400px] flex items-center justify-center text-white rounded"
        style={{
          backgroundImage: `url(${nextGenBanner})`,
        }}
      >
        <h1 className="text-3xl md:text-4xl mx-auto px-4 text-center font-bold">Welcome to Our HR Solutions</h1>
      </div>

      {/* Title and Description Section */}
      <div className="w-[100%] md:w-[95%] px-6 rounded-lg mx-auto bg-white pb-8 mt-5 md:mt-7">
        <section className="text-center py-10 px-5">
          <h2 className="text-2xl font-semibold mb-4">
            Let Us Handle Your HR Needs
          </h2>
          <p className="text-gray-600 text-lg text-justify">
            Our Complete HR Services offer end-to-end solutions to streamline
            your human resources functions, allowing you to focus on what
            matters most—growing your business. From recruitment and onboarding
            to payroll management, employee development, and compliance, we
            ensure that your HR processes are efficient, compliant, and
            employee-focused.{" "}
          </p>
        </section>

        {/* Cards Section */}
        <section className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-7 max-w-5xl mx-auto">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-[#EAE1D1] rounded-lg shadow-md p-6 text-center hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer"
            >
              <img
                src={card.image}
                alt={card.title}
                className="text-yellow-500 mb-4 w-36 h-36 mx-auto flex items-center justify-center"
              />
              <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
              <p className="text-gray-600 text-center leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default App;

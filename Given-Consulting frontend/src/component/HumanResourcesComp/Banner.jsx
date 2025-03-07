import nextGenBanner from "../../assets/nextgenBanner.jpg";

const Banner = () => {
  return (
    <div
      className="bg-no-repeat bg-cover min-h-[150px] sm:min-h-[310px] md:min-h-[420px] lg:min-h-[470px] relative"
      style={{
        backgroundImage: `url(${nextGenBanner})`,
      }}
    ></div>
  );
};

export default Banner;

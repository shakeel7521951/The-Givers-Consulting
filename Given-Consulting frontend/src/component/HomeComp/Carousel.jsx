import { useState, useEffect } from "react";
import img from "../../assets/HomePictures/ShipHomePage.png";
import img2 from "../../assets/HomePictures/ShipSide.png";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import Button, { FilledButton } from "../ButtonComponents/BorderButton";
import { Link } from "react-router-dom";
import homeBanner from '../../assets/homeBannner.jpg';

const Carousel = () => {
  const images = [homeBanner, img2];
  const texts = [
    {
      title: "The Givers Consultancy",
      description:
        "The Givers (Pvt) Ltd delivers consultancy, IT services, overseas employment, and mining solutions, fostering global business growth and innovation.",
    },
    {
      title: "Fast and Reliable Services",
      description:
        "We specialize in providing innovative solutions for consultancy, IT, and mining, ensuring growth and success worldwide.",
    },
  ];

  // State to track the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next image
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous image
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Autoplay functionality
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000); // Change every 4 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative w-full h-[400px] sm:h-[540px] md:h-[600px]">
      {/* Image with overlay text */}
      <div className="relative w-full h-full">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover rounded-md"
          aria-hidden="true"
        />
        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-between bg-black bg-opacity-50 font-roboto">
          <main className="mx-4 text-white">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-semibold leading-snug sm:ms-6">
              {texts[currentIndex].title}
            </h1>
            <p className="text-sm sm:text-lg w-full sm:max-w-[70%] leading-relaxed font-semibold sm:ms-8 my-6">
              {texts[currentIndex].description}
            </p>
            <div className="flex items-center justify-center gap-4 max-w-96">
              {/* Get Started Button */}
              <Link to="/consultancy" className="no-underline">
                <Button
                  className="text-white hover:text-black"
                  text={"Get Started"}
                  color={"white"}
                />
              </Link>

              {/* Contact Us Button */}
              <Link to="/contact" className="no-underline">
                <FilledButton text={"Contact Us"} color={"black"} />
              </Link>
            </div>
          </main>

          {/* Glassmorphism Card */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm shadow-lg rounded-xl p-6 mx-4 max-w-xs hidden md:block">
            <h2 className="text-2xl font-semibold text-white">
              Fast Delivery
            </h2>
            <p className="text-white text-opacity-80 mb-4">
              Your package will be delivered in 4 days
            </p>
            <img src={homeBanner} alt="Fast Delivery Preview" />
          </div>
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="absolute bottom-6 right-4 flex gap-4">
        <IoIosArrowDropleft
          size={"50px"}
          onClick={prevSlide}
          className="text-[#FFFFFF85] cursor-pointer"
        />
        <IoIosArrowDropright
          size={"50px"}
          className="text-[#FFFFFF85] cursor-pointer"
          onClick={nextSlide}
        />
      </div>
    </div>
  );
};

export default Carousel;

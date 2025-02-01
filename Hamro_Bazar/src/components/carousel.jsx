import { useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered, slides.length]);

  const previousSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrent(index);
  };

  return (
    <div
      className="carousel overflow-hidden relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="flex  w-auto justify-between transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((s, index) => (
          <img
            key={index}
            src={s}
            className="w-full  "
            alt={`Slide ${index}`}
          />
        ))}
      </div>

      <div className="absolute top-0 w-full h-full justify-between flex text-[#f7ad0d] text-xl px-1">
        <button onClick={previousSlide}>
          <IoIosArrowBack />
        </button>
        <button onClick={nextSlide}>
          <IoIosArrowForward />
        </button>
      </div>

      {/* Dot Navigation */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-1 rounded-full ${
              current === index ? "bg-[#f7ad0d] " : "bg-[#F4FFC3]"
            } cursor-pointer`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;

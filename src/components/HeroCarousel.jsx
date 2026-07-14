import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import { useState } from "react";
import { useEffect } from "react";
export default function HeroCarousel({ data }) {
  const { heroCarouselData } = data;
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      slide === heroCarouselData.length - 1 ? setSlide(0) : setSlide(slide + 1);
    }, 10000);

    return () => {
      clearInterval(slideInterval);
    };
  }, [heroCarouselData, slide]);

  return (
    <div className="flex mt-10 max-lg:mt-4 w-full h-[18rem] max-sm:h-[12rem] overflow-hidden relative bg-black ">
      {heroCarouselData.map((item, index) => {
        return (
          <div
            className={
              slide === index ? "flex gap-3 size-full shrink-0" : "hidden"
            }
            key={index}
          >
            <div className="w-1/2 h-full text-primary flex flex-col justify-center gap-5 p-4">
              <div className="flex gap-3 items-center">
                {item.logo && (
                  <img
                    className="w-[3rem] h-[3rem] max-sm:w-[2rem] max-sm:h-[2rem]"
                    src={item.logo}
                    alt={item.logo}
                  />
                )}
                <h3 className="text-2xl max-lg:text-xl max-sm:text-sm max-sm:leading-4">{item.product}</h3>
              </div>
              <h2 className="text-4xl max-lg:text-2xl max-sm:text-[0.8rem] max-sm:leading-4 font-bold w-full">{item.discount}</h2>
              <Link
                className="flex items-center gap-3 max-sm:text-[0.8rem] hover:text-action hover:underline transition-all w-max"
                to={item["quick-link"]}
              >
                Shop Now <HiArrowRight />
              </Link>
            </div>
            <img className="w-1/2 h-full" src={item.img} alt={item.alt} />
          </div>
        );
      })}
      <span className="absolute bottom-2 flex gap-3 w-full justify-center">
        {heroCarouselData.map((_, index) => {
          return (
            <button
              className={
                slide === index
                  ? "bg-action rounded-full w-2 h-2"
                  : "bg-secondary rounded-full w-2 h-2"
              }
              key={index}
              onClick={() => setSlide(index)}
            ></button>
          );
        })}
      </span>
    </div>
  );
}

HeroCarousel.propTypes = {
  data: PropTypes.object.isRequired,
};

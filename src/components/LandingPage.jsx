import Header from "./Header";
import { NavLink } from "react-router-dom";
import HeroCarousel from "./HeroCarousel";
import heroCarouselData from "../data/heroCarouselData.json";
import Footer from "./Footer";
import { MdNavigateNext } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";
import FlashSales from "./FlashSales";
import Categories from "./Categories";
import BestSellingProducts from "./BestSellingProducts";
import ExploreOurProducts from "./ExploreOurProducts";
import NewArrivals from "./NewArrivals";
import OurServices from "./OurServices";
import { useState, useEffect } from "react";

export default function LandingPage() {
  const [targetDate] = useState(() => {
    const initialDate = new Date();
    initialDate.setDate(initialDate.getDate() + 5);
    initialDate.setSeconds(initialDate.getSeconds() - 45);
    return initialDate;
  });
  const [showSecondaryNav, setShowSecondaryNav] = useState(false)
  const [isMediumScreen, setIsMediumScreen] = useState(window.innerWidth >= 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMediumScreen(window.innerWidth >= 640);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isMediumScreen) {
      setShowSecondaryNav(false);
    }
  }, [isMediumScreen]);

  const handleDropDown = () => {
    if (!isMediumScreen) {
      setShowSecondaryNav((prev) => !prev);
    }
  };

  const calculateTimeLeft = () => {
    // const difference = +new Date("2024-05-18") - +new Date();

    const difference = +targetDate - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24))
          .toString()
          .padStart(2, "0"),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24)
          .toString()
          .padStart(2, "0"),
        minutes: Math.floor((difference / 1000 / 60) % 60)
          .toString()
          .padStart(2, "0"),
        seconds: Math.floor((difference / 1000) % 60)
          .toString()
          .padStart(2, "0"),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <>
      <Header />
      <section className="flex px-[7%] mb-6 gap-[7rem] w-full justify-between max-lg:flex-col max-lg:gap-4 max-lg:items-center relative">
        <button
          type="button"
          aria-labelledby="product types quick links drop down"
          className="hidden max-sm:block"
          onClick={handleDropDown}
        >
          <FaChevronDown className="absolute z-20 top-0 left-[7%] border border-t-0 rounded-b-lg w-8 h-4" />
        </button>
        <nav className={
          isMediumScreen 
          ? "flex flex-col gap-3 text-sm w-[11rem] bg-white pr-2 max-lg:pr-0 pt-10 max-lg:pt-4 border-r-[1px] border-secondary max-lg:border-r-0 h-max max-lg:w-full max-lg:flex-row max-lg:flex-wrap max-lg:justify-center max-sm:absolute z-10 max-sm:px-[7%] max-sm:py-8"
          : showSecondaryNav
          ? "flex flex-col gap-3 text-sm w-[11rem] bg-white pr-2 max-lg:pr-0 pt-10 max-lg:pt-4 border-r-[1px] border-secondary max-lg:border-r-0 h-max max-lg:w-full max-lg:flex-row max-lg:flex-wrap max-lg:justify-center max-sm:absolute z-10 max-sm:px-[7%] max-sm:py-8"
          : "hidden"
        }>
          <NavLink
            className="flex items-center pr-2 justify-between transition-all hover:text-action hover:underline"
            to="/"
          >
            Woman&#39;s Fashion <MdNavigateNext />
          </NavLink>
          <NavLink
            className="flex items-center pr-2 justify-between transition-all hover:text-action hover:underline"
            to="/"
          >
            Men&#39;s Fashion <MdNavigateNext />
          </NavLink>
          <NavLink
            className="transition-all hover:text-action hover:underline"
            to="/"
          >
            Electronics
          </NavLink>
          <NavLink
            className="transition-all hover:text-action hover:underline"
            to="/"
          >
            Home & Lifestyle
          </NavLink>
          <NavLink
            className="transition-all hover:text-action hover:underline"
            to="/"
          >
            Medicine
          </NavLink>
          <NavLink
            className="transition-all hover:text-action hover:underline"
            to="/"
          >
            Sports & Outdoor
          </NavLink>
          <NavLink
            className="transition-all hover:text-action hover:underline"
            to="/"
          >
            Baby&#39;s & Toys
          </NavLink>
          <NavLink
            className="transition-all hover:text-action hover:underline"
            to="/"
          >
            Groceries & Pets
          </NavLink>
          <NavLink
            className="transition-all hover:text-action hover:underline"
            to="/"
          >
            Health & Beauty
          </NavLink>
        </nav>
        <HeroCarousel data={heroCarouselData} />
      </section>
      <FlashSales />
      <Categories />
      <BestSellingProducts />
      <section className="block w-full px-[7%] my-8">
        <div className=" w-full max-lg:items-center justify-between bg-black text-primary p-8 items-start">
          <h2 className="text-[1.2rem] mb-6 text-green-cus">Categories</h2>

          <div className="w-full h-full flex max-lg:flex-col-reverse items-center gap-8">
            <div className="w-1/2 max-lg:w-full flex flex-col gap-8 max-lg:items-center">
              <h3 className="text-[3rem] lg:w-3/4 max-lg:text-[2rem] font-bold max-lg:text-center">
                Enhance Your Music Experience
              </h3>
              <div className="flex gap-6">
                <div className="flex flex-col gap-0 text-[0.6rem] font-bold p-1 text-secondary rounded-full bg-secondary w-[3.7rem] h-[3.7rem] items-center justify-center">
                  <span>{timeLeft.days}</span>
                  <span>Days</span>
                </div>
                <div className="flex flex-col gap-0 text-[0.6rem] font-bold p-1 text-secondary rounded-full bg-secondary w-[3.7rem] h-[3.7rem] items-center justify-center">
                  <span>{timeLeft.hours}</span>
                  <span>Hours</span>
                </div>
                <div className="flex flex-col gap-0 text-[0.6rem] font-bold p-1 text-secondary rounded-full bg-secondary w-[3.7rem] h-[3.7rem] items-center justify-center">
                  <span>{timeLeft.minutes}</span>
                  <span>Minutes</span>
                </div>
                <div className="flex flex-col gap-0 text-[0.6rem] font-bold p-1 text-secondary rounded-full bg-secondary w-[3.7rem] h-[3.7rem] items-center justify-center">
                  <span>{timeLeft.seconds}</span>
                  <span>Seconds</span>
                </div>
              </div>
              <button className="w-[10rem] rounded-lg font-bold text-lg p-3 hover:translate-x-2 hover:-translate-y-1 transition-all bg-green-cus">
                Buy Now!
              </button>
            </div>
            <img
              className="w-1/2 max-lg:w-3/4 h-full"
              src="/buy-now-img/music-box.png"
              alt="music box"
            />
          </div>
        </div>
      </section>
      <ExploreOurProducts />
      <NewArrivals />
      <OurServices />
      <Footer />
    </>
  );
}

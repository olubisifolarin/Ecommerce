import React from "react";
import imgbg from "../assets/imgbg.png";
import boxer from "../assets/boxer.png";
import pinkbag from "../assets/pinkbag.png";
import crocs from "../assets/crocs.png";
import Services from "./Services";
import Shop from "./Shop";

const Home = () => {
  return (
    <>
      <div className="flex flex-wrap items-center justify-between px-4 py-10 md:px-12">
        {/* Text Section */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left text-white">
            Welcome to Elegant Wears, the place where style and comfort collide to make fashion a statement!
          </h1>
          <div className="text-center md:text-left pt-8">
            <button className="bg-yellow-700 hover:bg-white-700 text-white  font-semibold text-lg md:text-xl py-3 px-8 rounded-md border border-white">
              Shop Now 
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 grid grid-cols-2 gap-4 justify-items-center items-center">
            <img src={imgbg} alt="home background" className="w-40 h-auto object-contain" />
            <img src={boxer} alt="boxer" className="w-32 h-auto object-contain" />
            <img src={pinkbag} alt="pink bag" className="w-24 h-auto object-contain" />
            <img src={crocs} alt="crocs" className="w-32 h-auto object-contain" />
        </div>

      </div>

      <Services />
      <Shop />
    </>
  );
};

export default Home;
